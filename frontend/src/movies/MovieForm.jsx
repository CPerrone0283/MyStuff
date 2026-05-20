import { useState } from 'react'

function MovieForm({ onSubmit }) {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [director, setDirector] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      title,
      year: parseInt(year),
      director,
    })
    setTitle('')
    setYear('')
    setDirector('')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 space-y-3">
      <h2 className="text-lg font-semibold">Add a movie</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="text"
        placeholder="Director"
        value={director}
        onChange={(e) => setDirector(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Movie
      </button>
    </form>
  )
}

export default MovieForm