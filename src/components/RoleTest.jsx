import React from 'react';
import { getFilteredNavigation } from './sidebar/navigationData';

const RoleTest = () => {
  const userLevel = localStorage.getItem('userLevel') || 'Not Set';
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  const filteredNavigation = getFilteredNavigation(userLevel);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Role-Based Access Test</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Current User Info:</h3>
        <div className="bg-gray-100 p-4 rounded">
          <p><strong>User Level:</strong> {userLevel}</p>
          <p><strong>User Data:</strong> {JSON.stringify(user, null, 2)}</p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Available Navigation for Level {userLevel}:</h3>
        <div className="bg-gray-100 p-4 rounded">
          {filteredNavigation.map((item) => (
            <div key={item.id} className="mb-4">
              <h4 className="font-medium">{item.label}</h4>
              {item.subItems && (
                <ul className="ml-4 mt-2">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.id} className="text-sm text-gray-600">
                      ✓ {subItem.label} ({subItem.path})
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">HR Level 2 Expected Access:</h3>
        <div className="bg-green-50 p-4 rounded border border-green-200">
          <ul className="list-disc list-inside">
            <li className={filteredNavigation.find(item => item.id === 'employees')?.subItems?.find(sub => sub.id === 'employee-directory') ? 'text-green-600' : 'text-red-600'}>
              ✓ HR Dashboard (/employee-directory)
            </li>
            <li className={filteredNavigation.find(item => item.id === 'employees')?.subItems?.find(sub => sub.id === 'employee-profile') ? 'text-green-600' : 'text-red-600'}>
              ✓ Employee Profile (/employee-profile)
            </li>
            <li className={filteredNavigation.find(item => item.id === 'employees')?.subItems?.find(sub => sub.id === 'onboarding-dashboard') ? 'text-green-600' : 'text-red-600'}>
              ✓ Onboarding (/onboarding-dashboard)
            </li>
            <li className={filteredNavigation.find(item => item.id === 'employees')?.subItems?.find(sub => sub.id === 'offboarding-dashboard') ? 'text-green-600' : 'text-red-600'}>
              ✓ Offboarding (/offboarding-dashboard)
            </li>
            <li className={!filteredNavigation.find(item => item.id === 'employees')?.subItems?.find(sub => sub.id === 'neumorphic-dashboard') ? 'text-green-600' : 'text-red-600'}>
              ✗ Admin Dashboard (should be hidden for HR)
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Role Hierarchy:</h3>
        <div className="bg-blue-50 p-4 rounded border border-blue-200">
          <ul className="list-disc list-inside">
            <li><strong>Level 1:</strong> Admin - Full access including Admin Dashboard</li>
            <li><strong>Level 2:</strong> HR - HR Dashboard, Employee Profile, Onboarding, Offboarding (no Admin Dashboard)</li>
            <li><strong>Level 3:</strong> Employee - Employee Profile only</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoleTest;
