"""
SobelFilter Action Module

This module provides functionality to apply Sobel edge detection filter on grayscale images.

Classes:
    SobelFilter: A class to apply Sobel edge detection filter on grayscale images.

Usage:
    sobel_filter_action = SobelFilter()
    result = sobel_filter_action.perform_action(block, prev_input)

"""

from actions.Action import Action
import cv2
import numpy as np


class SobelFilter(Action):
    """
    SobelFilter Class

    A class to apply Sobel edge detection filter on grayscale images.

    Methods:
        perform_action(block, prev_input):
            Apply Sobel edge detection filter on grayscale image.

    """

    def __init__(self):
        super().__init__()

    @staticmethod
    def perform_action(blk, prev_input):
        """
        Apply Sobel edge detection filter on grayscale image.

        Args:
            blk (dict): A dictionary containing block values with '_user_data' keys specifying filter parameters.
            prev_input: Previous input data, expected to be a grayscale image.

        Returns:
            dict: A dictionary containing the image processed with Sobel filter and any error encountered during processing.

        """
        try:
            # Convert the input image to grayscale
            input_image = prev_input
            grayscale_image = cv2.cvtColor(input_image, cv2.COLOR_RGB2GRAY)

            # Extract filter parameters from block data
            dx = int(blk["_user_data"].get("dx", 0))
            dy = int(blk["_user_data"].get("dy", 0))
            filter_size = int(blk["_user_data"].get("filter_size", 1))

            # Apply Sobel edge detection filter
            out = cv2.Sobel(grayscale_image, cv2.CV_64F, dx, dy, ksize=filter_size)

            return {"out": out, "error": None}

        except Exception as e:
            return {"out": None, "error": str(e)}

