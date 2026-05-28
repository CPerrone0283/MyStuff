import { useState, useEffect } from 'react'
import AlbumListItem from './AlbumListItem'

function AlbumList({albums}) {

  return (
    <ul className="space-y-3">
      { albums.map(album => (
        <AlbumListItem
          key={album.id}
          album={album}
        />
      ))}
    </ul>
  )


}

export default AlbumList