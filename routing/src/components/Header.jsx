import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <ul className='menu'>
                <li><Link to="/">Anasayfa</Link></li>
                <li><Link to="/users">Kullanıcılar</Link></li>
                <li><Link to="/contact">İletişim</Link></li>
                <li onClick={() => navigate("/contact")}>İletişim II</li>
                <li onClick={() => navigate(-1)}>Geri</li>
            </ul>
        </div>
    )
}

export default Header

//useparams devam