// src/components/Navbar.jsx
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useEffect, useState } from 'react'

import '../styles/Navbar.css'

// SVG icons
const IconAdd = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
  </svg>
)

const IconMenu = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V21A2,2 
             0 0,0 5,23H19A2,2 0 0,0 21,21V5A2,2 
             0 0,0 19,3M19,21H5V8H19V21Z" />
  </svg>
)

const IconStats = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 13h2v8H3v-8m4-6h2v14H7V7m4 4h2v10h-2V11m4 
             3h2v7h-2v-7m4-6h2v13h-2V8z" />
  </svg>
)

const IconLogout = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.08,15.59L16.67,13H7V11H16.67L14.08,
             8.41L15.5,7L20.5,12L15.5,17L14.08,
             15.59M5,3H13V5H5V19H13V21H5A2,2 
             0 0,1 3,19V5A2,2 0 0,1 5,3Z" />
  </svg>
)

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
        <Link to="/agregar" title="Agregar almuerzo">
          {isMobile ? IconAdd : 'Agregar almuerzo'}
        </Link>
        <Link to="/menu" title="Menú semanal">
          {isMobile ? IconMenu : 'Menú semanal'}
        </Link>
        <Link to="/graficas" title="Gráficas">
          {isMobile ? IconStats : 'Gráficas'}
        </Link>
        <button onClick={handleLogout} title="Cerrar sesión">
          {isMobile ? IconLogout : 'Cerrar sesión'}
        </button>
      </div>
    </nav>
  )
}



// import { Link, useLocation, useNavigate } from 'react-router-dom'
// import { useAuth } from '../context/AuthContext'
// import { useEffect, useState } from 'react'
// import { IconAdd, IconMenu, IconStats, IconLogout } from '../icons'
// import '../styles/Navbar.css'

// export default function Navbar() {
//   const { user, logout } = useAuth()
//   const location = useLocation()
//   const navigate = useNavigate()
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 750)

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 750)
//     }
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   // No mostrar navbar en login
//   if (!user || location.pathname === '/login') return null

//   const handleLogout = async () => {
//     await logout()
//     navigate('/login')
//   }

//   return (
//     <nav className="navbar">
//       <div className="brand">🍽️ MenuApp</div>
//       <div className="links">
//         <Link to="/agregar">Agregar almuerzo</Link>
//         <Link to="/menu">Menú semanal</Link>
//         <Link to="/graficas">Gráficas</Link>
//         <button onClick={handleLogout}>Cerrar sesión</button>
//       </div>
//     </nav>
//   )
// }
  // return (
  //   <nav className="navbar">
  //     <div className="brand">🍽️ MenuApp</div>
  //     <div className="links">
  //       <Link to="/agregar">Agregar almuerzo</Link>
  //       <Link to="/menu">Menú semanal</Link>
  //       <Link to="/graficas">Gráficas</Link>
  //       <button onClick={handleLogout}>Cerrar sesión</button>
  //     </div>
  //   </nav>
  // )

