import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import AlbumsPage from './pages/AlbumsPage'
import Playground from './pages/Playground'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow p-4 flex gap-4">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <Link to="/movies" className="text-blue-600 hover:underline">Movies</Link>
          <Link to="/albums" className="text-blue-600 hover:underline">Albums</Link>
          <Link to="/playground" className="text-blue-600 hover:underline">Playground</Link>
        </nav>
        <div className="p-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/albums" element={<AlbumsPage />} />
            <Route path="/playground" element={<Playground/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
