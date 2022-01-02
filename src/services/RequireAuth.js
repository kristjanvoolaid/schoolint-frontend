import { Navigate } from 'react-router';
import authHeader from "./auth.header";

function RequireAuth({ children, redirectTo }) {
    let isAuthenticated = false;

    if (authHeader().authorization !== undefined) {
        isAuthenticated = true;
    }

    return isAuthenticated ? children : <Navigate to={redirectTo} />
}

export default RequireAuth;
