"""
BlurFilter Action Module

This module provides functionality to apply blur filter to images.

Classes:
    BlurFilter: A class to apply blur filter to images.

Usage:
    blur_filter_action = BlurFilter()
    result = blur_filter_action.perform_action(block, prev_input)

"""

from actions.Action import Action
import cv2


class BlurFilter(Action):
    """
    BlurFilter Class

    A class to apply blur filter to images.

    Methods:
        perform_action(block, prev_input):
            Apply blur filter to input image.

    """

    def __init__(self):
        super().__init__()

    @staticmethod
    def perform_action(blk, prev_input):
        """
        Apply blur filter to input image.

        Args:
            blk (dict): A dictionary containing block values with '_user_data' key specifying filter size.
            prev_input: Previous input data, expected to be an image.

        Returns:
            dict: A dictionary containing the image processed with blur filter and any error encountered during processing.

        """
        try:
            # Extract filter size from block data
            filter_size = int(blk["_user_data"]["filter_size"])

            # Apply blur filter
            out = cv2.blur(prev_input, ksize=(filter_size, filter_size))

            return {"out": out, "error": None}
        except Exception as e:
            return {"out": None, "error": str(e)}

