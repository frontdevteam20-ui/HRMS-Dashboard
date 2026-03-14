// src/data/overtimeData.js

export const overtimeData = [
  {
    employee: 'Lion',
    employeeId: 'EMP001',
    avatar: 'JD',
    department: 'IT',
    regularHours: 160,
    overtimeHours: 24,
    overtimeRate: 25.5,
    totalOvertimePay: 612,
    averageDaily: 1.2,
    weeklyBreakdown: [4, 6, 5, 4, 5],
    status: 'approved',
    trend: 'up'
  },
  {
    employee: 'Sarah Wilson',
    employeeId: 'EMP002',
    avatar: 'SW',
    department: 'HR',
    regularHours: 160,
    overtimeHours: 12,
    overtimeRate: 28.0,
    totalOvertimePay: 336,
    averageDaily: 0.6,
    weeklyBreakdown: [2, 3, 2, 3, 2],
    status: 'approved',
    trend: 'down'
  },
  {
    employee: 'Mike Johnson',
    employeeId: 'EMP003',
    avatar: 'MJ',
    department: 'Support',
    regularHours: 160,
    overtimeHours: 32,
    overtimeRate: 22.0,
    totalOvertimePay: 704,
    averageDaily: 1.6,
    weeklyBreakdown: [8, 7, 6, 5, 6],
    status: 'pending',
    trend: 'up'
  },
  {
    employee: 'Emma Brown',
    employeeId: 'EMP004',
    avatar: 'EB',
    department: 'Development',
    regularHours: 160,
    overtimeHours: 18,
    overtimeRate: 32.0,
    totalOvertimePay: 576,
    averageDaily: 0.9,
    weeklyBreakdown: [3, 4, 4, 3, 4],
    status: 'approved',
    trend: 'stable'
  },
  {
    employee: 'David Lee',
    employeeId: 'EMP005',
    avatar: 'DL',
    department: 'Operations',
    regularHours: 160,
    overtimeHours: 28,
    overtimeRate: 24.0,
    totalOvertimePay: 672,
    averageDaily: 1.4,
    weeklyBreakdown: [5, 6, 7, 5, 5],
    status: 'approved',
    trend: 'up'
  }
];

export const departmentSummary = [
  {
    department: 'IT',
    employees: 15,
    totalOvertimeHours: 180,
    totalCost: 4680,
    averagePerEmployee: 12,
    trend: '+15%',
    color: '#CA2030'
  },
  {
    department: 'Support',
    employees: 12,
    totalOvertimeHours: 156,
    totalCost: 3432,
    averagePerEmployee: 13,
    trend: '+22%',
    color: '#2C318E'
  },
  {
    department: 'Development',
    employees: 18,
    totalOvertimeHours: 216,
    totalCost: 6912,
    averagePerEmployee: 12,
    trend: '+8%',
    color: '#4CAF50'
  },
  {
    department: 'Operations',
    employees: 10,
    totalOvertimeHours: 140,
    totalCost: 3360,
    averagePerEmployee: 14,
    trend: '+18%',
    color: '#9C27B0'
  }
];

export const monthlyTrend = [
  { month: 'Oct', hours: 450, cost: 11250, efficiency: 85 },
  { month: 'Nov', hours: 520, cost: 13520, efficiency: 78 },
  { month: 'Dec', hours: 480, cost: 12480, efficiency: 82 },
  { month: 'Jan', hours: 560, cost: 14560, efficiency: 75 },
  { month: 'Feb', hours: 692, cost: 18384, efficiency: 71 },
  { month: 'Mar', hours: 692, cost: 18384, efficiency: 73 }
];
