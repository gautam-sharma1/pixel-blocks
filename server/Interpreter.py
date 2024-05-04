from Registry import Registry
from actions.input.image_input import ImageInput
from actions.output.image_output import ImageOutput
from actions.filter.sobel_filter import SobelFilter
from actions.filter.grayscale_filter import GrayscaleFilter
from actions.filter.blur_filter import BlurFilter
from actions.detector.canny_edge_detection import CannyEdgeDetector
from actions.detector.hough_line_detection import HoughLineDetector
from actions.operation.bitwise_not_operation import BitwiseNotOperation
from actions.operation.bitwise_and_operation import BitwiseAndOperation


class Interpreter:
    def __init__(self):
        self.registry = Registry()
        self.register_actions()

    def __repr__(self):
        return "Interpreter"

    def perform_action(self, action_name, block, prev_input=None):
        action = self.registry.get_action(action_name)
        # Need to do error validation here
        out = action.perform_action(block, prev_input)
        return out

    def register_actions(self):
        self.registry.register_action("image_input", ImageInput)
        self.registry.register_action("image_output", ImageOutput)
        self.registry.register_action("filter_sobel", SobelFilter)
        self.registry.register_action("filter_blur", BlurFilter)
        self.registry.register_action("detector_canny_edge", CannyEdgeDetector)
        self.registry.register_action("detector_hough_line", HoughLineDetector)
        self.registry.register_action("filter_grayscale", GrayscaleFilter)
        self.registry.register_action("operation_not", BitwiseNotOperation)
        self.registry.register_action("operation_and", BitwiseAndOperation)






