"""
ImageInput Action Module

This module provides functionality to process image data received as base64 encoded bytes.

Classes:
    ImageInput: A class to decode base64 encoded image bytes and convert them into OpenCV image format.

Usage:
    image_input_action = ImageInput()
    result = image_input_action.perform_action(block)

"""

from actions.Action import Action
import cv2
import base64
import numpy as np


class ImageInput(Action):
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
            # Load the image first
            image = block["imageAsBytes"]

            # Decode base64 encoded image bytes
            image_bytes = base64.b64decode(image)

            # Convert the image bytes to a NumPy array
            nparr = np.frombuffer(image_bytes, np.uint8)

            # Decode the image from the NumPy array
            opencv_image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

            # Check the dimensions of the image (height, width, channels)
            print(opencv_image.shape)

            # Check the data type of the image (uint8, float32, etc.)
            print(opencv_image.dtype)

            # Check the minimum and maximum pixel values
            print(np.min(opencv_image), np.max(opencv_image))

            return {"out": opencv_image, "error": None}

        except Exception as e:
            return {"out": None, "error": str(e)}

