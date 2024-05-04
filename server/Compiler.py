"""
Copyright © 2024 Gautam Sharma

This work is licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives License.

You are free to:
- Share — copy and redistribute the material in any medium or format

Under the following terms:
- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- NonCommercial — You may not use the material for commercial purposes.
- NoDerivatives — If you remix, transform, or build upon the material, you may not distribute the modified material.

Permissions beyond the scope of this license may be available at gsharma2813@gmail.com.
"""


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