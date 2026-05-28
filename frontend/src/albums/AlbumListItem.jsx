import { useState } from 'react'


function AlbumListItem({album}) {

  return (
    <li className="bg-white p-4 rounded shadow flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">{album.artist} : {album.title}</h2>
        <p className="text-gray-600">{album.year}</p>
      </div>
    </li>
  )


}

export default AlbumListItem