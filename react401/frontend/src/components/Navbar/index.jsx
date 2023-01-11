import React from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'
import './styles.css'

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="left">
                <div className="logo">
                    <Link to="/">
                        e-Commerce
                    </Link>
                </div>
                <ul className='menu'>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                </ul>
            </div>
            <div className="right">
                <Link to="/signin">
                    <Button colorScheme='pink'>Register</Button>
                </Link>
                <Link to="/signup">
                    <Button colorScheme='pink'>Login</Button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar