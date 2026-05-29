from pydantic import BaseModel
from models.album import AlbumType, MusicGenre

class AlbumCreate(BaseModel):
    title: str
    artist: str
    year: int
    genre: MusicGenre
    albumType: AlbumType
    

class AlbumResponse(BaseModel):
    id: int
    title: str
    artist: str
    year: int
    genre: MusicGenre
    albumType: AlbumType

    class Config:
        from_attributes = True

class AlbumUpdate(BaseModel):
    title: str | None = None
    artist: str | None = None
    year: int | None = None
    genre: MusicGenre | None = None
    albumType: AlbumType | None = None


