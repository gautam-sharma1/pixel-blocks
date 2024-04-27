from actions.Action import Action
import cv2


class CannyEdgeDetector(Action):

    def __init__(self):
        super().__init__()

    @staticmethod
    def perform_action(blk, prev_input):
        '''
        Will receive a dictionary of block values
        '''
        # convert image to grayscale
        try:
            if len(prev_input.shape) != 2:
                return {"out": None, "error": "Canny edge detector block image expects image to be 2 dimensional. Try inserting grayscale filter block before it."}
            edges = cv2.Canny(prev_input, int(blk["_user_data"]["thresh1"]), int(blk["_user_data"]["thresh2"]))
            print("edges are", edges)
            return {"out": edges, "error": None}

        except:
            return {"out": None, "error": "Server error! Please compile again"}





