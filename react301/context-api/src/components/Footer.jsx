import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import LangContext from '../contexts/LangContext';

const Footer = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { lang } = useContext(LangContext)
    return (
        <div>
            <hr />
            Footer
            <p>Aktif Tema : {theme}</p>
            <button onClick={toggleTheme}>Tema Değiştir</button>
            <h2>Aktif Dil : {lang}</h2>
        </div>
    )
}

export default Footer