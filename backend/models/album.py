import enum
from sqlalchemy import Column, Integer, String, Enum
from models.item import Item

class MusicGenre(str, enum.Enum):
    HEAVY_METAL = "HEAVY_METAL"
    HARD_ROCK = "HARD_ROCK"
    THRASH_METAL = "THRASH_METAL"
    POWER_METAL = "POWER_METAL"
    DEATH_METAL = "DEATH_METAL"
    PUNK = "PUNK"
    RAP = "RAP"
    POP = "POP"
    COMEDY = "COMEDY"
    SOUNDTRACK = "SOUNDTRACK"

class AlbumType(str, enum.Enum):
    STUDIO = "STUDIO"
    LIVE = "LIVE"
    EP = "EP"
    COMPILATION = "COMPILATION"
    BOXED_SET = "BOXED_SET"
    RARITIES = "RARITIES"
    OTHER = "OTHER"


class Album(Item):
    __tablename__ = "albums"

    title = Column(String, nullable=False)
    artist = Column(String, nullable=False)
    year = Column(Integer, nullable=False)
    genre = Column(Enum(MusicGenre), nullable=False)
    albumType = Column(Enum(AlbumType), nullable=False) 


