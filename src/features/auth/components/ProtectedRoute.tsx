import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated, hasRole } from '@/features/auth/utils/authUtils';

interface ProtectedRouteProps {
    role?: string;
}

const ProtectedRoute = ({ role }: ProtectedRouteProps) => {
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
