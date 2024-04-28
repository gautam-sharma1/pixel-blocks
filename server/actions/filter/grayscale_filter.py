"""
GrayscaleFilter Action Module

This module provides functionality to convert color images to grayscale.

Classes:
    GrayscaleFilter: A class to convert color images to grayscale.

Usage:
    grayscale_filter_action = GrayscaleFilter()
    result = grayscale_filter_action.perform_action(block, prev_input)

"""

from actions.Action import Action
import cv2


class GrayscaleFilter(Action):
    """
    GrayscaleFilter Class

    A class to convert color images to grayscale.

    Methods:
        perform_action(block, prev_input):
            Convert color image to grayscale.

    """

    def __init__(self):
        super().__init__()

    @staticmethod
    def perform_action(blk, prev_input):
        """
        Convert color image to grayscale.

        Args:
            blk (dict): A dictionary containing block values with '_user_data' key specifying color scheme.
            prev_input: Previous input data, expected to be a color image.

        Returns:
            dict: A dictionary containing the grayscale image and any error encountered during processing.

        """
        try:
            # Check if the input image is color (3-dimensional)
            if len(prev_input.shape) < 3:
                return {"out": None, "error": "Grayscale filter block image expects image to be 3 dimensional"}

            # Determine the color scheme conversion based on block data
            color_scheme = blk["_user_data"].get("color_scheme", "rgb_to_gray")
            if color_scheme == "rgb_to_gray":
                grayscale_image = cv2.cvtColor(prev_input, cv2.COLOR_RGB2GRAY)
            else:
                grayscale_image = cv2.cvtColor(prev_input, cv2.COLOR_BGR2GRAY)

            return {"out": grayscale_image, "error": None}

        except Exception as e:
            return {"out": None, "error": str(e)}

