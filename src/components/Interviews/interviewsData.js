// src/data/interviewsData.js

export const interviews = [
  {
    id: 1,
    candidateName: 'Alice Johnson',
    jobTitle: 'Senior Software Engineer',
    type: 'Technical Interview',
    mode: 'Video Call',
    interviewer: 'Michael Chen',
    date: '2024-01-25',
    time: '3:00 PM',
    duration: '90 minutes',
    status: 'Scheduled',
    location: 'Zoom Meeting',
    notes: 'Focus on system design and algorithms',
    candidateId: 1,
    jobId: 1
  },
  {
    id: 2,
    candidateName: 'Michael Chen',
    jobTitle: 'Product Manager',
    type: 'Behavioral Interview',
    mode: 'In-Person',
    interviewer: 'Sarah Wilson',
    date: '2024-01-24',
    time: '11:00 AM',
    duration: '60 minutes',
    status: 'Completed',
    location: 'Conference Room A',
    notes: 'Assess leadership and communication skills',
    candidateId: 2,
    jobId: 2,
    feedback: {
      rating: 4.5,
      summary: 'Strong leadership background, excellent communication'
    }
  },
  {
    id: 3,
    candidateName: 'Sarah Williams',
    jobTitle: 'UX Designer',
    type: 'Portfolio Review',
    mode: 'Video Call',
    interviewer: 'Lisa Davis',
    date: '2024-01-26',
    time: '2:30 PM',
    duration: '45 minutes',
    status: 'Scheduled',
    location: 'Google Meet',
    notes: 'Review design portfolio and case studies',
    candidateId: 3,
    jobId: 3
  },
  {
    id: 4,
    candidateName: 'David Rodriguez',
    jobTitle: 'DevOps Engineer',
    type: 'Technical Interview',
    mode: 'Phone',
    interviewer: 'Tom Wilson',
    date: '2024-01-23',
    time: '10:00 AM',
    duration: '60 minutes',
    status: 'Completed',
    location: 'Phone Call',
    notes: 'Infrastructure and automation questions',
    candidateId: 4,
    jobId: 4,
    feedback: {
      rating: 4.8,
      summary: 'Excellent technical knowledge and practical experience'
    }
  },
  {
    id: 5,
    candidateName: 'Emma Thompson',
    jobTitle: 'Marketing Specialist',
    type: 'Phone Screening',
    mode: 'Phone',
    interviewer: 'John Smith',
    date: '2024-01-27',
    time: '9:30 AM',
    duration: '30 minutes',
    status: 'Scheduled',
    location: 'Phone Call',
    notes: 'Initial screening and culture fit assessment',
    candidateId: 5,
    jobId: 5
  },
  {
    id: 6,
    candidateName: 'James Wilson',
    jobTitle: 'Senior Software Engineer',
    type: 'Final Interview',
    mode: 'In-Person',
    interviewer: 'CEO - Mark Johnson',
    date: '2024-01-22',
    time: '4:00 PM',
    duration: '45 minutes',
    status: 'Completed',
    location: 'Executive Conference Room',
    notes: 'Final decision interview with leadership',
    candidateId: 6,
    jobId: 1,
    feedback: {
      rating: 4.2,
      summary: 'Good technical skills, needs improvement in leadership'
    }
  },
  {
    id: 7,
    candidateName: 'Rachel Green',
    jobTitle: 'Data Scientist',
    type: 'Technical Interview',
    mode: 'Video Call',
    interviewer: 'Dr. Smith',
    date: '2024-01-28',
    time: '1:00 PM',
    duration: '120 minutes',
    status: 'Cancelled',
    location: 'Teams Meeting',
    notes: 'Machine learning and statistics assessment',
    candidateId: 7,
    jobId: 6
  }
];
