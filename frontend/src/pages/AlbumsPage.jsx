import { useState, useEffect } from 'react'
import AlbumForm from '../albums/AlbumForm'
import AlbumList from '../albums/AlbumList'






function AlbumsPage()
{
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)

    useEffect(() => {
    fetch('http://localhost:8000/albums')
      .then(response => response.json())
      .then(data => {
        setAlbums(data)
        setLoading(false)
      })
  }, [])


    const handleCreate = async (albumData) => {
    const response = await fetch('http://localhost:8000/albums', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(albumData),
    })
    const createdAlbum = await response.json()
    setMovies([...albums, createdAlbum])
  }



  if (loading) return <p className="text-gray-600">Loading...</p>


  return (
      <>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Albums</h1>
      <AlbumForm/>
      <AlbumList albums={albums}/>
      </>



  )



}

export default AlbumsPage