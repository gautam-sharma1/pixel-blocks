"""
HoughLineDetector Action Module

This module provides functionality to detect lines in images using Hough Transform.

Classes:
    HoughLineDetector: A class to detect lines in images using Hough Transform.

Usage:
    hough_line_detector_action = HoughLineDetector()
    result = hough_line_detector_action.perform_action(block, prev_input)

"""

from actions.Action import Action
import numpy as np
import cv2


class HoughLineDetector(Action):
    """
    HoughLineDetector Class

    A class to detect lines in images using Hough Transform.

    Methods:
        perform_action(block, prev_input):
            Detect lines in the input image using Hough Transform.

    """

    def __init__(self):
        super().__init__()

    @staticmethod
    def perform_action(blk, prev_input):
        """
        Detect lines in the input image using Hough Transform.

        Args:
            blk (dict): A dictionary containing block values with '_user_data' key specifying Hough Transform parameters.
            prev_input: Previous input data, expected to be a grayscale image.

        Returns:
            dict: A dictionary containing the input image with detected lines drawn and any error encountered during processing.

        """
        try:
            # Check if the input image is grayscale
            if len(prev_input.shape) != 2:
                return {"out": None, "error": "Hough line detector block image expects image to be 2 dimensional. Try inserting grayscale filter block before it."}

            # Convert the input image to 8-bit grayscale
            gray_image_8bit = cv2.convertScaleAbs(prev_input)

            # Convert grayscale image to color for plotting lines
            color_image = cv2.cvtColor(gray_image_8bit, cv2.COLOR_GRAY2RGB)

            # Extract Hough Transform parameters from block data
            rho = int(blk["_user_data"]["rho"])
            theta = np.pi / int(blk["_user_data"]["theta"])
            threshold = int(blk["_user_data"]["thresh"])

            # Perform Hough Line Transform
            lines = cv2.HoughLines(gray_image_8bit, rho, theta, threshold)

            # Draw detected lines on the color image
            if lines is not None:
                for line in lines:
                    rho, theta = line[0]
                    a = np.cos(theta)
                    b = np.sin(theta)
                    x0 = a * rho
                    y0 = b * rho
                    x1 = int(x0 + 1000 * (-b))
                    y1 = int(y0 + 1000 * (a))
                    x2 = int(x0 - 1000 * (-b))
                    y2 = int(y0 - 1000 * (a))
                    cv2.line(color_image, (x1, y1), (x2, y2), (0, 255, 0), 2)

            return {"out": color_image, "error": None}

        except Exception as e:
            return {"out": None, "error": str(e)}

