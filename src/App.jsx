import React, { useState, useEffect, createContext, useContext, useMemo } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate, Outlet } from 'react-router-dom';
import { navigationItems } from './components/sidebar/navigationData';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Attendance from './components/attendence/Attendance';
import Leave from './pages/Leave';
import Payroll from './pages/Payroll';
import AllMeetings from './components/dashboard/meetings/Meetings';
import NewMeeting from './components/dashboard/meetings/NewMeeting';
import MeetingConfirmation from './components/dashboard/meetings/MeetingConfirmation';
import MeetingDetails from './components/dashboard/meetings/MeetingDetails';
import EditMeeting from './components/dashboard/meetings/EditMeeting';
import MeetingCalendar from './components/dashboard/meetings/MeetingCalendar';
import Header from './components/header/Header';
import ShiftManagement from './components/attendence/ShiftManagement';
import { OvertimeHours } from './components/attendence/OvertimeHours';
import { PunchRecords } from './components/attendence/PunchRecords';
import { PolicyRules } from './components/attendence/PolicyRules';
import { LeaveTracking } from './components/attendence/LeaveTracking';
import { EmployeeAttendanceProfile } from './components/attendence/EmployeeAttendanceProfile';
import { HolidayManagement } from './components/attendence/HolidayManagement.jsx';
import { AttendanceCalendar } from './components/attendence/AttendanceCalendar';
import { EmployeeDirectory } from './components/employees/EmployeeDirectory';
import { EditProfile } from './components/employees/EditProfile';
import { AddEmployee } from './components/employees/AddEmployee';
import { EmployeeProfile } from './components/employees/EmployeeProfile';
import { OnboardingChecklist } from './components/employees/OnboardingChecklist';
import { OnboardingDashboard } from './components/employees/OnboardingDashboard';
import { OnboardingNew } from './components/employees/OnboardingNew';
import { OffboardingChecklist } from './components/employees/OffboardingChecklist';
import { ExitProcess } from './components/employees/ExitProcess';
import { OffboardingDashboard } from './components/employees/OffboardingDashboard';
import { TaskDashboard } from './components/task/TaskDashboard';
import { TaskProjects } from './components/task/TaskProjects';
import { TaskKanban } from './components/task/TaskKanban';
import { AddNewTask } from './components/task/AddNewTask';
import { SubtasksManagement } from './components/task/SubtasksManagement';
import { TaskDependencies } from './components/task/TaskDependencies';
import { TaskAssignment } from './components/task/TaskAssignment';
import { TaskTimeline } from './components/task/TaskTimeline';
import { TaskDetails } from './components/task/TaskDetails';
import { JobOpeningsList } from './components/recruitment/JobOpeningsList';
import { ApplicantsList } from './components/recruitment/ApplicantsList';
import { InterviewsList } from './components/recruitment/InterviewsList';
import { InterviewCalendar } from './components/recruitment/InterviewCalendar';
import { AllProjects } from './components/vslm/AllProjects';
import { UploadedImages } from './components/vslm/UploadedImages';
import { ProjectTimeline } from './components/vslm/ProjectTimeline';
import { SiteVisitLog } from './components/vslm/SiteVisitLog';
import { VSLMAnalytics } from './components/vslm/VSLMAnalytics';
import { ProjectReports } from './components/vslm/ProjectReports';
import Footer from './components/footer/Footer';
import { MeetingAttachments } from './components/dashboard/meetings/MeetingAttachments';
import { MeetingReports } from './components/dashboard/meetings/MeetingReports';
import { PunchInOut } from './components/attendence/PunchInOut';
import { NeumorphicDashboard as AdminDashboard } from './components/dashboard/AdminDashboard';
import { AddNewEmployee } from './components/employees/AddNewEmployee';
import { ViewAnalytics } from './components/attendence/ViewAnalytics';
import { NewJobOpening } from './components/recruitment/NewJobOpening';
import { NewInterview } from './components/recruitment/NewInterview';
import { ApplicantProgress } from './components/recruitment/ApplicantProgress';
import { ApplicantDetails } from './components/recruitment/ApplicantDetails';
import { ApplicantActions } from './components/recruitment/ApplicantActions';
import { ProjectEdit } from './components/vslm/ProjectEdit';
import { EditJobOpening } from './components/recruitment/EditJobOpening';
import { JobOpeningDetails } from './components/recruitment/JobOpeningDetails';
import { ApplicantResume } from './components/recruitment/ApplicantResume';
import { ProjectDetails } from './components/vslm/ProjectDetails';
import { InterviewDetails } from './components/recruitment/InterviewDetails.jsx';
import { TaskAnalytics } from './components/task/TaskAnalytics.jsx';
import Login from './pages/Login';
import { PayrollOverview } from './components/Payroll/PayrollOverview.jsx';
import SalaryOverview from './components/Salary/SalaryOverview.jsx';
import PayrollHistory from './components/PayrollSalary/PayrollHistory.jsx';
import NewPayroll from './components/PayrollClaim/NewPayroll.jsx';
import NewClaim from './components/PayrollClaim/NewClaim.jsx';
import PayrollProcess from './components/PayrollProcess/payrollprocess.jsx';
import NewPayrollProcess from './components/PayrollProcess/NewPayrollProcess.jsx';

function MeetingsLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleNavigate = (path, state) => {
    const navigationMap = {
      'all': '/meetings',
      'new': '/meetings/new',
      'new-meeting': '/new-meeting',
      'confirmation': '/meetings/confirmation',
      'meeting-confirmation': '/meeting-confirmation',
      'meeting-details': state?.id ? `/meetings/${state.id}` : '/meeting-details',
      'edit-meeting': '/edit-meeting',
      'employee-meeting': '/employee-meeting',
      'subtasks-management': '/subtasks-management',
      'add-employee': '/add-employee',
      'edit-profile': '/edit-profile',
      'onboarding-new': '/onboarding-new',
      'onboarding-dashboard' :'/onboarding-dashboard',
      'onboarding-checklist': '/onboarding-checklist',
      'offboarding-checklist': '/offboarding-checklist',
      'offboarding-dashboard': '/offboarding-dashboard',
      'exit-process': '/exit-process',
      'project-edit': '/project-edit',
      'all-projects': '/all-projects',
      'all-projects-list': '/all-projects-list'
    };

    const route = navigationMap[path];
    if (route) {
      navigate(route, { state });
    } else {
      console.warn(`Unknown navigation path: ${path}`);
    }
  };

  return React.cloneElement(children, { onNavigate: handleNavigate });
}

// Create Auth Context
export const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children ? children : <Outlet />;
};

// Helper function to check if user has access level
const hasAccessLevel = (requiredLevel, userLevel) => {
  const level = parseInt(userLevel) || 3; // Default to 3 (highest access)
  return level <= parseInt(requiredLevel);
};

// Helper function to create protected route with level check
const createProtectedRoute = (path, element, requiredLevel = 3) => {
  const userLevel = localStorage.getItem('userLevel');
  
  if (!hasAccessLevel(requiredLevel, userLevel)) {
    return null; // Don't render route for insufficient level
  }
  
  return element;
};

