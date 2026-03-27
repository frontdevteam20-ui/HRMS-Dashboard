import React, { useState, useEffect } from 'react';
import { Shield, Users, Key, Lock, Unlock, AlertTriangle, CheckCircle, Clock, Calendar, Filter, Search, ChevronDown, ChevronUp, Eye, Plus, Edit, Settings } from 'lucide-react';

const AccessSummary = () => {
  const [accessData, setAccessData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All Roles');
  const [filterStatus, setFilterStatus] = useState('All Status');
  const [selectedPosition, setSelectedPosition] = useState('Employee');
  const [expandedModules, setExpandedModules] = useState({});
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString('en-US', options));
    loadAccessData();
  }, []);

  const loadAccessData = async () => {
    try {
      // Mock data matching the new design
      const mockAccessData = {
        positions: [
          { id: 'employee', name: 'Employee', users: 2, screens: 8, color: 'purple' },
          { id: 'manager', name: 'Manager', users: 5, screens: 12, color: 'blue' },
          { id: 'hr', name: 'HR Manager', users: 3, screens: 15, color: 'green' }
        ],
        modules: {
          leave: {
            title: 'Leave Module',
            screens: [
              { name: 'Apply Leave', path: '/leave/apply', permissions: ['view', 'create'] },
              { name: 'Leave History', path: '/leave/history', permissions: ['view'] },
              { name: 'Leave Balance', path: '/leave/balance', permissions: ['view'] },
              { name: 'Leave Calendar', path: '/leave/calendar', permissions: ['view'] }
            ]
          },
          attendance: {
            title: 'Attendance Module',
            screens: [
              { name: 'Check In/Out', path: '/attendance/checkin', permissions: ['view', 'create'] },
              { name: 'Attendance History', path: '/attendance/history', permissions: ['view'] },
              { name: 'Attendance Report', path: '/attendance/report', permissions: ['view'] }
            ]
          },
          payroll: {
            title: 'Payroll Module',
            screens: [
              { name: 'Payslip', path: '/payroll/payslip', permissions: ['view'] },
              { name: 'Salary Details', path: '/payroll/salary', permissions: ['view'] }
            ]
          },
          profile: {
            title: 'Profile Module',
            screens: [
              { name: 'Personal Info', path: '/profile/personal', permissions: ['view', 'edit'] },
              { name: 'Change Password', path: '/profile/password', permissions: ['view', 'edit'] },
              { name: 'Documents', path: '/profile/documents', permissions: ['view'] }
            ]
          }
        }
      };
      
      // Initialize expanded modules state
      const initialExpanded = {};
      Object.keys(mockAccessData.modules).forEach(moduleKey => {
        initialExpanded[moduleKey] = true; // All modules expanded by default
      });
      setExpandedModules(initialExpanded);
      
      setAccessData(mockAccessData);
    } catch (error) {
      console.error('Error loading access data:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleModule = (moduleKey) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleKey]: !prev[moduleKey]
    }));
  };

  const getPositionColor = (color) => {
    const colors = {
      purple: 'bg-purple-100 text-purple-800',
      blue: 'bg-blue-100 text-blue-800',
      green: 'bg-green-100 text-green-800'
    };
    return colors[color] || 'bg-gray-100 text-gray-800';
  };

  const getPermissionButton = (permission, screenName) => {
    if (permission === 'view') {
      return (
        <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors">
          <Eye className="w-3 h-3 inline mr-1" />
          View
        </button>
      );
    } else if (permission === 'create') {
      return (
        <button className="px-3 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600 transition-colors">
          <Plus className="w-3 h-3 inline mr-1" />
          Create
        </button>
      );
    } else if (permission === 'edit') {
      return (
        <button className="px-3 py-1 bg-orange-500 text-white text-xs rounded hover:bg-orange-600 transition-colors">
          <Edit className="w-3 h-3 inline mr-1" />
          Edit
        </button>
      );
    }
    return null;
  };

  const getCurrentPosition = () => {
    return accessData.positions?.find(p => p.id === selectedPosition) || { users: 0, screens: 0, color: 'purple' };
  };

  const getTotalPermissions = () => {
    if (!accessData.modules) return 0;
    return Object.values(accessData.modules).reduce((total, module) => total + module.screens.length, 0);
  };

  const getViewPermissions = () => {
    if (!accessData.modules) return 0;
    return Object.values(accessData.modules).reduce((total, module) => 
      total + module.screens.filter(screen => screen.permissions.includes('view')).length, 0
    );
  };

  const getFullControlPermissions = () => {
    if (!accessData.modules) return 0;
    return Object.values(accessData.modules).reduce((total, module) => 
      total + module.screens.filter(screen => screen.permissions.length === 3).length, 0
    );
  };

  const getLoginStatusBadge = (status) => {
    if (status === 'Active') {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          <CheckCircle className="w-3 h-3 mr-1" />
          Active
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          <Clock className="w-3 h-3 mr-1" />
          Inactive
        </span>
      );
    }
  };

  const getRiskBadge = (risk) => {
    const colors = {
      'Low': 'bg-green-100 text-green-800',
      'Medium': 'bg-yellow-100 text-yellow-800',
      'High': 'bg-red-100 text-red-800'
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[risk] || 'bg-gray-100 text-gray-800'}`}>
        {risk === 'High' && <AlertTriangle className="w-3 h-3 mr-1" />}
        {risk}
      </span>
    );
  };

  const getPermissionIcon = (permission) => {
    const icons = {
      'Full Access': Shield,
      'User Management': Users,
      'System Settings': Key,
      'Team Management': Users,
      'Reports': Key,
      'Approvals': CheckCircle,
      'HR Access': Shield,
      'Employee Data': Users,
      'Basic Access': Key,
      'Time Tracking': Clock
    };
    return icons[permission] || Key;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="flex items-center justify-center py-12">
          <div className="text-lg text-gray-600">Loading access summary...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Access Summary</h1>
          <p className="text-gray-600 mt-1">Manage users, roles, and permissions</p>
        </div>
      </div>

      {/* Position Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Position</label>
        <select
          value={selectedPosition}
          onChange={(e) => setSelectedPosition(e.target.value)}
          className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {accessData.positions?.map(position => (
            <option key={position.id} value={position.id}>
              {position.name}
            </option>
          ))}
        </select>
      </div>

      {/* Position Summary Card */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-center">
          <div className={`p-4 rounded-lg ${getPositionColor(getCurrentPosition().color)} bg-opacity-20`}>
            <Shield className={`w-8 h-8 ${getPositionColor(getCurrentPosition().color).replace('bg-', 'text-')}`} />
          </div>
          <div className="ml-6">
            <h2 className="text-2xl font-bold text-gray-900">{getCurrentPosition().name}</h2>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center text-gray-600">
                <Users className="w-4 h-4 mr-1" />
                <span className="text-sm">{getCurrentPosition().users} Users</span>
              </div>
              <div className="flex items-center text-green-600">
                <CheckCircle className="w-4 h-4 mr-1" />
                <span className="text-sm">{getCurrentPosition().screens} Screens with Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Permission Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Permissions</p>
              <p className="text-2xl font-bold text-blue-600">{getTotalPermissions()}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Key className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Screens Accessible</p>
              <p className="text-2xl font-bold text-green-600">{getTotalPermissions()}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <Unlock className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">View Permissions</p>
              <p className="text-2xl font-bold text-purple-600">{getViewPermissions()}</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Full Control</p>
              <p className="text-2xl font-bold text-red-600">{getFullControlPermissions()}</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <Settings className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Module Sections */}
      <div className="space-y-4">
        {accessData.modules && Object.entries(accessData.modules).map(([moduleKey, module]) => (
          <div key={moduleKey} className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Module Header */}
            <div 
              className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => toggleModule(moduleKey)}
            >
              <div className="flex items-center">
                {expandedModules[moduleKey] ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 mr-2" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 mr-2" />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                  <p className="text-sm text-gray-600">{module.screens.length} screens accessible</p>
                </div>
              </div>
            </div>

            {/* Module Screens */}
            {expandedModules[moduleKey] && (
              <div className="p-4 border-t border-gray-200">
                <div className="space-y-3">
                  {module.screens.map((screen, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">{screen.name}</h4>
                        <p className="text-xs text-gray-500">{screen.path}</p>
                      </div>
                      <div className="flex gap-2">
                        {screen.permissions.map(permission => (
                          <div key={permission}>
                            {getPermissionButton(permission, screen.name)}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessSummary;
