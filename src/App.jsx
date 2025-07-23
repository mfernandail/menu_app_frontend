import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Login from './auth/Login'

import Lunch from './pages/Lunch'
import WeeklyMenu from './pages/WeeklyMenu'
import Stats from './pages/Stats'
import { useAuth } from './context/AuthContext'
import Navbar from './components/Navbar'
import './App.css'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()

  if (loading) return <p>Cargando sesión...</p>
  return user ? children : <Navigate to="/login" />
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/agregar"
          element={
            <PrivateRoute>
              <Lunch />
            </PrivateRoute>
          }
        />
        <Route
          path="/menu"
          element={
            <PrivateRoute>
              <WeeklyMenu />
            </PrivateRoute>
          }
        />
        <Route
          path="/graficas"
          element={
            <PrivateRoute>
              <Stats />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/menu" />} />
      </Routes>
    </Router>
  )
}

export default App
