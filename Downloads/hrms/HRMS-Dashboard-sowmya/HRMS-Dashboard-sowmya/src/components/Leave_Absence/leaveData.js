// src/data/leaveData.js

export const leaveRequests = [
  {
    id: 1,
    employee: 'Lion',
    employeeId: 'EMP001',
    avatar: 'JD',
    leaveType: 'Sick Leave',
    startDate: '2024-03-20',
    endDate: '2024-03-22',
    days: 3,
    status: 'pending',
    appliedDate: '2024-03-15',
    approver: 'Sarah Wilson',
    reason: 'Medical treatment required',
    documents: ['medical-certificate.pdf'],
    department: 'IT'
  },
  {
    id: 2,
    employee: 'Emma Brown',
    employeeId: 'EMP004',
    avatar: 'EB',
    leaveType: 'Casual Leave',
    startDate: '2024-03-25',
    endDate: '2024-03-26',
    days: 2,
    status: 'approved',
    appliedDate: '2024-03-18',
    approver: 'Mike Johnson',
    reason: 'Personal work',
    documents: [],
    department: 'Design'
  },
  {
    id: 3,
    employee: 'David Lee',
    employeeId: 'EMP005',
    avatar: 'DL',
    leaveType: 'Earned Leave',
    startDate: '2024-04-01',
    endDate: '2024-04-05',
    days: 5,
    status: 'pending',
    appliedDate: '2024-03-19',
    approver: 'Sarah Wilson',
    reason: 'Family vacation',
    documents: [],
    department: 'Development'
  },
  {
    id: 4,
    employee: 'Lisa Chen',
    employeeId: 'EMP006',
    avatar: 'LC',
    leaveType: 'Maternity Leave',
    startDate: '2024-03-30',
    endDate: '2024-09-30',
    days: 184,
    status: 'approved',
    appliedDate: '2024-02-15',
    approver: 'Sarah Wilson',
    reason: 'Maternity leave as per policy',
    documents: ['maternity-certificate.pdf'],
    department: 'Marketing'
  },
  {
    id: 5,
    employee: 'Mike Johnson',
    employeeId: 'EMP003',
    avatar: 'MJ',
    leaveType: 'Casual Leave',
    startDate: '2024-03-28',
    endDate: '2024-03-28',
    days: 1,
    status: 'rejected',
    appliedDate: '2024-03-27',
    approver: 'Sarah Wilson',
    reason: 'Short notice application',
    documents: [],
    department: 'Support'
  },
  {
    id: 6,
    employee: 'Alex Johnson',
    employeeId: 'EMP007',
    avatar: 'AJ',
    leaveType: 'Work From Home',
    startDate: '2024-03-22',
    endDate: '2024-03-24',
    days: 3,
    status: 'pending',
    appliedDate: '2024-03-20',
    approver: 'Sarah Wilson',
    reason: 'Home renovation work',
    documents: [],
    department: 'IT'
  }
];

export const kanbanColumns = (leaveRequests) => [
  { id: 'pending', title: 'Pending Approval', color: '#FFC107', count: leaveRequests.filter(r => r.status === 'pending').length },
  { id: 'approved', title: 'Approved', color: '#4CAF50', count: leaveRequests.filter(r => r.status === 'approved').length },
  { id: 'rejected', title: 'Rejected', color: '#F44336', count: leaveRequests.filter(r => r.status === 'rejected').length }
];

export const getLeaveTypeColor = (type) => {
  const colors = {
    'Sick Leave': 'bg-red-100 text-red-800 border-red-200',
    'Casual Leave': 'bg-blue-100 text-blue-800 border-blue-200',
    'Earned Leave': 'bg-green-100 text-green-800 border-green-200',
    'Maternity Leave': 'bg-purple-100 text-purple-800 border-purple-200',
    'Work From Home': 'bg-orange-100 text-orange-800 border-orange-200'
  };
  return colors[type] || 'bg-gray-100 text-gray-800 border-gray-200';
};

export const getDepartmentColor = (department) => {
  const colors = {
    'IT': 'bg-[#CA2030]',
    'HR': 'bg-[#2C318E]',
    'Support': 'bg-purple-500',
    'Design': 'bg-pink-500',
    'Development': 'bg-green-500',
    'Marketing': 'bg-yellow-500'
  };
  return colors[department] || 'bg-gray-500';
};
