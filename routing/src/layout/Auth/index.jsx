import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './style.css'

const AuthLayout = () => {
    return (
        <div className='authContainer'>
            <div className='auth-menu'>
                <Link to="/auth">Giriş Yap</Link>
                <Link to="/auth/register">Kayıt ol</Link>
            </div>
            <hr />
            <Outlet />
        </div>
    )
}

export default AuthLayout