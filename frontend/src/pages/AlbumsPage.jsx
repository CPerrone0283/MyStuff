import { useState, useEffect } from 'react'






function AlbumsPage()
{
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)


  
  if (loading) return <p className="text-gray-600">Loading...</p>


  return (
      <>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Future Album Page</h1>
      </>



  )



}





export default AlbumsPage