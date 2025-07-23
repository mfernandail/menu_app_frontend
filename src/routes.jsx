import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Lunch from './pages/Lunch'
import WeeklyMenu from './pages/WeeklyMenu'
import Stats from './pages/Stats'

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/platos" element={<Lunch />} />
        <Route path="/menu" element={<WeeklyMenu />} />
        <Route path="/graficas" element={<Stats />} />
        {/* Ruta por defecto */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes