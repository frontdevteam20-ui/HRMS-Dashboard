// src/data/taskAnalyticsData.js
import { Calendar, Users, Target, BarChart3 } from 'lucide-react';

export const analyticsData = {
  overview: {
    totalTasks: 156,
    completedTasks: 98,
    inProgressTasks: 42,
    overdueTasks: 16,
    averageCompletionTime: 4.2,
    teamProductivity: 87
  },

  trends: [
    { period: 'Week 1', completed: 12, created: 15, overdue: 2, productivity: 85 },
    { period: 'Week 2', completed: 18, created: 20, overdue: 1, productivity: 88 },
    { period: 'Week 3', completed: 22, created: 18, overdue: 3, productivity: 82 },
    { period: 'Week 4', completed: 25, created: 22, overdue: 2, productivity: 90 },
    { period: 'Week 5', completed: 21, created: 19, overdue: 4, productivity: 86 }
  ],

  teamPerformance: [
    { name: 'Lion', completed: 28, average: 4.1, efficiency: 95, workload: 85 },
    { name: 'Sarah Wilson', completed: 24, average: 3.8, efficiency: 98, workload: 70 },
    { name: 'Mike Johnson', completed: 22, average: 5.2, efficiency: 88, workload: 95 },
    { name: 'Emma Brown', completed: 20, average: 3.5, efficiency: 92, workload: 75 },
    { name: 'David Lee', completed: 18, average: 4.8, efficiency: 94, workload: 88 },
    { name: 'Lisa Chen', completed: 16, average: 4.0, efficiency: 90, workload: 60 }
  ],

  priorityDistribution: [
    { priority: 'High', count: 45, completed: 32, color: '#EF5226' },
    { priority: 'Medium', count: 78, completed: 58, color: '#FFC107' },
    { priority: 'Low', count: 33, completed: 28, color: '#4CAF50' }
  ],

  departmentStats: [
    { department: 'Development', tasks: 68, completed: 52, efficiency: 88, color: '#EF5226' },
    { department: 'Design', tasks: 34, completed: 28, efficiency: 92, color: '#05A7CC' },
    { department: 'QA', tasks: 28, completed: 22, efficiency: 85, color: '#9C27B0' },
    { department: 'DevOps', tasks: 26, completed: 20, efficiency: 94, color: '#4CAF50' }
  ],

  projectProgress: [
    { project: 'E-commerce Platform', tasks: 45, completed: 34, progress: 76, budget: 85000, spent: 62000 },
    { project: 'Mobile App Development', tasks: 32, completed: 18, progress: 56, budget: 65000, spent: 48000 },
    { project: 'API Gateway', tasks: 28, completed: 26, progress: 93, budget: 45000, spent: 42000 },
    { project: 'Data Analytics', tasks: 51, completed: 20, progress: 39, budget: 75000, spent: 35000 }
  ]
};

export const reportTemplates = [
  {
    id: 'weekly-summary',
    name: 'Weekly Task Summary',
    description: 'Comprehensive weekly report with task completion and team performance',
    icon: Calendar,
    color: '#EF5226'
  },
  {
    id: 'team-performance',
    name: 'Team Performance Report',
    description: 'Individual and team productivity metrics and analysis',
    icon: Users,
    color: '#05A7CC'
  },
  {
    id: 'project-status',
    name: 'Project Status Report',
    description: 'Project progress, budget utilization, and milestone tracking',
    icon: Target,
    color: '#4CAF50'
  },
  {
    id: 'workload-analysis',
    name: 'Workload Analysis Report',
    description: 'Task distribution and workload balancing across team members',
    icon: BarChart3,
    color: '#9C27B0'
  }
];
