import { useState, useEffect } from 'react'

function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

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

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Movies</h1>
      <ul className="space-y-3">
        {movies.map(movie => (
          <li key={movie.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{movie.title}</h2>
            <p className="text-gray-600">{movie.year} — directed by {movie.director}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App