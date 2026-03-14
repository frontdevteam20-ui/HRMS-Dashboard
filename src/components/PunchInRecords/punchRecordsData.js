// src/constants/punchRecordsData.js

import { CheckCircle, AlertCircle, Clock } from 'lucide-react';

export const punchRecords = [
  {
    id: 1,
    employee: 'Lion',
    employeeId: 'EMP001',
    avatar: 'JD',
    date: '2024-03-15',
    punchIn: '09:00 AM',
    punchOut: '06:15 PM',
    totalHours: '9h 15m',
    overtime: '1h 15m',
    status: 'complete',
    location: 'Office',
    notes: '',
    department: 'IT'
  },
  {
    id: 2,
    employee: 'Sarah Wilson',
    employeeId: 'EMP002',
    avatar: 'SW',
    date: '2024-03-15',
    punchIn: '09:15 AM',
    punchOut: '06:00 PM',
    totalHours: '8h 45m',
    overtime: '0h',
    status: 'late',
    location: 'Office',
    notes: 'Traffic delay',
    department: 'HR'
  },
  {
    id: 3,
    employee: 'Mike Johnson',
    employeeId: 'EMP003',
    avatar: 'MJ',
    date: '2024-03-15',
    punchIn: '08:45 AM',
    punchOut: '',
    totalHours: '7h 30m',
    overtime: '0h',
    status: 'incomplete',
    location: 'WFH',
    notes: 'Forgot to punch out',
    department: 'Support'
  },
  {
    id: 4,
    employee: 'Emma Brown',
    employeeId: 'EMP004',
    avatar: 'EB',
    date: '2024-03-15',
    punchIn: '09:30 AM',
    punchOut: '05:45 PM',
    totalHours: '8h 15m',
    overtime: '0h',
    status: 'late',
    location: 'Office',
    notes: 'Medical appointment',
    department: 'Design'
  },
  {
    id: 5,
    employee: 'David Lee',
    employeeId: 'EMP005',
    avatar: 'DL',
    date: '2024-03-15',
    punchIn: '08:55 AM',
    punchOut: '06:30 PM',
    totalHours: '9h 35m',
    overtime: '1h 35m',
    status: 'complete',
    location: 'Office',
    notes: '',
    department: 'Development'
  },
  {
    id: 6,
    employee: 'Lisa Chen',
    employeeId: 'EMP006',
    avatar: 'LC',
    date: '2024-03-15',
    punchIn: '',
    punchOut: '',
    totalHours: '0h',
    overtime: '0h',
    status: 'absent',
    location: '',
    notes: 'Sick leave applied',
    department: 'Marketing'
  }
];

// Status Badge Configuration
export const getStatusBadge = (status) => {
  const badges = {
    complete: {
      color: 'bg-green-100 text-green-800 border border-green-200',
      icon: CheckCircle,
      label: 'Complete'
    },
    late: {
      color: 'bg-orange-100 text-orange-800 border border-orange-200',
      icon: AlertCircle,
      label: 'Late'
    },
    incomplete: {
      color: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
      icon: Clock,
      label: 'Incomplete'
    },
    absent: {
      color: 'bg-red-100 text-red-800 border border-red-200',
      icon: AlertCircle,
      label: 'Absent'
    }
  };

  const badge = badges[status];
  const Icon = badge.icon;

  return {
    Icon,
    badge
  };
};

// Department Color Map
export const getDepartmentColor = (department) => {
  const colors = {
    IT: 'bg-[#CA2030] text-white',
    HR: 'bg-[#2C318E] text-white',
    Support: 'bg-purple-500 text-white',
    Design: 'bg-pink-500 text-white',
    Development: 'bg-green-500 text-white',
    Marketing: 'bg-yellow-500 text-white'
  };

  return colors[department] || 'bg-gray-500 text-white';
};
