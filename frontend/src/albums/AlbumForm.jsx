import { useState } from 'react'



function AlbumForm() {
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [year, setYear] = useState('')
    const [genre, setGenre] = useState('')
    const [type, setType] = useState('')


  return (
    <form className="bg-white p-4 rounded shadow mb-6 space-y-3">
      <h2 className="text-lg font-semibold">Add an album</h2>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"> Add Album </button>
    </form>
  )

}


export default AlbumForm