import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../App';

function ProtectedRoute({ children, requiredLevel = null, allowedLevels = [] }) {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();
  
  // Get user level from localStorage
  const userLevel = localStorage.getItem('userLevel');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check role-based access
  if (requiredLevel && userLevel !== requiredLevel) {
    // Redirect based on user level if they don't have access
    if (userLevel === '1') {
      return <Navigate to="/admin-dashboard" replace />;
    } else if (userLevel === '2') {
      return <Navigate to="/employee-directory" replace />;
    } else if (userLevel === '3') {
      return <Navigate to="/employee-profile" replace />;
    }
    return <Navigate to="/dashboard" replace />;
  }

  // Check if user level is in allowed levels
  if (allowedLevels.length > 0 && !allowedLevels.includes(userLevel)) {
    // Allow access to all levels - no restrictions
    return children; // Remove role-based restrictions
  }

  return children;
}

export default ProtectedRoute;