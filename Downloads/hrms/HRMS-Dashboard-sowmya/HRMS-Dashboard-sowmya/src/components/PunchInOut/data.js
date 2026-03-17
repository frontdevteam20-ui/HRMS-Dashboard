// PunchInOut/data.js

export const timeLogs = [
  {
    id: '1',
    date: '2024-01-15',
    punchIn: '09:15 AM',
    punchOut: '06:30 PM',
    totalHours: '9h 15m',
    status: 'present',
    location: 'Office - New York'
  },
  {
    id: '2',
    date: '2024-01-14',
    punchIn: '10:30 AM',
    punchOut: '07:00 PM',
    totalHours: '8h 30m',
    status: 'late',
    location: 'Office - New York'
  },
  {
    id: '3',
    date: '2024-01-13',
    punchIn: '09:00 AM',
    punchOut: '02:00 PM',
    totalHours: '5h 00m',
    status: 'half-day',
    location: 'Office - New York'
  },
  {
    id: '4',
    date: '2024-01-12',
    punchIn: '08:45 AM',
    punchOut: '06:15 PM',
    totalHours: '9h 30m',
    status: 'present',
    location: 'Office - New York'
  }
];

export const todaysStats = {
  totalEmployees: 247,
  present: 198,
  late: 15,
  absent: 34
};
