// Constants
const ATTENDANCE_STATUS_COLORS = {
  present: 'bg-[#4CAF50]',
  absent: 'bg-[#F44336]',
  late: 'bg-[#FF9800]',
  leave: 'bg-[#9C27B0]',
  holiday: 'bg-[#FFC107]',
  weekOff: 'bg-gray-400',
  remote: 'bg-[#2196F3]',
  empty: 'bg-gray-200'
};

const DAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];

// Mock API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Dummy API to fetch employees
export const fetchEmployees = async () => {
  // Simulate API call delay
  await delay(500);
  
  return [
    // January 2026 Data
    {
      id: 1,
      name: 'John Doe',
      department: 'Sales',
      empId: 'EMP-001',
      month: 0, // January (0-indexed)
      year: 2026,
      attendance: ['present', 'present', 'present', 'holiday', 'present', 'present', 'weekOff', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'holiday', 'present', 'present', 'present', 'present', 'present']
    },
    {
      id: 2,
      name: 'Mary Wilson',
      department: 'Engineering',
      empId: 'EMP-002',
      month: 0, // January (0-indexed)
      year: 2026,
      attendance: ['present', 'present', 'present', 'present', 'present', 'remote', 'present', 'present', 'present', 'weekOff', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present']
    },
    
    // February 2026 Data
    {
      id: 3,
      name: 'David Brown',
      department: 'Finance',
      empId: 'EMP-003',
      month: 1, // February (0-indexed)
      year: 2026,
      attendance: ['present', 'present', 'present', 'remote', 'present', 'present', 'present', 'present', 'holiday', 'leave', 'present', 'present', 'weekOff', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present']
    },
    {
      id: 4,
      name: 'Emily Johnson',
      department: 'HR',
      empId: 'EMP-004',
      month: 1, // February (0-indexed)
      year: 2026,
      attendance: ['present', 'present', 'absent', 'present', 'late', 'holiday', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'weekOff', 'present', 'present', 'present', 'present', 'present', 'present']
    },
    
    // March 2026 Data
    {
      id: 5,
      name: 'Tom Anderson',
      department: 'Operations',
      empId: 'EMP-005',
      month: 2, // March (0-indexed)
      year: 2026,
      attendance: ['present', 'present', 'absent', 'holiday', 'present', 'present', 'weekOff', 'leave', 'present', 'present', 'present', 'present', 'present', 'late', 'present', 'present', 'present', 'present', 'holiday', 'present', 'present', 'remote', 'present', 'present']
    },
    {
      id: 6,
      name: 'Sarah Williams',
      department: 'Marketing',
      empId: 'EMP-006',
      month: 2, // March (0-indexed)
      year: 2026,
      attendance: ['present', 'leave', 'late', 'present', 'present', 'remote', 'present', 'present', 'present', 'weekOff', 'present', 'present', 'present', 'present', 'present', 'present', 'absent', 'present', 'present', 'present', 'present', 'present', 'present', 'present']
    },
    
    // April 2026 Data
    {
      id: 7,
      name: 'Michael Davis',
      department: 'Sales',
      empId: 'EMP-007',
      month: 3, // April (0-indexed)
      year: 2026,
      attendance: ['present', 'present', 'present', 'present', 'present', 'present', 'weekOff', 'present', 'present', 'present', 'holiday', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present']
    },
    {
      id: 8,
      name: 'Lisa Martinez',
      department: 'Engineering',
      empId: 'EMP-008',
      month: 0, // April (0-indexed)
      year: 2026,
      attendance: ['present', 'present', 'absent', 'remote', 'present', 'present', 'present', 'present', 'holiday', 'leave', 'present', 'present', 'weekOff', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present']
    }
  ];
};

// API to fetch employees with monthly attendance summary
export const fetchEmployeesMonthlySummary = async () => {
  // Simulate API call delay
  await delay(500);
  
  // Get raw employee data with attendance arrays
  const rawEmployees = await fetchEmployees();
  
  // Transform attendance data into monthly summary
  return rawEmployees.map(employee => {
    const attendanceData = employee.attendance || [];
    
    // Calculate summary from attendance array
    const present = attendanceData.filter(status => status === 'present').length;
    const absent = attendanceData.filter(status => status === 'absent').length;
    const leaves = attendanceData.filter(status => status === 'leave').length;
    const workingDays = present + leaves; // Present + Leaves count as working days
    
    return {
      id: employee.id,
      name: employee.name,
      department: employee.department,
      empId: employee.empId,
      present: present,
      absentLop: absent,
      leaves: leaves,
      workingDays: workingDays,
      // Keep original attendance array for detailed view if needed
      attendance: employee.attendance
    };
  });
};

// API to get overall monthly summary statistics
export const fetchMonthlySummaryStats = async () => {
  await delay(300);
  
  const employees = await fetchEmployeesMonthlySummary();
  
  // Calculate totals
  const totalEmployees = employees.length;
  const totalPresent = employees.reduce((sum, emp) => sum + emp.present, 0);
  const totalAbsent = employees.reduce((sum, emp) => sum + emp.absentLop, 0);
  const totalLeaves = employees.reduce((sum, emp) => sum + emp.leaves, 0);
  const totalWorkingDays = employees.reduce((sum, emp) => sum + emp.workingDays, 0);
  
  // Calculate average attendance rate
  const avgAttendance = totalWorkingDays > 0 ? 
    ((totalWorkingDays / (totalEmployees * 30)) * 100).toFixed(1) : 0;
  
  return {
    totalEmployees,
    totalAbsent,
    totalWorkingDays,
    avgAttendance: parseFloat(avgAttendance)
  };
};

// API to fetch employees with monthly attendance summary and month filtering
export const fetchEmployeesMonthlySummaryByMonth = async (month = null, year = null) => {
  // Simulate API call delay
  await delay(500);
  
  // Get raw employee data with attendance arrays
  const rawEmployees = await fetchEmployees();
  
  // If month and year are provided, filter for that specific month
  let filteredEmployees = rawEmployees;
  if (month !== null && year !== null) {
    // Filter employees that match the specified month and year
    filteredEmployees = rawEmployees.filter(employee => 
      employee.month === month && employee.year === year
    );
    console.log(`🔍 Filtering employees for month: ${month}, year: ${year}`);
    console.log(`📊 Found ${filteredEmployees.length} employees for ${month}/${year}`);
  } else {
    // If no month/year specified, return current month employees
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    filteredEmployees = rawEmployees.filter(employee => 
      employee.month === currentMonth && employee.year === currentYear
    );
    console.log(`📅 No month specified, using current month: ${currentMonth}/${currentYear}`);
  }
  
  // Transform attendance data into monthly summary
  return filteredEmployees.map(employee => {
    const attendanceData = employee.attendance || [];
    
    // Calculate summary from attendance array
    const present = attendanceData.filter(status => status === 'present').length;
    const absent = attendanceData.filter(status => status === 'absent').length;
    const leaves = attendanceData.filter(status => status === 'leave').length;
    const workingDays = present + leaves; // Present + Leaves count as working days
    
    return {
      id: employee.id,
      name: employee.name,
      department: employee.department,
      empId: employee.empId,
      present: present,
      absentLop: absent,
      leaves: leaves,
      workingDays: workingDays,
      // Add month info for filtering
      month: employee.month,
      year: employee.year,
      // Keep original attendance array for detailed view if needed
      attendance: employee.attendance
    };
  });
};

// API to get available months with employee data
export const fetchAvailableMonths = async () => {
  await delay(300);
  
  // Return available months (in real app, this would come from database)
  const currentYear = new Date().getFullYear();
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  // Return last 6 months and current month
  const currentMonth = new Date().getMonth();
  const availableMonths = [];
  
  for (let i = 5; i >= 0; i--) {
    const monthIndex = (currentMonth - i + 12) % 12;
    const yearOffset = currentMonth - i < 0 ? -1 : 0;
    
    availableMonths.push({
      value: monthIndex,
      label: months[monthIndex],
      year: currentYear + yearOffset,
      display: `${months[monthIndex].substring(0, 3)}, ${currentYear + yearOffset}`
    });
  }
  
  return availableMonths;
};

// Export constants for use in components
export { ATTENDANCE_STATUS_COLORS, DAY_LABELS };
