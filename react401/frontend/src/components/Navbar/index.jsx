import React from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useAuth } from '../../context/AuthContext';
import { useBasket } from '../../context/BasketContext';
import './styles.css'

const Navbar = () => {
    const { loggedIn } = useAuth();
    const { items } = useBasket();
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
                {
                    !loggedIn && (
                        <>
                            <Link to="/signup">
                                <Button colorScheme='pink'>Sinup</Button>
                            </Link>
                            <Link to="/signin">
                                <Button colorScheme='pink'>Singin</Button>
                            </Link>
                        </>
                    )
                }
                {
                    loggedIn && (
                        <>
                            {
                                items.length > 0 && (
                                    <Link to="/basket">
                                        <Button colorScheme="pink">
                                            Basket ({items.length})
                                        </Button>
                                    </Link>
                                )
                            }
                            <Link to="/profile">
                                <Button colorScheme='green'>Profile</Button>
                            </Link>
                        </>
                    )
                }

            </div>
        </nav>
    )
}

export default Navbar