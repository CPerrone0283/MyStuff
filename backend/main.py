from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "You're tearing me apart, Lisa!"}

@app.get("/movies")
def get_movies():
    return [
        {"id": 1, "title": "The Room", "year": 2003, "director": "Tommy Wiseau"},
        {"id": 2, "title": "Cool Cat Saves the Kids", "year": 2012, "director": "Derek Savage"},
        {"id": 3, "title": "Dire Duplicity", "year": 2026, "director": "Neil Breen"},
    ]

@app.get("/movies/{movie_id}")
def get_movie(movie_id: int):
    movies = [
        {"id": 1, "title": "The Room", "year": 2003, "director": "Tommy Wiseau"},
        {"id": 2, "title": "Cool Cat Saves the Kids", "year": 2012, "director": "Derek Savage"},
        {"id": 3, "title": "Dire Duplicity", "year": 2026, "director": "Neil Breen"},
    ]
    for movie in movies:
        if movie["id"] == movie_id:
            return movie
    return {"error": "Movie not found"}