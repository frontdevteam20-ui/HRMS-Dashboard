import { login } from './authSlice';
import store from './index';

// Function to get user data from localStorage
const getUserFromStorage = () => {
  try {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error getting user from storage:', error);
    return null;
  }
};

export async function restoreUserSessionToRedux() {
  try {
    console.log('Attempting to restore user session...');
    const token = localStorage.getItem('token');
    let user = getUserFromStorage();
    
    console.log('Retrieved from storage - User:', user ? 'exists' : 'not found');
    console.log('Retrieved from storage - Token:', token ? 'exists' : 'not found');
    
    // Only restore session if both user data and token exist
    if (user && token) {
      console.log('Restoring user session...');
      try {
        // Normalize user data
        const roleName = (user.role_name || user.user_data?.role_name || 'employee').toLowerCase();
        const normalizedUser = {
          ...user,
          role_name: roleName,
          user_data: {
            ...(user.user_data || {}),
            role_name: roleName
          },
          // Ensure we have a fullname
          fullname: user.fullname || `${user.first_name || ''} ${user.last_name || ''}`.trim()
        };
        
        // Store the token in axios defaults
        const api = (await import('../services/api')).default;
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        // Dispatch the login action with the stored user data
        store.dispatch({
          type: login.fulfilled.type,
          payload: normalizedUser
        });
        
        console.log('User session restored successfully', { role: roleName, user: normalizedUser });
        return true;
      } catch (error) {
        console.error('Error restoring session in Redux:', error);
        // Clear invalid token
        localStorage.removeItem('token');
        return false;
      }
    }
    
    console.log('Cannot restore session: missing user or token');
    return false;
  } catch (error) {
    console.error('Error restoring session:', error);
    // Clear any invalid data
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return false;
  }
}