import { Navigate } from 'react-router';
import authHeader from "./AuthHeader";

function RequireAdmin({ children, redirectTo }) {    
    let isAuthenticated = true;

    // TODO: get admin role for backend. Currently only validates token in localStore
    if (authHeader().authorization !== undefined) {
        isAuthenticated = true;
    }

    return isAuthenticated ? children : <Navigate to={redirectTo} />
}

export default RequireAdmin;
