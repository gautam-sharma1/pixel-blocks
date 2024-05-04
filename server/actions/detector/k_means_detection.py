from actions.Action import Action
import numpy as np
import cv2

class KMeansDetector(Action):
    """
    KMeansDetector Class

    A class to perform K-Means clustering on an input RGB image.

    Methods:
        perform_action(blk, prev_input):
            Perform K-Means clustering on the input RGB image.

    """

    def __init__(self):
        super().__init__()

    @staticmethod
    def perform_action(blk, prev_input):
        """
        Perform K-Means clustering on the input RGB image.

        Args:
            blk (dict): A dictionary containing block values with '_user_data' key specifying the number of clusters (k)
            prev_input: Previous input data (RGB image)

        Returns:
            dict: A dictionary containing the result of K-Means clustering and any error encountered during processing.

        """
        try:
            # Check if the input image is grayscale
            if len(prev_input.shape) != 3:
                return {"out": None, "error": "K Means detector needs a RGB input image. Please make sure the input image has at least 3 channels."}

            # Reshape the input image
            reshaped_image = prev_input.reshape((-1, 3))

            # Convert to np.float32
            reshaped_image_float_32 = np.float32(reshaped_image)

            # Define criteria, number of clusters (K), and apply kmeans()
            criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 10, 1.0)
            K = int(blk["_user_data"]["k"])
            ret, label, center = cv2.kmeans(reshaped_image_float_32, K, None, criteria, 10, cv2.KMEANS_RANDOM_CENTERS)

            # Convert back into uint8, and make original image
            center = np.uint8(center)
            res = center[label.flatten()]
            out = res.reshape((prev_input.shape))

            return {"out": out, "error": None}

        except Exception as e:
            return {"out": None, "error": str(e)}
