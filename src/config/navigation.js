import { 
  Home, 
  Users, 
  User,
  Clock, 
  UserPlus, 
  Calendar, 
  Camera, 
  CheckSquare,
  FileText,
  CalendarCheck,
  Upload,
  ListChecks,
  Truck,
  HardHat,
  Package,
  UserCog,
  LayoutDashboard,
  CalendarDays,
  Settings,
  Clock as ClockIcon,
  BarChart3,
  FolderOpen,
  Kanban,
  Plus,
  CheckCircle,
  GitBranch,
  UserCheck,
  UserX
} from 'lucide-react';

export const menuItems = [
  
  {
    id: 'employees',
    label: 'Employees',
    icon: Users,
    items: [
            { id: 'employee-profile', label: 'Employee Profile', icon: User , path: '/employee-profile' },
      // { id: 'employee-directory', label: 'Employee Directory', icon: LayoutDashboard , path: '/employee-directory' },
      { id: 'employee-details', label: 'Employee Details', icon: FileText , path: '/employee-details' },
      // { id: 'add-employee', label: 'Add New Employee', icon: UserPlus , path: '/new-employee' },
      { id: 'onboarding-dashboard', label: 'Onboarding Dashboard', icon: LayoutDashboard , path: '/employees/onboarding' },
      // { id: 'onboarding-new', label: 'New Employee Onboarding', icon: UserCheck , path: '/employees/onboarding/new' },
      { id: 'onboarding-checklist', label: 'Onboarding Checklist', icon: CheckSquare , path: '/onboarding-checklist' },
      { id: 'offboarding-dashboard', label: 'Admin Dashboard', icon: LayoutDashboard , path: '/offboarding-dashboard' },
      // { id: 'exit-process', label: 'Exit Process', icon: UserX , path: '/exit-process' },
      // { id: 'offboarding-checklist', label: 'Offboarding Checklist', icon: CheckSquare , path: '/offboarding-checklist' }
    ]
  },
  {
    id: 'attendance',
    label: 'Attendance',
    icon: Clock,
    items: [
      { label: 'Attendance Dashboard', icon: LayoutDashboard, path: '/attendance' },
      { label: 'Attendance Calendar', icon: CalendarDays, path: '/attendance/calendar' },
      { label: 'Punch In/Out Records', icon: Clock, path: '/attendance/punch' },
      { label: 'Shift Management', icon: Settings, path: '/attendance/shifts' },
      { label: 'Leave & Absence Tracking', icon: Calendar, path: '/attendance/leave' },
      { label: 'Overtime & Working Hours', icon: ClockIcon, path: '/attendance/overtime' },
      { label: 'Holiday Management', icon: CalendarDays, path: '/attendance/holidays' },
      { label: 'Policy & Rules Setup', icon: Settings, path: '/attendance/policy' },
      { label: 'Employee Profile', icon: Users, path: '/attendance/employee-profile' },
    ]
  },
  {
    id: 'recruitment',
    label: 'Recruitment',
    icon: UserPlus,
    items: [
      { label: 'Job Openings', path: '/job-openings' },
      { label: 'Applicants', path: '/applicants-list' },
      { label: 'Interviews', path: '/interviews' },
      { label: 'Interview Calendar', path: '/interview-calendar' }
    ]
  },
  {
    id: 'meetings',
    label: 'Meetings',
    icon: CalendarCheck,
    items: [
      { label: 'All Meetings (MOM)', path: '/meetings' },
      { label: 'New Meeting', path: '/meetings/new' },
      { label: 'Meeting Calendar', path: '/meetings/calendar' }
    ]
  },
  {
    id: 'vslm',
    label: 'VSLM',
    icon: HardHat,
    path: '/vslm',
    component: 'VSLM',
    items: [
      { label: 'All Projects', path: '/vslm/all-projects', component: 'VSLM', default: true },
      { label: 'Project List View', path: '/vslm/project-list', component: 'VSLM' },
      { label: 'New Project', path: '/vslm/new-project', component: 'VSLM' },
      { label: 'Uploaded Images', path: '/vslm/uploaded-images', component: 'VSLM' }
    ]
  },
 
  {
    id: 'tasks',
    label: 'Tasks',
    icon: CheckSquare,
    items: [
      { label: 'Task Dashboard', icon: LayoutDashboard  , path: '/task-dashboard' },
      { label: 'Projects (Development)', icon: FolderOpen  , path: '/task-projects' },
      { label: 'Task Status (Kanban)', icon: Kanban  , path: '/task-kanban' },
      { label: 'Add New Task', icon: Plus  , path: '/new-task' },
      { label: 'Task Details', icon: FileText  , path: '/task-details' },
      { label: 'Subtasks', icon: CheckCircle  , path: '/subtasks-management' },
      { label: 'Dependencies', icon: GitBranch  , path: '/task-dependencies' },
      { label: 'Team Assignment', icon: Users  , path: '/task-assignment' },
      { label: 'Timeline (Gantt)', icon: CalendarDays  , path: '/task-timeline' },
    ]
  },
];
