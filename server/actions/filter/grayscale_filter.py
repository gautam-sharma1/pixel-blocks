from actions.Action import Action
import cv2


class GrayscaleFilter(Action):

    def __init__(self):
        super().__init__()

    @staticmethod
    def perform_action(blk, prev_input):
        '''
        Will receive a dictionary of block values
        '''
        # convert image to grayscale
        try:
            if len(prev_input.shape) < 3:
                return {"out": None, "error": "Grayscale filter block image expects image to be 3 dimensional"}

            if blk["_user_data"]["color_scheme"] == "rgb_to_gray":
                grayscale_image = cv2.cvtColor(prev_input, cv2.COLOR_RGB2GRAY)
            else:
                grayscale_image = cv2.cvtColor(prev_input, cv2.COLOR_BGR2GRAY)
                
            return {"out": grayscale_image, "error": None}

        except:
            return {"out": None, "error": "Server error! Please compile again"}













