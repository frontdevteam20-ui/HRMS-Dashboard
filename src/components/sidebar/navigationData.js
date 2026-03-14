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
  User
} from "lucide-react";

// Helper function to get filtered navigation based on user level
export const getFilteredNavigation = (userLevel) => {
  const baseNavigation = [...navigationItems];
  
  if (userLevel === '1') {
    // For Level 1 (Admin), show ALL navigation items except Employee Profile
    return baseNavigation.map(item => {
      if (item.id === 'employees') {
        return {
          ...item,
          subItems: item.subItems.filter(subItem => 
            subItem.id !== 'employee-profile' // Hide Employee Profile from Admin
          )
        };
      }
      return item; // Keep all other sections unchanged
    });
  } else if (userLevel === '2') {
    // For Level 2 (HR), show only HR Dashboard, Onboarding, Offboarding (hide Employee Profile)
    return baseNavigation.map(item => {
      if (item.id === 'employees') {
        return {
          ...item,
          subItems: item.subItems.filter(subItem => 
            subItem.id === 'employee-directory' || 
            subItem.id === 'onboarding-dashboard' || 
            subItem.id === 'offboarding-dashboard'
            // Hide Employee Profile from HR
          )
        };
      }
      return item; // Keep all other sections unchanged
    });
  } else if (userLevel === '3') {
    // For Level 3 (Employee), show only Employee Profile
    return baseNavigation.map(item => {
      if (item.id === 'employees') {
        return {
          ...item,
          subItems: item.subItems.filter(subItem => subItem.id === 'employee-profile')
        };
      }
      return item; // Keep all other sections unchanged
    });
  }
  
  // Default fallback
  return baseNavigation;
};

export const navigationItems = [
  // {
  //   id: "dashboard",
  //   label: "Dashboard",
  //   icon: LayoutDashboard,
  //   path: '/dashboard'
  // },
  {
    id: "employees",
    label: "Employee Management",
    icon: Users,
     subItems: [
      { id: "employee-directory", label: "HR Dashboard", icon: Users, path: '/employee-directory' },
      { id: "employee-profile", label: "Employee Profile", icon: User , path: '/employee-profile' },
      { id: "onboarding-dashboard", label: "Onboarding", icon: UserPlus, path: '/onboarding-dashboard' },
      { id: "offboarding-dashboard", label: "Offboarding", icon: UserX, path: '/offboarding-dashboard' },
      { id: "neumorphic-dashboard", label: "Admin Dashboard", icon: Settings, path: '/admin-dashboard' },
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




