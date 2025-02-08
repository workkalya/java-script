class adress:
    def __init__(self, street, city, state, zip):
        self.street = street
        self.city = city
        self.state = state
        self.zip = zip

    def __str__(self):
        return f'{self.street}, {self.city}, {self.state}, {self.zip}'
    

class person(adress):
    def __init__(self, name, street, city, state, zip):
        super().__init__(street, city, state, zip)
        self.name = name

    def __str__(self):
        return f'{self.name}, {super().__str__()}'