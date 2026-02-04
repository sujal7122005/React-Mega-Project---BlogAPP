import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Protected_AuthLayout(
    {Authenticated = true, children}
) {
    const navigate = useNavigate()
    const  isLoggedIn  = useSelector((state) => state.auth.status)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (Authenticated && !isLoggedIn) {
            // User needs to be authenticated but is not logged in → redirect to login
            navigate('/login')
        } else if (!Authenticated && isLoggedIn) {
            // User doesn't need authentication (login/signup pages) but is already logged in → redirect to home
            navigate('/')
        }
        setLoading(false)
    }, [isLoggedIn, navigate, Authenticated])
  return loading ? <h1>Loading...</h1> : <>{children}</>
  
}

export default Protected_AuthLayout