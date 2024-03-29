import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const ProtectedRoutes = ({ component: Component, admin, ...rest }) => {
    const { loggedIn, user } = useAuth();
    return (
        <Route {...rest} render={(props) => {

            if (admin && user.role !== 'admin') {
                return <Redirect to={{ pathname: "/" }} />
            }

            if (loggedIn) {
                return <Component {...props} />
            }
            return <Redirect to={{ pathname: "/" }} />
        }} />
    )
}

export default ProtectedRoutes