import { useState } from 'react'

function MovieListItem({ movie, onSave, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState('')
  const [editYear, setEditYear] = useState('')
  const [editDirector, setEditDirector] = useState('')

  const handleStartEdit = () => {
    setEditTitle(movie.title)
    setEditYear(movie.year)
    setEditDirector(movie.director)
    setIsEditing(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  const handleSave = () => {
    onSave(movie.id, {
      title: editTitle,
      year: parseInt(editYear),
      director: editDirector,
    })
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <li className="bg-white p-4 rounded shadow">
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
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </li>
    )
  }

  return (
    <li className="bg-white p-4 rounded shadow flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">{movie.title}</h2>
        <p className="text-gray-600">{movie.year} — directed by {movie.director}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleStartEdit}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(movie.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default MovieListItem