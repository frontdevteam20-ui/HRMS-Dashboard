import { FiHome, FiFolder, FiCheckSquare, FiUsers, FiUser, FiSettings, FiLock, FiPlus } from 'react-icons/fi';

export const sidebarNavigation = {
  dashboard: {
    icon: FiHome,
    text: 'Dashboard',
    badge: '3',
    to: '/dashboard',
  },
  sections: [
    {
      title: 'Projects',
      items: [
        { icon: FiFolder, text: 'Manage', badge: '99+', to: '/manage' },
        { icon: FiCheckSquare, text: 'Tasks', badge: '9', to: '/tasks' },
        { icon: FiUsers, text: 'Clients', badge: '26', to: '/clients' },
        { icon: FiPlus, text: 'Add New', to: '/add-new' },
      ],
    },
    {
      title: 'Account',
      items: [
        { icon: FiUser, text: 'Profile', to: '/profile' },
        { icon: FiSettings, text: 'Settings', to: '/settings' },
        { icon: FiLock, text: 'Log out', to: '/logout' },
      ],
    },
  ],
};