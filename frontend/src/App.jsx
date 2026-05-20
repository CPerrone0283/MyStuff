import { useState, useEffect } from 'react'
import SearchBox from './movies/SearchBox'
import MovieForm from './movies/MovieForm'
import MovieList from './movies/MovieList'




function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchMovie, setSearchMovie] = useState('')



  useEffect(() => {
    fetch('http://localhost:8000/movies')
      .then(response => response.json())
      .then(data => {
        setMovies(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <p className="text-gray-600">Loading...</p>
      </div>
    )
  }


  const filteredMovies = movies.filter(m => m.title.toLowerCase().includes(searchMovie.toLowerCase()));


  const handleDelete = async (movieId) => {
    await fetch(`http://localhost:8000/movies/${movieId}`, {
    method: 'DELETE',
    })
    setMovies(movies.filter(m => m.id !== movieId))
  }



  const handleCreate = async (movieData) => {
    const response = await fetch('http://localhost:8000/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movieData),
    })

    const createdMovie = await response.json()
    setMovies([...movies, createdMovie])
  } 


  const handleSaveEdit = async (movieId, movieData) => {
    const response = await fetch(`http://localhost:8000/movies/${movieId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movieData),
    })

  const updatedMovie = await response.json()
  setMovies(movies.map(m => m.id === movieId ? updatedMovie : m))

  }



  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Movies</h1>
      <SearchBox value={searchMovie} onChange={setSearchMovie} />
      <MovieForm onSubmit={handleCreate} />
      <MovieList
        movies={filteredMovies}
        onSave={handleSaveEdit}
        onDelete={handleDelete}
      />


    </div>
  )
}

export default App