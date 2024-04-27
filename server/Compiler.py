# Does not maintain any state
# Think of it as a static class

from collections import OrderedDict

class Compiler:
    def __init__(self):
        pass

    def __repr__(self):
        return "Compiler"

    @staticmethod
    def compile(all_blocks):
        compile_steps = OrderedDict()
        for block in all_blocks:
            compile_steps[block["_type"]] = block
        return compile_steps