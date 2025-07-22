import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // 🔍 Verifica la sesión preguntando al backend
  useEffect(() => {
  const checkSession = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/protected', {
        credentials: 'include',
      })

      if (res.ok) {
        const data = await res.json()
        setUser(data.user)
      } else {
        // No mostramos el error 401 en consola
        setUser(null)
      }
    } catch (err) {
      // Solo mostramos errores importantes
      if (err.message !== 'Failed to fetch') {
        console.error(err)
      }
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  checkSession()
}, [])

  // 🔐 Login: enviar email y password al backend
  const login = async (email, password) => {
    const res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    })

    if (!res.ok) {
      throw new Error('Credenciales inválidas')
    }

    // Si login fue exitoso, consultamos usuario
    // const check = await fetch('http://localhost:3000/api/protected', {
    //   credentials: 'include',
    // })

    // if (check.ok) {
    //   const data = await check.json()
    //   setUser(data.user)
    // }
    const { user } = await res.json()
    setUser(user)

  }

  // 🔓 Logout: borrar cookie en backend
  const logout = async () => {
    await fetch('http://localhost:3000/api/logout', {
      method: 'POST',
      credentials: 'include',
    })
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}