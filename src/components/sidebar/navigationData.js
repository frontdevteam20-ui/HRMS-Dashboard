import {
  LayoutDashboard,
  Users,
  Clock,
  UserPlus,
  Calendar,
  MapPin,
  CheckSquare,
  Settings,
  ClockIcon,
  Briefcase,
  FileText,
  CalendarDays,
  Image,
  FolderOpen,
  Kanban,
  Plus,
  BarChart3,
  GitBranch,
  CheckCircle,
  UserX,
  User,
  Shield
} from "lucide-react";

// Helper function to get filtered navigation based on user level
export const getFilteredNavigation = (userLevel) => {
  const baseNavigation = [...navigationItems];
  
  if (userLevel === '1') {
    // For Level 1 (Admin), show specific items only
    return baseNavigation.filter(item => {
      // Show Admin Dashboard, User Management, Positions, and Access Summary as standalone items
      if (item.id === 'admin-dashboard' || item.id === 'user-management' || item.id === 'positions' || item.id === 'access-summary') {
        return true;
      }
      // Hide all other sections for Admin
      return null;
    }).filter(item => item !== null); // Remove null items
  } else if (userLevel === '2') {
    // For Level 2 (HR), show only HR-specific items
    return baseNavigation.map(item => {
      // Hide admin sections for HR users
      if (item.id === 'admin-dashboard' || item.id === 'user-management' || item.id === 'positions' || item.id === 'access-summary') {
        return null;
      } else if (item.id === 'employees') {
        return {
          ...item,
          subItems: item.subItems.filter(subItem => 
            subItem.id === 'employee-directory' || // HR Dashboard
            subItem.id === 'onboarding-dashboard' || // Onboarding
            subItem.id === 'offboarding-dashboard'  // Offboarding 
            // Hide Employee Profile from HR
          )
        };
      } else if (item.id === 'attendance') {
        const filteredSubItems = item.subItems.filter(subItem => 
          subItem.id === 'attendance-dashboard' || // Attendance Dashboard
          subItem.id === 'attendance-calendar' || // Attendance Calendar
          subItem.id === 'punch-records' || // Punch In/Out Records
          subItem.id === 'shift-management' || // Shift Management
          subItem.id === 'leave-tracking' || // Leave & Absence Tracking
          subItem.id === 'overtime-hours' || // Overtime & Working Hours
          subItem.id === 'holiday-management' || // Holiday Management
          subItem.id === 'policy-rules' // Policy & Rules Setup
        );
        console.log('Attendance filtered subItems:', filteredSubItems); // Debug log
        return {
          ...item,
          subItems: filteredSubItems
        };
      } else if (item.id === 'recruitment') {
        const filteredSubItems = item.subItems.filter(subItem => 
          subItem.id === 'job-openings' || // Job Openings
          subItem.id === 'applicants' || // Applicants
          subItem.id === 'interviews' || // Interviews
          subItem.id === 'interview-calendar' // Interview Calendar
        );
        return {
          ...item,
          subItems: filteredSubItems
        };
      } else if (item.id === 'meetings') {
        // Hide Meetings section for HR
        return null;
      } else if (item.id === 'vslm') {
        // Hide VSLM section for HR
        return null;
      } else if (item.id === 'tasks') {
        // Hide Tasks section for HR
        return null;
      }
      return item; // Keep all other sections unchanged
    }).filter(item => item !== null); // Remove null items (like meetings, vslm, tasks)
  } else if (userLevel === '3') {
    // For Level 3 (Employee), show only Employee-specific items
    console.log('Filtering navigation for employee (Level 3)'); // Debug log
    return baseNavigation.map(item => {
      // Hide admin sections for Employee users
      if (item.id === 'admin-dashboard' || item.id === 'user-management' || item.id === 'positions' || item.id === 'access-summary') {
        return null;
      } else if (item.id === 'employees') {
        const filteredSubItems = item.subItems.filter(subItem => 
          subItem.id === 'employee-profile' // My Profile only
        );
        console.log('Employee Management filtered subItems:', filteredSubItems); // Debug log
        return {
          ...item,
          subItems: filteredSubItems
        };
      } else if (item.id === 'attendance') {
        const filteredSubItems = item.subItems.filter(subItem => 
          subItem.id === 'holiday-management' || // Holiday Calendar
          subItem.id === 'leaves' || // Leaves (new component)
          subItem.id === 'onboarding-dashboard' // Attendence
        );
        console.log('Attendance filtered subItems:', filteredSubItems); // Debug log
        return {
          ...item,
          subItems: filteredSubItems
        };
      } else if (item.id === 'recruitment') {
        // Hide entire Recruitment section for employees
        return null;
      } else if (item.id === 'meetings') {
        // Show specific Meetings items for employees
        const filteredSubItems = item.subItems.filter(subItem => 
          subItem.id === 'all-meetings' || // All Meetings
          subItem.id === 'new-meeting' || // New Meeting
          subItem.id === 'meeting-calendar' || // Meeting Calendar
          subItem.id === 'meeting-attachments' // Attachments
        );
        return {
          ...item,
          subItems: filteredSubItems
        };
      } else if (item.id === 'vslm') {
        // Show VSLM items for employees
        const filteredSubItems = item.subItems.filter(subItem => 
          subItem.id === 'all-projects' || // All Projects
          subItem.id === 'uploaded-images' || // Uploaded Images
          subItem.id === 'project-timeline' || // Project Timeline
          subItem.id === 'site-visit-log' || // Site Visit Log
          subItem.id === 'vslm-analytics' // Analytics
        );
        return {
          ...item,
          subItems: filteredSubItems
        };
      } else if (item.id === 'tasks') {
        // Show Tasks items for employees
        const filteredSubItems = item.subItems.filter(subItem => 
          subItem.id === 'task-projects' || // Projects (Development)
          subItem.id === 'task-kanban' || // Task Status (Kanban)
          subItem.id === 'add-new-task' || // Add New Task
          subItem.id === 'task-details' || // Task Details
          subItem.id === 'subtasks' || // Subtasks
          subItem.id === 'team-assignment' || // Team Assignment
          subItem.id === 'task-timeline' // Timeline (Gantt)
        );
        return {
          ...item,
          subItems: filteredSubItems
        };
      }
      return item; // Keep all other sections unchanged
    }).filter(item => item !== null); // Remove null items (like recruitment)
  }
  
  // Default fallback
  return baseNavigation;
};

