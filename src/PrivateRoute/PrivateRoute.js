import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, redirectTo }) {
    return (
        localStorage.getItem('u$ername')
            ? children
            : <Navigate to={redirectTo} />)
}

export { PrivateRoute };