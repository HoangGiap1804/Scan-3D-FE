import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated, hasRole } from '@/features/auth/utils/authUtils';

const ProtectedRoute = ({ role }) => {
    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />;
    }

    if (role && !hasRole(role)) {
        // Optional: Redirect to an unauthorized page or dashboard
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
