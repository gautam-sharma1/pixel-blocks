from actions.Action import Action
import cv2


class BlurFilter(Action):

    def __init__(self):
        super().__init__()

    @staticmethod
    def perform_action(blk, prev_input):
        '''
        Will receive a dictionary of block values
        '''
        # convert image to grayscale
        try:
            # if len(prev_input.shape) < 3:
            #     return {"out": None, "error": "Grayscale filter block image expects image to be 3 dimensional"}

            filter_size = int(blk["_user_data"]["filter_size"])
            out = cv2.blur(prev_input, ksize=[filter_size, filter_size])
            return {"out": out, "error": None}
        except:
            return {"out": None, "error": "Server error! Please compile again"}





