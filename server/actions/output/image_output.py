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






