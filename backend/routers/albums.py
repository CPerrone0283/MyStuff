from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
import models
from schemas import AlbumCreate, AlbumResponse, AlbumUpdate

router = APIRouter(prefix="/albums", tags=["albums"])


@router.get("")
def get_albums():
    return {"message": "Oh Hi Mark!"}