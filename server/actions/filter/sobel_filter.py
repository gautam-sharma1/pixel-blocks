from actions.Action import Action
import cv2
import base64
import numpy as np


class SobelFilter(Action):

    def __init__(self):
        super().__init__()

    @staticmethod
    def perform_action(blk, prev_input):
        '''
        Will receive a dictionary of block values
        '''
        # convert image to grayscale
        try:
            input = prev_input

            grayscale_image = cv2.cvtColor(input, cv2.COLOR_RGB2GRAY)
            dx = 0
            dy = 0
            filter_size = 1

            if "dx" in blk["_user_data"]:
                dx = int(blk["_user_data"]["dx"])

            if "dy" in blk["_user_data"]:
                dy = int(blk["_user_data"]["dy"])

            filter_size = int(blk["_user_data"]["filter_size"])

            out = cv2.Sobel(grayscale_image, cv2.CV_64F, dx, dy, ksize=filter_size)
            return {"out": out, "error": None}

        except:
            return {"out": None, "error": "Try increasing the filter size or reducing the derivative"}
        # # 'output_file_path' is the path where you want to save the image
        # output_file_path = 'output_image.jpg'
        #
        # # Save the grayscale image to a file
        # cv2.imwrite(output_file_path, out)
        # print(out)














