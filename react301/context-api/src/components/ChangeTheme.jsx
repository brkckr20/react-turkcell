import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';


const ChangeTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    console.log(theme)
    return (
        <div>
            <h1>Active Theme : {theme}</h1>
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    )
}

export default ChangeTheme