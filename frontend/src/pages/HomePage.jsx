import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Stuff</h1>
      <ul className="flex flex-col">
        <li className="flex flex-col">
          <Link to="/movies" className="text-blue-600 hover:underline text-lg">Movies</Link>
          <Link to="/albums" className="text-blue-600 hover:underline text-lg">Albums</Link>
          <Link to="/playground" className="text-blue-600 hover:underline text-lg">Playground</Link>
        </li>
      </ul>
    </div>

  )
}

export default HomePage