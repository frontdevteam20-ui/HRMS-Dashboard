// src/data/employeeData.js

export const employee = {
  id: 1,
  name: 'John Smith',
  designation: 'Senior Software Engineer',
  department: 'Engineering',
  team: 'Frontend Development',
  status: 'Active',
  joiningDate: '2022-03-15',
  probationEnd: '2022-09-15',
  location: 'New York Office',
  manager: 'Sarah Wilson',
  employeeId: 'EMP001',
  avatar: '/placeholder-avatar.jpg',
  
  personalInfo: {
    phone: '+1 234-567-8901',
    email: 'john.smith@company.com',
    address: '123 Main Street, Apt 4B, New York, NY 10001',
    dateOfBirth: '1990-05-15',
    emergencyContact: {
      name: 'Jane Smith',
      relationship: 'Spouse',
      phone: '+1 234-567-8902'
    }
  },

  jobInfo: {
    salary: '$85,000',
    workType: 'Full-time',
    skills: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Git'],
    reportingTo: 'Sarah Wilson',
    directReports: ['Alice Johnson', 'Bob Davis'],
    workLocation: 'Hybrid',
    shiftTime: '9:00 AM - 6:00 PM',
    timeLogs: [
      {
        id: 1,
        date: '2024-06-27',
        location: 'Office',
        punchIn: '09:15 AM',
        punchOut: '06:30 PM',
        totalHours: '9h 15m',
        status: 'on-time'
      },
      {
        id: 2,
        date: '2024-06-26',
        location: 'Remote',
        punchIn: '09:30 AM',
        punchOut: '06:45 PM',
        totalHours: '9h 15m',
        status: 'on-time'
      },
      {
        id: 3,
        date: '2024-06-25',
        location: 'Office',
        punchIn: '09:45 AM',
        punchOut: '05:30 PM',
        totalHours: '7h 45m',
        status: 'early-out'
      },
      {
        id: 4,
        date: '2024-06-24',
        location: 'Office',
        punchIn: '10:15 AM',
        punchOut: '07:00 PM',
        totalHours: '8h 45m',
        status: 'late-in'
      }
    ]
  },

  performance: {
    currentRating: 4.5,
    lastReviewDate: '2023-12-15',
    goals: [
      { title: 'Complete React Certification', progress: 80, deadline: '2024-03-01' },
      { title: 'Lead New Project Implementation', progress: 60, deadline: '2024-04-15' },
      { title: 'Mentor 2 Junior Developers', progress: 100, deadline: '2024-02-01' }
    ]
  },

  attendance: {
    thisMonth: {
      present: 18,
      absent: 2,
      late: 1,
      overtime: 5
    },
    yearToDate: {
      totalDays: 240,
      present: 220,
      absent: 8,
      leaves: 12
    }
  },

  recentActivities: [
    { 
      date: '2024-06-15', 
      name: 'John Smith', 
      type: 'birthday',
      department: 'Engineering'
    },
    { 
      date: '2024-06-14', 
      name: 'Christmas',
      type: 'holiday',
      description: 'Office closed for Christmas'
    },
    { 
      date: '2024-06-12', 
      name: 'Sarah Johnson',
      years: 5,
      type: 'work_anniversary',
      department: 'HR'
    },
    { 
      date: '2024-06-10', 
      name: 'Alex Chen',
      team: 'Frontend Team',
      type: 'new_hire',
      position: 'Junior Developer'
    },
    { 
      date: '2024-06-08', 
      title: 'New Office Policy Update',
      type: 'workplace_update',
      description: 'Updated remote work policy effective next month'
    },
    { 
      date: '2024-06-05',
      name: 'Mike & Sarah',
      years: 1,
      type: 'anniversary',
      department: 'Design'
    },
    { 
      date: '2024-06-01',
      event: 'Project Launch Party',
      type: 'celebration',
      location: 'Main Conference Room'
    }
  ]
};

export const performanceData = [
  { month: 'Jul', rating: 4.2, productivity: 85 },
  { month: 'Aug', rating: 4.3, productivity: 88 },
  { month: 'Sep', rating: 4.4, productivity: 90 },
  { month: 'Oct', rating: 4.3, productivity: 87 },
  { month: 'Nov', rating: 4.5, productivity: 92 },
  { month: 'Dec', rating: 4.5, productivity: 94 }
];

export const attendanceData = [
  { month: 'Jul', present: 22, absent: 1, late: 0 },
  { month: 'Aug', present: 21, absent: 2, late: 1 },
  { month: 'Sep', present: 23, absent: 0, late: 0 },
  { month: 'Oct', present: 22, absent: 1, late: 1 },
  { month: 'Nov', present: 20, absent: 3, late: 2 },
  { month: 'Dec', present: 18, absent: 2, late: 1 }
];
