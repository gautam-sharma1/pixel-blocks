"""
CannyEdgeDetector Action Module

This module provides functionality to detect edges in images using the Canny edge detection algorithm.

Classes:
    CannyEdgeDetector: A class to detect edges in images using the Canny edge detection algorithm.

Usage:
    canny_edge_detector_action = CannyEdgeDetector()
    result = canny_edge_detector_action.perform_action(block, prev_input)

"""

from actions.Action import Action
import cv2


class CannyEdgeDetector(Action):
    """
    CannyEdgeDetector Class

    A class to detect edges in images using the Canny edge detection algorithm.

    Methods:
        perform_action(block, prev_input):
            Detect edges in the input image using the Canny edge detection algorithm.

    """

    def __init__(self):
        super().__init__()

    @staticmethod
    def perform_action(blk, prev_input):
        """
        Detect edges in the input image using the Canny edge detection algorithm.

        Args:
            blk (dict): A dictionary containing block values with '_user_data' key specifying Canny edge detection parameters.
            prev_input: Previous input data, expected to be a grayscale image.

        Returns:
            dict: A dictionary containing the edges detected in the input image and any error encountered during processing.

        """
        try:
            # Check if the input image is grayscale
            if len(prev_input.shape) != 2:
                return {"out": None, "error": "Canny edge detector block image expects image to be 2 dimensional. Try inserting grayscale filter block before it."}

            # Extract Canny edge detection parameters from block data
            threshold1 = int(blk["_user_data"]["thresh1"])
            threshold2 = int(blk["_user_data"]["thresh2"])

            # Detect edges using Canny edge detection algorithm
            edges = cv2.Canny(prev_input, threshold1, threshold2)

            return {"out": edges, "error": None}

        except Exception as e:
            return {"out": None, "error": str(e)}

