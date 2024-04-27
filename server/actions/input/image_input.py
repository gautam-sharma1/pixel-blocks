from actions.Action import Action
import cv2
import base64
import numpy as np


class ImageInput(Action):

    def __init__(self):
        super().__init__()

    @staticmethod
    def perform_action(block, prev_input=None):
        '''
        Will receive a dictionary of block values
        '''
        
        # Load the image first
        image = block["imageAsBytes"]

        image_bytes = base64.b64decode(image)
        
        # Convert the image bytes to a NumPy array
        nparr = np.frombuffer(image_bytes, np.uint8)

        # Decode the image from the NumPy array
        opencv_image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        print(opencv_image.shape)  # Check the dimensions of the image (height, width, channels)
        print(opencv_image.dtype)  # Check the data type of the image (uint8, float32, etc.)
        print(np.min(opencv_image), np.max(opencv_image))  # Check the minimum and maximum pixel values

        return {"out": opencv_image, "error": None}

        # Now you can use the opencv_image variable to perform various operations with OpenCV
        # For example, you can display the image using imshow
        # cv2.imshow('Image', opencv_image)
        # cv2.waitKey(0)
        # cv2.destroyAllWindows()






