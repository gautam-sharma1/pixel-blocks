class Registry:
    def __init__(self):
        self.action_map = {}

    def register_action(self, action_name, action):
        self.action_map[action_name] = action

    def get_action(self, action_name):
        if action_name in self.action_map:
            return self.action_map[action_name]
        else:
            raise ValueError("Action not registered!")

