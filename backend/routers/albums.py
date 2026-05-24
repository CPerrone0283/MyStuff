from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
import models
from schemas import AlbumCreate, AlbumResponse, AlbumUpdate

router = APIRouter(prefix="/albums", tags=["albums"])


@router.get("")
def get_albums(db: Session = Depends(get_db)):
    return db.query(models.Album).all()

@router.get("{/album_id}")
def get_album(album_id: int, response_model=AlbumResponse, db: Session = Depends(get_db)):
    album = db.query(models.Album).filter(models.Album.id == album_id).first()
    if album is None:
        raise HTTPException(status_code=404, detail="Album not found")
    return album
    




@router.post("", response_model=AlbumResponse, status_code=201)
def create_album(album: AlbumCreate, db: Session = Depends(get_db)):
    db_album = models.Album(
        artist = album.artist,
        title = album.title,
        year = album.year,
        genre = album.genre,
        type = album.type
    )
    db.add(db_album)
    db.commit()
    db.refresh(db_album)
    return db_album


