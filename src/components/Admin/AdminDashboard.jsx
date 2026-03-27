import React, { useState, useEffect } from 'react';
import { Users, Building, Clock, Plus, TrendingUp, TrendingDown, Calendar } from 'lucide-react';

const AdminDashboard = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);

  const summaryCards = [
    {
      title: 'Total Users',
      value: '62',
      change: '+12%',
      changeType: 'increase',
      period: 'this month',
      icon: Users,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Active Positions',
      value: '28',
      change: '+8%',
      changeType: 'increase',
      period: 'this month',
      icon: Building,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Pending Approvals',
      value: '15',
      change: '-3%',
      changeType: 'decrease',
      period: 'this month',
      icon: Clock,
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      icon: Users,
      iconColor: 'text-blue-600',
      description: 'New user "Lisa Thompson" created',
      timestamp: 'Mar 19, 09:00 PM'
    },
    {
      id: 2,
      icon: Building,
      iconColor: 'text-green-600',
      description: 'Position "Senior Developer" updated',
      timestamp: 'Mar 19, 08:30 PM'
    },
    {
      id: 3,
      icon: Users,
      iconColor: 'text-blue-600',
      description: 'User "John Smith" role changed to Admin',
      timestamp: 'Mar 19, 07:45 PM'
    },
    {
      id: 4,
      icon: Clock,
      iconColor: 'text-orange-600',
      description: 'Leave request approved for "Sarah Johnson"',
      timestamp: 'Mar 19, 06:15 PM'
    },
    {
      id: 5,
      icon: Building,
      iconColor: 'text-green-600',
      description: 'New department "Marketing" created',
      timestamp: 'Mar 19, 05:30 PM'
    }
  ];

  const quickActions = [
    {
      id: 1,
      title: 'Create User',
      description: 'Add a new user to the system',
      bgColor: 'bg-red-500',
      hoverColor: 'hover:bg-red-600'
    },
    {
      id: 2,
      title: 'Create Position',
      description: 'Add a new job position',
      bgColor: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      id: 3,
      title: 'Manage Access',
      description: 'Control user permissions',
      bgColor: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage users, roles, and permissions</p>
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar className="w-5 h-5 mr-2" />
          <span className="text-sm">{currentDate}</span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {summaryCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{card.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{card.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${card.bgColor}`}>
                  <Icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
              </div>
              <div className="flex items-center">
                {card.changeType === 'increase' ? (
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm font-medium ${
                  card.changeType === 'increase' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {card.change} {card.period}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg bg-gray-50`}>
                    <Icon className={`w-4 h-4 ${activity.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 text-sm">{activity.description}</p>
                    <p className="text-gray-500 text-xs mt-1">{activity.timestamp}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            {quickActions.map((action) => (
              <button
                key={action.id}
                className={`w-full text-left p-4 rounded-lg ${action.bgColor} ${action.hoverColor} text-white transition-colors duration-200`}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                    <Plus className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">{action.title}</p>
                    <p className="text-sm opacity-90">{action.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
