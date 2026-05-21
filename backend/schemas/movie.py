from pydantic import BaseModel

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