// src/components/Navbar.jsx
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useEffect, useState } from 'react'

import '../styles/Navbar.css'

import foodIcon from '../assets/icons/food-icon.svg'
import calendarIcon from '../assets/icons/calendar-icon.svg'
import chartIcon from '../assets/icons/bar-chart-icon.svg'
import logoutIcon from '../assets/icons/logout-icon.svg'

export default function Navbar() {
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 630)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 630)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // No mostrar navbar en login
  if (!user || location.pathname === '/login') return null

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <div className="brand">🍽️ MenuApp</div>
      <div className="links">
        <Link to="/platos" title="Almuerzos">
          {isMobile ? (
            <img src={foodIcon} alt="Icono de plato" width={20} height={20} />
          ) : (
            'Almuerzos'
          )}
        </Link>
        <Link to="/menu" title="Menú semanal">
          {isMobile ? (
            <img
              src={calendarIcon}
              alt="Icono de plato"
              width={20}
              height={20}
            />
          ) : (
            'Menú semanal'
          )}
        </Link>
        <Link to="/graficas" title="Gráficas">
          {isMobile ? (
            <img src={chartIcon} alt="Icono de plato" width={20} height={20} />
          ) : (
            'Gráficas'
          )}
        </Link>
        <button onClick={handleLogout} title="Cerrar sesión">
          {isMobile ? (
            <img src={logoutIcon} alt="Icono de plato" width={20} height={20} />
          ) : (
            'Cerrar sesión'
          )}
        </button>
      </div>
    </nav>
  )
}