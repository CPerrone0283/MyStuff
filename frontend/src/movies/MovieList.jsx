import MovieListItem from './MovieListItem'

function MovieList({ movies, onSave, onDelete }) {
  return (
    <ul className="space-y-3">
      {movies.map(movie => (
        <MovieListItem
          key={movie.id}
          movie={movie}
          onSave={onSave}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default MovieList