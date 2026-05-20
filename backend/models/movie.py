from sqlalchemy import Column, Integer, String
from models.item import Item

class Movie(Item):
    __tablename__ = "movies"

    title = Column(String, nullable=False)
    year = Column(Integer, nullable=False)
    director = Column(String, nullable=False)


