import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext' 

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  // const handleLogin = async (e) => {
  //   e.preventDefault()
  //   setError('')

  //   try {
  //     const response = await fetch('http://localhost:3000/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       credentials: 'include', // 🔐 envía y recibe cookies
  //       body: JSON.stringify({ email, password }),
  //     })

  //     if (!response.ok) {
  //       throw new Error('Credenciales inválidas')
  //     }

  //     navigate('/menu') // ✅ redirige si todo sale bien
  //   } catch (err) {
  //     setError(err.message)
  //   }
  // }

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')

    try {
      await login(email, password) // 🟢 Espera a que login termine
      navigate('/menu') // ✅ redirige luego que setUser() haya ocurrido
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Ingresar</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  )
}
