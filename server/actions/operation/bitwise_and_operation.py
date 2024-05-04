"""


"""

from actions.Action import Action
import cv2
import numpy as np
import base64

class BitwiseAndOperation(Action):
    """
    ImageInput Class

    A class to decode base64 encoded image bytes and convert them into OpenCV image format.

    Methods:
        perform_action(block, prev_input=None):
            Decode base64 encoded image bytes and convert them into OpenCV image format.

    """

    def __init__(self):
        super().__init__()

    @staticmethod
    def perform_action(block, prev_input=None):
        """
        Decode base64 encoded image bytes and convert them into OpenCV image format.

        Args:
            block (dict): A dictionary containing block values with 'imageAsBytes' key
            prev_input (optional): Previous input data (not used in this method)

        Returns:
            dict: A dictionary containing the decoded image in OpenCV format and any error encountered during processing.

        """
        try:
            if prev_input is None:
                return {"out": None, "error": "Bitwise not block does not receive a valid image!"}

            image = block["_user_data"]["result"]
            # Decode base64 encoded image bytes
            image_bytes = base64.b64decode(image)

            # Convert the image bytes to a NumPy array
            nparr = np.frombuffer(image_bytes, np.uint8)

            # Decode the image from the NumPy array
            image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

            collapsed_image_shape = image.shape
            prev_input_shape = prev_input.shape

            if image.shape != prev_input.shape:
                # Find the common shape
                common_shape = tuple([min(s1, s2) for s1, s2 in zip(image.shape, prev_input.shape)])

                # Resize images
                image = cv2.resize(image, common_shape[:2][::-1])
                prev_input = cv2.resize(prev_input, common_shape[:2][::-1])

                # Perform bitwise AND operation
            bitwise_and_image = cv2.bitwise_and(image, prev_input)

            return {"out": bitwise_and_image, "error": None}

        except Exception as e:
            return {"out": None, "error": str(e)}

