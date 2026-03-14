// Role-based permission matrix for HRMS modules
export const ROLE_PERMISSIONS = {
  // Role levels: 1 = Employee, 2 = HR, 3 = Manager
  EMPLOYEE: '1',
  HR: '2', 
  MANAGER: '3'
};

export const MODULE_PERMISSIONS = {
  // Employee Management Module
  'hr-dashboard': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'disable', edit: 'disable' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'employee-profile': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'onboarding': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'disable', edit: 'view' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'offboarding': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'disable', edit: 'view' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'admin-dashboard': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'disable', edit: 'disable' },
    [ROLE_PERMISSIONS.HR]: { view: 'disable', edit: 'disable' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },

  // Attendance Module
  'attendance-dashboard': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'disable', edit: 'view' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'attendance-calendar': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'punch-records': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'disable', edit: 'view' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'shift-management': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'disable', edit: 'view' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'leave-tracking': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'disable', edit: 'view' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'overtime-hours': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'disable', edit: 'disable' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'holiday-management': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'policy-rules': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'disable', edit: 'disable' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'employee-attendance-profile': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'view', edit: 'disable' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'punch-in-out': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'view', edit: 'disable' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },

  // Recruitment Module
  'job-openings': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'disable', edit: 'view' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'applicants': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'disable', edit: 'view' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'interviews': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'disable', edit: 'view' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'interview-calendar': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'disable', edit: 'view' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },

  // Meetings Module
  'all-meetings': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'view', edit: 'disable' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'new-meeting': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'view', edit: 'disable' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'meeting-calendar': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'meeting-attachments': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'view', edit: 'disable' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },

  // VSLM Module
  'all-projects': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'view', edit: 'disable' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'uploaded-images': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'view', edit: 'disable' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'project-timeline': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'view', edit: 'disable' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'site-visit-log': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'view', edit: 'disable' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'vslm-analytics': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'view', edit: 'disable' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },

  // Tasks Module
  'task-dashboard': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'disable', edit: 'disable' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'task-projects': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'view', edit: 'disable' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'task-kanban': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'view', edit: 'disable' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'add-new-task': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'view', edit: 'disable' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'task-details': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'subtasks': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'view', edit: 'disable' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'team-assignment': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'view', edit: 'disable' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  },
  'task-timeline': {
    [ROLE_PERMISSIONS.EMPLOYEE]: { view: 'view', edit: 'disable' },
    [ROLE_PERMISSIONS.HR]: { view: 'view', edit: 'view' },
    [ROLE_PERMISSIONS.MANAGER]: { view: 'view', edit: 'view' }
  }
};

// Helper function to get permissions for a specific module and role
export const getModulePermissions = (moduleId, userLevel) => {
  return MODULE_PERMISSIONS[moduleId]?.[userLevel] || { view: 'disable', edit: 'disable' };
};

// Helper function to check if user has permission for specific action
export const hasPermission = (moduleId, userLevel, action = 'view') => {
  const permissions = getModulePermissions(moduleId, userLevel);
  return permissions[action] !== 'disable';
};
