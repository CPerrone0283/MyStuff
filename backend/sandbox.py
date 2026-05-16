class Item:
    def __init__(self, title: str):
        self.title = title
    
    def display(self) -> str:
        return F"Item created with title {self.title}"
    


Something = Item("Cool Cat VS Dirty Dog")

print(Something.display());