function App() {
  const navigate = useNavigate();
   const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if user is already logged in (e.g., from localStorage)
    return localStorage.getItem('isAuthenticated') === 'true';
  });


  const login = () => {
    // Set the authentication state
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
    
    // Navigate based on user level
    const userLevel = localStorage.getItem('userLevel');
    if (userLevel === '1') {
      navigate('/employee-profile');
    } else {
      navigate('/dashboard');
    }
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/login');

  };

   const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  // Close mobile sidebar when clicking outside
  const handleClickOutside = (e) => {
    if (isMobileSidebarOpen && !e.target.closest('.sidebar-container')) {
      setIsMobileSidebarOpen(false);
    }
  };

  // Add click outside listener
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileSidebarOpen]);
  const location = useLocation();
  const [activeModule, setActiveModule] = useState('employees');

    const handleModuleChange = (path) => {
    // If the path is a URL path (starts with /), navigate to it
    if (path.startsWith('/')) {
      navigate(path);
    } else {
      // Check if this is a main module with sub-items
      const mainModule = navigationItems.find(item => item.id === path);
      
      if (mainModule?.subItems?.length > 0) {
        // If it's a main module with sub-items, navigate to the first sub-item's path
        const firstSubItem = mainModule.subItems[0];
        if (firstSubItem?.path) {
          navigate(firstSubItem.path);
          return;
        }
      }
      
      // Fallback to the old behavior if it's just an ID
      setActiveModule(path);
    }
  };


  // Update active module based on current path
   // Update active module based on current path
  useEffect(() => {
    const currentPath = location.pathname;
    // Find if current path matches any navigation item
    const findActiveModule = (items) => {
      for (const item of items) {
        if (item.path === currentPath) return item.id;
        if (item.subItems) {
          const subItem = item.subItems.find(sub => sub.path === currentPath);
          if (subItem) return subItem.id;
        }
      }
      return activeModule; // Keep current active module if no match found
    };
    
    setActiveModule(findActiveModule(navigationItems));
  }, [location.pathname]);
  // Show login page by default
 
  
  // Create a layout component for authenticated routes
  const AuthenticatedLayout = ({ children }) => (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Mobile overlay */}
     {isMobileSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" />
      )}

      {/* Sidebar - sticky */}
      <div className={`sidebar-container fixed lg:sticky top-0 left-0 h-screen z-50 transform transition-transform duration-300 ease-in-out ${
        isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <Sidebar 
          collapsed={!sidebarOpen} 
          onToggle={toggleSidebar}
          activeModule={activeModule}
          onModuleChange={handleModuleChange}
        />
      </div>
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header - sticky */}
        <div className="sticky top-0 z-10">
          <Header
            toggleSidebar={toggleSidebar} 
            onToggleMobileSidebar={toggleMobileSidebar}
            darkMode={false} // Add this if you're implementing dark mode
            onToggleDarkMode={() => {}} // Add this if you're implementing dark mode
            handleLogout={logout}
          />
        </div>
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          {children}
        </main>
      </div>
    </div>
  );

  return (
   
      <Routes>
        {/* Public routes */}
        <Route 
          path="/login" 
          element={
            isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login onLogin={login} />
          } 
        />
        {/* Protected routes with layout */}
        <Route element={
          isAuthenticated ? (
            <AuthenticatedLayout>
              <Outlet />
            </AuthenticatedLayout>
          ) : (
            <Navigate to="/login" state={{ from: location.pathname }} replace />
          )
        }>

            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={createProtectedRoute("/dashboard", <AdminDashboard />, 2)} />
            <Route path="/admin-dashboard" element={createProtectedRoute("/admin-dashboard", <AdminDashboard />, 2)} />
            <Route path="/employees" element={createProtectedRoute("/employees", <Employees />, 2)} />
            <Route path="/attendance" element={createProtectedRoute("/attendance", <Attendance />, 2)} />
            <Route path="/leave" element={createProtectedRoute("/leave", <Leave />, 2)} />
            <Route path="/payroll" element={createProtectedRoute("/payroll", <Payroll />, 2)} />
            <Route path="/view-analytics" element={createProtectedRoute("/view-analytics", 
              <MeetingsLayout>
                <ViewAnalytics />
              </MeetingsLayout>, 2)} />
            <Route path="/shift-management" element={createProtectedRoute("/shift-management",
              <ShiftManagement navigate={navigate} />, 2)} />
            <Route path="/shift-details" element={createProtectedRoute("/shift-details",
              <AdminDashboard />, 2)} />
            
            <Route path="/overtime-hours" element={createProtectedRoute("/overtime-hours",
              <OvertimeHours />, 2)} />
            <Route path="/holiday-management" element={createProtectedRoute("/holiday-management",
              <HolidayManagement onNavigate={navigate} />, 2)} />
            <Route path="/punch-records" element={createProtectedRoute("/punch-records",
              <PunchRecords onNavigate={navigate} />, 2)} />
            <Route path="/policy-rules" element={createProtectedRoute("/policy-rules",
              <MeetingsLayout>
                <PolicyRules navigate={navigate} />
              </MeetingsLayout>, 2)} />
            <Route path="/leave-tracking" element={createProtectedRoute("/leave-tracking",
              <LeaveTracking onNavigate={navigate} />, 2)} />
            <Route path="/employee-attendance-profile" element={createProtectedRoute("/employee-attendance-profile",
              <EmployeeAttendanceProfile />, 2)} />
            <Route path="/attendance-calendar" element={createProtectedRoute("/attendance-calendar",
              <AttendanceCalendar onNavigate={navigate}/>, 2)} />
            <Route path="/leave" element={createProtectedRoute("/leave",
              <Leave />, 2)} /> 
            <Route path="/payroll" element={createProtectedRoute("/payroll", <Payroll />, 2)} />
            <Route path="/edit-profile" element={createProtectedRoute("/edit-profile",
              <MeetingsLayout>
                <AddEmployee />
              </MeetingsLayout>, 2)} />
            <Route path="/employee-details" element={createProtectedRoute("/employee-details",
              <MeetingsLayout>
                <EditProfile />
              </MeetingsLayout>, 2)} />
            <Route path="/employee-directory" element={createProtectedRoute("/employee-directory",
              <MeetingsLayout>
                <EmployeeDirectory />
              </MeetingsLayout>, 2)} />
            <Route path="/edit-employee" element={createProtectedRoute("/edit-employee",
              <MeetingsLayout>
                <AddEmployee mode="edit" />
              </MeetingsLayout>, 2)} />
            <Route path="/punch-in-out" element={<PunchInOut />} />
            <Route path="/payroll-process" element={createProtectedRoute("/payroll-process", <PayrollProcess />, 2)} />
            <Route path="/employee-profile" element={<EmployeeProfile />} />
            <Route path="/onboarding-checklist" element={createProtectedRoute("/onboarding-checklist", <OnboardingChecklist />, 2)} />
            <Route path="/onboarding-dashboard" element={createProtectedRoute("/onboarding-dashboard",
              <MeetingsLayout>
                <OnboardingDashboard />
              </MeetingsLayout>, 2)} />
            <Route path="/add-employee" element={createProtectedRoute("/add-employee", <AddEmployee />, 2)} />
            <Route path="/edit-meeting" element={<EditMeeting />} />
            <Route
              path="/meeting-details"
              element={
                <ProtectedRoute>
                  <MeetingDetails />
                </ProtectedRoute>
              }
            />
              {/* VSLM DASHBAORD */}

                <Route path="/all-projects" element={
                  <MeetingsLayout>
                    <AllProjects onNavigate={(path, state) => {
                      const navigationMap = {
                        'project-edit': '/project-edit',
                        'all-projects-list': '/all-projects-list'
                      };
                      const route = navigationMap[path] || '/';
                      navigate(route, { state });
                    }} />
                  </MeetingsLayout>
                } />
                <Route path="/project-edit" element={<ProjectEdit />} />
                <Route path="/new-employee" element={<AddNewEmployee />} />
                <Route path="/new-project" element={<ProjectEdit isNew={true} />} />
                <Route path="/uploaded-images" element={<UploadedImages />} />
                <Route path="/project-timeline" element={<ProjectTimeline />} />
                <Route path="/project-details" element={<ProjectDetails />} />
                <Route path="/site-visit-log" element={<SiteVisitLog onNavigate={navigate} />} />
                <Route path="/vslm-analytics" element={<VSLMAnalytics onNavigate={navigate} />} />
                <Route path="/project-reports" element={<ProjectReports onNavigate={navigate} />} /> 
                <Route path="/add-new-payroll" element={<NewPayrollProcess />} />
              {/* Task Management Routes */}
                <Route path="/task-dashboard" element={<TaskDashboard />} />
                <Route path="/task-projects" element={<TaskProjects />} />
                <Route path="/task-kanban" element={<TaskKanban />} />
                <Route path="/new-task" element={<AddNewTask />} />
                <Route path="/task-details" element={<TaskDetails />} />
                <Route path="/task-dependencies" element={<TaskDependencies />} />
                <Route path="/task-assignment" element={<TaskAssignment />} />
                <Route path="/task-timeline" element={<TaskTimeline />} />
                <Route path="/onboarding-new" element={
                  <MeetingsLayout>
                    <OnboardingNew />
                  </MeetingsLayout>
                } />
                <Route path="/applicant-actions" element={<ApplicantActions />} />
                <Route path="/subtasks-management" element={<SubtasksManagement />} />
                <Route path="/task-assignment" element={<TaskAssignment />} />
                <Route path="/task-analytics" element={<TaskAnalytics />} />
                <Route path="/task-timeline" element={<TaskTimeline />} />
                <Route path="/task-details" element={<TaskDetails />} />
                {/* payroll routes  */}
                <Route path="/attendance-overview" element={<PayrollOverview />} />
                <Route path="/salary-overview" element={<SalaryOverview/>} />
                <Route path="/payroll-history" element={<PayrollHistory/>} />
                <Route path="/new-payroll" element={<NewPayroll/>} />
                <Route path="/new-claim" element={<NewClaim/>} />
                {/* Meeting Routes */}
                <Route path="/meetings-attachments" element={<MeetingAttachments />} />
                <Route path="/meeting-reports" element={
                  <MeetingsLayout>
                    <MeetingReports onNavigate={(path, state) => {
                      const navigationMap = {
                        'new-meeting': '/new-meeting',
                        'all': '/meetings'
                      };
                      const route = navigationMap[path] || '/';
                      navigate(route, { state });
                    }} />
                  </MeetingsLayout>
                } />
                <Route path="/offboarding-checklist" element={createProtectedRoute("/offboarding-checklist",
              <MeetingsLayout>
                <OffboardingChecklist onNavigate={(path, state) => {
                  const navigationMap = {
                    'offboarding-dashboard': '/offboarding-dashboard',
                    'exit-process': '/exit-process'
                  };
                  const route = navigationMap[path] || '/';
                  navigate(route, { state });
                }} />
              </MeetingsLayout>, 2)} />
                <Route path="/new-task" element={<AddNewTask />} />
                <Route path="/exit-process" element={
                  <MeetingsLayout>
                    <ExitProcess onNavigate={(path, state) => {
                      const navigationMap = {
                        'offboarding-checklist': '/offboarding-checklist',
                        'offboarding-dashboard': '/offboarding-dashboard'
                      };
                      const route = navigationMap[path] || '/';
                      navigate(route, { state });
                    }} />
                  </MeetingsLayout>
                } />
                <Route path="/offboarding-dashboard" element={
                  <MeetingsLayout>
                    <OffboardingDashboard />
                  </MeetingsLayout>
                } />
                <Route path="/new-meeting" element={
                  <MeetingsLayout>
                    <NewMeeting />
                  </MeetingsLayout>
                } />
                <Route path="/meeting-confirmation" element={
                  <MeetingsLayout>
                    <MeetingConfirmation />
                  </MeetingsLayout>
                } />
                <Route path="/meetings" element={
                  <MeetingsLayout>
                    <AllMeetings />
                  </MeetingsLayout>
                } />
                <Route path="/edit-meeting" element={
                  <MeetingsLayout>
                    <AllMeetings />
                  </MeetingsLayout>
                } />
                <Route path="/calendar-meetings" element={
                  <MeetingsLayout>
                    <MeetingCalendar />
                  </MeetingsLayout>
                } />
                <Route path="/job-openings" element={<JobOpeningsList />} />
                <Route path="/new-job-opening" element={<NewJobOpening />} />
                <Route path="/job-opening-details" element={<JobOpeningDetails />} />
                <Route path="/edit-job-opening" element={<EditJobOpening />} />
                <Route path="/applicants-list" element={<ApplicantsList onNavigate={navigate} />} />
                <Route path="/interview-calendar" element={<InterviewCalendar />} />
                <Route path="/new-interview" element={<NewInterview />} />
                <Route path="/applicant-progress" element={<ApplicantProgress />} />
                <Route path="/applicant-details" element={<ApplicantDetails />} />
                <Route path="/interviews-list" element={<InterviewsList />} />
                <Route path="/interview-details" element={<InterviewDetails />} />
                <Route path="/applicant-resume" element={<ApplicantResume />} />
                <Route path="/interviews" element={<InterviewsList />} />
              <Route path="*" element={
                <MeetingsLayout>
                  <div className="flex flex-col min-h-screen">
                    <main className="flex-grow">
                      <h1>404 - Page Not Found</h1>
                      <p>The page you're looking for doesn't exist.</p>
                    </main>
                    <Footer />
                  </div>
                </MeetingsLayout>
              } />
              </Route>
            </Routes>
       
      );
      }


      
export default App;
