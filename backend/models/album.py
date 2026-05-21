import enum
from sqlalchemy import Column, Integer, String, Enum
from models.item import Item

class MusicGenre(enum.Enum):
    HEAVY_METAL = "Heavy Metal"
    HARD_ROCK = "Hard Rock"
    THRASH_METAL = "Thrash Metal"
    POWER_METAL = "Power Metal"
    DEATH_METAL = "Death Metal"
    PUNK = "Punk"
    RAP = "Rap"
    COMEDY = "Comedy"
    SOUNDTRACK = "Soundtrack"

class AlbumType(enum.Enum):
    STUDIO = "Studio"
    LIVE = "Live"
    EP = "EP"
    COMPILATION = "Compilation"
    BOXED_SET = "Boxed Set"
    RARITIES = "Rarities"
    OTHER = "Other"


class Album(Item):
    __tablename__ = "albums"

    title = Column(String, nullable=False)
    artist = Column(String, nullable=False)
    year = Column(Integer, nullable=False)
    genre = Column(Enum(MusicGenre), nullable=False)
    type = Column(Enum(AlbumType), nullable=False) 


