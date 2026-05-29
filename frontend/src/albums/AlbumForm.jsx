import { useState } from "react";

function AlbumForm({ allGenres, allAlbumTypes, onSubmit }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [albumType, setAlbumType] = useState('');


    const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      title,
      artist,
      year: parseInt(year),
      genre,
      albumType
    })
    setTitle('')
    setArtist('')
    setYear('')
    setGenre('')
    setAlbumType('')
  }



  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 space-y-3">
      <h2 className="text-lg font-semibold">Add an album</h2>
      <input
        type="text"
        placeholder="Album Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />
      <div className="flex flex-col gap-2">
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Select a genre</option>
          {allGenres.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <select
          value={albumType}
          onChange={(e) => setAlbumType(e.target.value)}
        >
          <option value="">Select an Album Type</option>
          {allAlbumTypes.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Album
      </button>
      </div>
    </form>
  );
}

export default AlbumForm;
