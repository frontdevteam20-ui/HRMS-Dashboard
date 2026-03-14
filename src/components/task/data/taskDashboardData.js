// src/components/task/taskDashboardData.js
import { 
  CheckSquare, Clock, AlertCircle, TrendingUp, Users, 
  Folder, Target, Calendar, ArrowUp, ArrowDown, BarChart3, Filter 
} from "lucide-react";

export const kpiData = [
  {
    title: 'Total Projects',
    value: '24',
    change: '+3 from last month',
    changeType: 'positive',
    icon: Folder,
    color: 'text-[#CA2030]',
    bgColor: 'from-[#CA2030] to-[#d4471f]'
  },
  {
    title: 'Open Tasks',
    value: '156',
    change: '+12 this week',
    changeType: 'positive',
    icon: CheckSquare,
    color: 'text-[#2C318E]',
    bgColor: 'from-[#2C318E] to-[#048ba8]'
  },
  {
    title: 'Completed Tasks',
    value: '342',
    change: '+28 this week',
    changeType: 'positive',
    icon: Target,
    color: 'text-green-600',
    bgColor: 'from-green-400 to-green-600'
  },
  {
    title: 'Overdue Tasks',
    value: '8',
    change: '-5 from yesterday',
    changeType: 'positive',
    icon: AlertCircle,
    color: 'text-red-500',
    bgColor: 'from-red-400 to-red-600'
  }
];

export const taskCompletionTrend = [
  { week: 'Week 1', completed: 45, target: 50 },
  { week: 'Week 2', completed: 52, target: 50 },
  { week: 'Week 3', completed: 48, target: 50 },
  { week: 'Week 4', completed: 58, target: 50 },
];

export const resourceAllocation = [
  { team: 'Frontend Team', allocated: 85, capacity: 100, tasks: 28, color: '#CA2030' },
  { team: 'Backend Team', allocated: 92, capacity: 100, tasks: 34, color: '#2C318E' },
  { team: 'DevOps Team', allocated: 67, capacity: 100, tasks: 18, color: '#4CAF50' },
  { team: 'QA Team', allocated: 78, capacity: 100, tasks: 22, color: '#9C27B0' },
  { team: 'Design Team', allocated: 54, capacity: 100, tasks: 15, color: '#FFC107' }
];

export const recentProjects = [
  {
    name: 'E-commerce Platform',
    progress: 75,
    tasks: { total: 45, completed: 34 },
    team: 8,
    deadline: '2024-04-15',
    status: 'on-track',
    priority: 'high'
  },
  {
    name: 'Mobile App Redesign',
    progress: 45,
    tasks: { total: 32, completed: 14 },
    team: 6,
    deadline: '2024-05-20',
    status: 'at-risk',
    priority: 'medium'
  },
  {
    name: 'API Integration',
    progress: 90,
    tasks: { total: 18, completed: 16 },
    team: 4,
    deadline: '2024-03-30',
    status: 'on-track',
    priority: 'high'
  },
  {
    name: 'Data Migration',
    progress: 25,
    tasks: { total: 28, completed: 7 },
    team: 5,
    deadline: '2024-06-10',
    status: 'delayed',
    priority: 'low'
  }
];

export const tasksByPriority = [
  { priority: 'High', count: 45, color: '#CA2030' },
  { priority: 'Medium', count: 78, color: '#FFC107' },
  { priority: 'Low', count: 35, color: '#4CAF50' }
];
