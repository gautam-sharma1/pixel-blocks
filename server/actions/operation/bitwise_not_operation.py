"""


"""

from actions.Action import Action
import cv2
import numpy as np


class BitwiseNotOperation(Action):
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

            mask_inv = cv2.bitwise_not(prev_input)

            return {"out": mask_inv, "error": None}

        except Exception as e:
            return {"out": None, "error": str(e)}

