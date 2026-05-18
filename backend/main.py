from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import engine, get_db
import models
from pydantic import BaseModel

app = FastAPI()


class MovieCreate(BaseModel):
    title: str
    year: int
    director: str

class MovieResponse(BaseModel):
    id: int
    title: str
    year: int
    director: str

    class Config: 
        from_attributes = True

class MovieUpdate(BaseModel):
    title: str | None = None
    year: int | None = None
    director: str | None = None


models.Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "You're tearing me apart, Lisa!"}

@app.get("/movies")
def get_movies(db: Session = Depends(get_db)):
    return db.query(models.Movie).all()


@app.get("/movies/{movie_id}")
def get_movie(movie_id: int, db: Session = Depends(get_db)):
    movie = db.query(models.Movie).filter(models.Movie.id == movie_id).first()
    if movie is None: 
        raise HTTPException(status_code=404, detail="Movie not found")
    return movie




@app.post("/movies", response_model=MovieResponse, status_code=201)
def create_movie(movie: MovieCreate, db: Session = Depends(get_db)):
    db_movie = models.Movie(
        title = movie.title,
        year=movie.year,
        director=movie.director,
    )
    db.add(db_movie)
    db.commit()
    db.refresh(db_movie)
    return db_movie



@app.patch("/movies/{movie_id}", response_model=MovieResponse)
def update_movie(movie_id: int, movie_update: MovieUpdate, db: Session = Depends(get_db)):
    db_movie = db.query(models.Movie).filter(models.Movie.id == movie_id).first()
    if db_movie is None: 
        raise HTTPException(status_code=404, detail="Movie not found")
    
    update_data = movie_update.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_movie, field, value)
    
    db.commit()
    db.refresh(db_movie)
    return db_movie

@app.delete("/movies/{movie_id}", status_code=204)
def delete_movie(movie_id: int, db: Session = Depends(get_db)):
    db_movie = db.query(models.Movie).filter(models.Movie.id == movie_id).first()
    if db_movie is None: 
        raise HTTPException(status_code=404, detail="Movie not Found")
    db.delete(db_movie)
    db.commit()
    return None
