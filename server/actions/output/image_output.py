from actions.Action import Action


class ImageOutput(Action):

    def __init__(self):
        super().__init__()

    @staticmethod
    def perform_action(block, prev_input):
        '''
        Will receive a dictionary of block values
        '''

        return {"out": prev_input, "error": None}






