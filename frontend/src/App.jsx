import { useState, useEffect } from 'react'

function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchMovie, setSearchMovie] = useState('')


  const[newTitle, setNewTitle] = useState('')
  const[newYear, setNewYear] = useState('')
  const[newDirector, setNewDirector] = useState('')

  const [editingId, setEditingId] = useState(null)
  const [editTitle, setEditTitle] = useState('')
  const [editYear, setEditYear] = useState('')
  const [editDirector, setEditDirector] = useState('')

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

  const searchMovieChange = (e) => {
    const searchTerm = e.target.value;
    setSearchMovie(searchTerm);
  }

  const filteredMovies = movies.filter(m => m.title.toLowerCase().includes(searchMovie.toLowerCase()));


  const handleDelete = async (movieId) => {
    await fetch(`http://localhost:8000/movies/${movieId}`, {
    method: 'DELETE',
    })
    setMovies(movies.filter(m => m.id !== movieId))
  }


  const handleCreate = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:8000/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: newTitle,
        year: parseInt(newYear),
        director: newDirector,
      }),
    })

    const createdMovie = await response.json()
    setMovies([...movies, createdMovie])

    setNewTitle('')
    setNewYear('')
    setNewDirector('') 

  }


  const handleStartEdit = (movie) => {
  setEditingId(movie.id)
  setEditTitle(movie.title)
  setEditYear(movie.year)
  setEditDirector(movie.director)
  }

  const handleCancelEdit = () => {
  setEditingId(null)
  setEditTitle('')
  setEditYear('')
  setEditDirector('')
  }

  const handleSaveEdit = async (movieId) => {
  const response = await fetch(`http://localhost:8000/movies/${movieId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: editTitle,
      year: parseInt(editYear),
      director: editDirector,
    }),
  })

  const updatedMovie = await response.json()
  setMovies(movies.map(m => m.id === movieId ? updatedMovie : m))

  setEditingId(null)
  setEditTitle('')
  setEditYear('')
  setEditDirector('')
  }



  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Movies</h1>
      <input type="text" placeholder="Search...."  className=" border rounded px-3 py-2 bg-white" onChange={searchMovieChange} value={searchMovie}/> 
      <form onSubmit={handleCreate} className="bg-white p-4 rounded shadow mb-6 space-y-3">
        <h2 className="text-lg font-semibold">Add a movie</h2>
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="number"
          placeholder="Year"
          value={newYear}
          onChange={(e) => setNewYear(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Director"
          value={newDirector}
          onChange={(e) => setNewDirector(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Movie
        </button>
      </form>


      <ul className="space-y-3">
        {filteredMovies.map(movie => (
        <li key={movie.id} className="bg-white p-4 rounded shadow">
          {editingId === movie.id ? (
          <div className="space-y-3">
      <input
        type="text"
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="number"
        value={editYear}
        onChange={(e) => setEditYear(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="text"
        value={editDirector}
        onChange={(e) => setEditDirector(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />
      <div className="flex gap-2">
        <button
          onClick={() => handleSaveEdit(movie.id)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          onClick={handleCancelEdit}
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  ) : (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">{movie.title}</h2>
        <p className="text-gray-600">{movie.year} — directed by {movie.director}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => handleStartEdit(movie)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(movie.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  )}
</li>
        ))}
      </ul>
    </div>
  )
}

export default App