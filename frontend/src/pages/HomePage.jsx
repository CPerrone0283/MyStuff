import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Stuff</h1>
      <ul className="space-y-2">
        <li>
          <Link to="/movies" className="text-blue-600 hover:underline text-lg">
            Movies
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage