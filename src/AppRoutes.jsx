import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

// Import page components
import EmployeeDirectory from './components/employees/EmployeeDirectory';
import EmployeeProfile from './components/employees/EmployeeProfile';
import OnboardingDashboard from './components/employees/OnboardingDashboard';
import OffboardingDashboard from './components/employees/OffboardingDashboard';
import AdminDashboard from './components/dashboard/AdminDashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      {/* Admin Only Routes - Level 1 */}
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute allowedLevels={['1', '2', '3']}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      
      {/* HR & Admin Routes - Level 1 & 2 */}
      <Route
        path="/employee-directory"
        element={
          <ProtectedRoute allowedLevels={['1', '2', '3']}>
            <EmployeeDirectory />
          </ProtectedRoute>
        }
      />
      <Route
        path="/employee-profile"
        element={
          <ProtectedRoute allowedLevels={['1', '2', '3']}>
            <EmployeeProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/onboarding-dashboard"
        element={
          <ProtectedRoute allowedLevels={['1', '2', '3']}>
            <OnboardingDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/offboarding-dashboard"
        element={
          <ProtectedRoute allowedLevels={['1', '2', '3']}>
            <OffboardingDashboard />
          </ProtectedRoute>
        }
      />
      
      {/* Employee Only Routes - Level 3 */}
      <Route
        path="/employee-profile"
        element={
          <ProtectedRoute allowedLevels={['1','2','3']}>
            <EmployeeProfile />
          </ProtectedRoute>
        }
      />
 
    {/* Employee Only dashboard - Level 3 */}
      {/* <Route
        path="/"
        element={
          <ProtectedRoute allowedLevels={['1','2','3']}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    */}
    </Routes> 
  );
};

export default AppRoutes;