export const navigationItems = [
  // Admin Dashboard - Separate section
  {
    id: "admin-dashboard",
    label: "Admin Dashboard",
    icon: LayoutDashboard,
    path: '/admin-dashboard'
  },
  
  // User Management - Separate section  
  {
    id: "user-management",
    label: "User Management", 
    icon: Users,
    path: '/user-management'
  },

  // Positions - Separate section  
  {
    id: "positions",
    label: "Positions", 
    icon: Briefcase,
    path: '/positions'
  },

  // Access Summary - Separate section  
  {
    id: "access-summary",
    label: "Access Summary", 
    icon: Shield,
    path: '/access-summary'
  },
  
  // Employee Management - Updated without admin items
  {
    id: "employees",
    label: "Employee Management",
    icon: Users,
     subItems: [
      { id: "employee-directory", label: "Home", icon: Users, path: '/employee-directory' },
      { id: "employee-profile", label: "My Profile", icon: User , path: '/employee-profile' },
      { id: "onboarding-dashboard", label: "Onboarding", icon: UserPlus, path: '/onboarding-dashboard' },
      { id: "offboarding-dashboard", label: "Offboarding", icon: UserX, path: '/offboarding-dashboard' },
      { id: "employee-leaves", label: "Leave & Absence Tracking", icon: Calendar, path: '/employee-leaves' },
    ],
  },
  {
    id: "attendance",
    label: "Attendance",
    icon: Clock,
    subItems: [
      { id: "attendance-dashboard", label: "Attendance Dashboard", icon: LayoutDashboard, path: '/attendance' },
      { id: "attendance-calendar", label: "Attendance Calendar", icon: CalendarDays, path: '/attendance-calendar' },
      { id: "punch-records", label: "Punch In/Out Records", icon: Clock, path: '/punch-records' },
      { id: "shift-management", label: "Shift Management", icon: Settings, path: '/shift-management' },
      { id: "leave-tracking", label: "Leave & Absence Tracking", icon: Calendar, path: '/leave-tracking' },
      { id: "overtime-hours", label: "Overtime & Working Hours", icon: ClockIcon, path: '/overtime-hours' },
      { id: "holiday-management", label: "Holiday Management", icon: CalendarDays, path: '/holiday-management' },
      { id: "leaves", label: "Leaves", icon: UserX, path: '/leaves' },
      { id: "onboarding-dashboard", label: "Onboarding", icon: UserPlus, path: '/onboarding-dashboard' },
      { id: "policy-rules", label: "Policy & Rules Setup", icon: Settings, path: '/policy-rules' },
      { id: "employee-attendance-profile", label: "Employee Profile", icon: Users, path: '/employee-attendance-profile' },
      { id: "punch-in-out", label: "Punch In/Out", icon: Clock, path: '/punch-in-out' },
    ],
  },
  {
    id: "recruitment",
    label: "Recruitment",
    icon: UserPlus,
    subItems: [
      { id: "job-openings", label: "Job Openings", icon: Briefcase , path: '/job-openings' },
      { id: "applicants", label: "Applicants", icon: Users , path: '/applicants-list' },
      { id: "interviews", label: "Interviews", icon: FileText , path: '/interviews' },
      { id: "interview-calendar", label: "Interview Calendar", icon: CalendarDays , path: '/interview-calendar' },
    ],
  },
   {
    id: "meetings",
    label: "Meetings",
    icon: Calendar,
    subItems: [
      { id: "all-meetings", label: "All Meetings", icon: FileText ,  path: '/meetings'},
      { id: "new-meeting", label: "New Meeting", icon: Plus , path: '/new-meeting'},
      { id: "meeting-calendar", label: "Meeting Calendar", icon: CalendarDays , path: '/calendar-meetings'},
      { id: "meeting-attachments", label: "Attachments", icon: Image , path: '/meetings-attachments'},
      { id: "meeting-reports", label: "Reports & Analytics", icon: BarChart3 , path: '/meeting-reports'},
    ],
  },
  {
    id: "vslm",
    label: "VSLM",
    icon: MapPin,
    subItems: [
      { id: "all-projects", label: "All Projects", icon: FolderOpen  , path: '/all-projects' },
      { id: "uploaded-images", label: "Uploaded Images", icon: Image , path: '/uploaded-images' },
      { id: "project-timeline", label: "Project Timeline", icon: CalendarDays , path: '/project-timeline' },
      { id: "site-visit-log", label: "Site Visit Log", icon: MapPin , path: '/site-visit-log' },
      { id: "vslm-analytics", label: "Analytics", icon: BarChart3 , path: '/vslm-analytics' },
      { id: "project-reports", label: "Reports", icon: FileText , path: '/project-reports' },
    ],
  },
  {
    id: "tasks",
    label: "Tasks",
    icon: CheckSquare,
    subItems: [
      { id: "task-dashboard", label: "Task Dashboard", icon: LayoutDashboard  ,  path: '/task-dashboard' },
      { id: "task-projects", label: "Projects (Development)", icon: FolderOpen  , path: '/task-projects' },
      { id: "task-kanban", label: "Task Status (Kanban)", icon: Kanban  , path: '/task-kanban' },
      { id: "add-new-task", label: "Add New Task", icon: Plus  , path: '/new-task' },
      { id: "task-details", label: "Task Details", icon: FileText  , path: '/task-details' },
      { id: "subtasks-management", label: "Subtasks", icon: CheckCircle  , path: '/subtasks-management' },
      { id: "task-dependencies", label: "Dependencies", icon: GitBranch  , path: '/task-dependencies' },
      { id: "task-assignment", label: "Team Assignment", icon: Users  , path: '/task-assignment' },
      { id: "task-timeline", label: "Timeline (Gantt)", icon: CalendarDays  , path: '/task-timeline' },
      { id: "task-analytics", label: "Analytics & Reports", icon: BarChart3  , path: '/task-analytics' },
    ],
  },
  {
    id: "payroll",
    label: "Payroll",
    icon: CheckSquare,
    subItems: [
      { id: "payroll-overview", label: "Attendance Overview", icon: LayoutDashboard  ,  path: '/attendance-overview' },
      { id: "salary-overview", label: "Salary Overview", icon: FolderOpen  , path: '/salary-overview' },
      { id: "payroll-history", label: "Payroll History", icon: Kanban  , path: '/payroll-history' },
      { id: "new-payroll", label: "New Payroll", icon: Plus  , path: '/new-payroll' },
      { id: "payroll-details", label: "Payroll Details", icon: FileText  , path: '/payroll-details' },
      { id: "payroll-management", label: "Payroll Management", icon: CheckCircle  , path: '/payroll-management' },
      { id: "payroll-process", label: "Payroll Process", icon: GitBranch  , path: '/payroll-process' },
      { id: "payroll-assignment", label: "Team Assignment", icon: Users  , path: '/payroll-assignment' },
      { id: "payroll-timeline", label: "Timeline (Gantt)", icon: CalendarDays  , path: '/payroll-timeline' },
      { id: "payroll-analytics", label: "Analytics & Reports", icon: BarChart3  , path: '/payroll-analytics' },
    ],
  },
];




