import { useState, useEffect } from 'react'
import AlbumForm from '../albums/AlbumForm'
import AlbumList from '../albums/AlbumList'






function AlbumsPage()
{
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)
  const [genres, setGenres] = useState([])
  const [albumTypes, setAlbumTypes] = useState([])


    useEffect(() => {
    fetch('http://localhost:8000/albums')
      .then(response => response.json())
      .then(data => {
        setAlbums(data)
        setLoading(false)
      })
  }, [])

    useEffect(() => {
    fetch('http://localhost:8000/albums/enums')
      .then(response => response.json())
      .then(data => {
        setGenres(data.genres)
        setAlbumTypes(data.albumTypes)
      })
  }, [])


    const handleCreate = async (albumData) => {
    const response = await fetch('http://localhost:8000/albums', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(albumData),
    })
    const createdAlbum = await response.json()
    setAlbums([...albums, createdAlbum])
  }



  if (loading) return <p className="text-gray-600">Loading...</p>


  return (
      <>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Albums</h1>
      <AlbumForm allGenres={genres} allAlbumTypes={albumTypes} onSubmit={handleCreate}/>
      <AlbumList albums={albums}/>
      </>



  )



}

export default AlbumsPage