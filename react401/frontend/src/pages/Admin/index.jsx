import { Box } from '@chakra-ui/react';
import React from 'react'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import AdminHome from './Home';
import Orders from './Orders';
import Products from './Products';
import styles from './styles.module.css';

const Admin = () => {
    const { path, url } = useRouteMatch();
    return (
        <div>
            <nav>
                <ul className={styles.admin_menu}>
                    <li>
                        <Link to={url}>Home</Link>
                    </li>
                    <li>
                        <Link to={`${url}/orders`}>Orders</Link>
                    </li>
                    <li>
                        <Link to={`${url}/products`}>Products</Link>
                    </li>
                </ul>
            </nav>
            <Box>
                <Switch>
                    <Route exact path={path} component={AdminHome} />
                    <Route path={`${path}/orders`} component={Orders} />
                    <Route path={`${path}/products`} component={Products} />
                </Switch>
            </Box>
        </div>
    )
}

export default Admin