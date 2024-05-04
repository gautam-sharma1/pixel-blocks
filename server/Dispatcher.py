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


# Maintains state

from Interpreter import Interpreter
from Compiler import Compiler

class Dispatcher:
    def __init__(self):
        self.interpreter = Interpreter()
        self.compiler = Compiler()
        self.all_blocks = None
        self.compile_steps = None

    def _parse_blocks(self, all_blocks):
        self.all_blocks = all_blocks

    def _compile(self):
        # ordered dict
        # need to do error validation inside this function
        # assuming that we have image input block right now
        self.compile_steps = self.compiler.compile(self.all_blocks)

    def _perform_action(self, action_name, block, prev_input):
        out = self.interpreter.perform_action(action_name, block, prev_input)
        return out

    def _run(self):
        out = None
        for k, v in self.compile_steps.items():
            if k == "image_input":
                out = self._perform_action(k, v, None)
                if out["error"] is not None:
                    print("error is:", out["error"])
                    return out
                    break
            else:
                out = self._perform_action(k, v, out["out"])
                if out["error"] is not None:
                    print("error is:", out["error"])
                    return out
                    break
        return out

    def compile_and_run(self, args):
        self._parse_blocks(args)
        self._compile()
        result = self._run()
        return result
