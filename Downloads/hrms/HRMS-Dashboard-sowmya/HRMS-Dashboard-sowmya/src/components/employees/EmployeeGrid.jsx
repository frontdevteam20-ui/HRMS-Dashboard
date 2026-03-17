// EmployeeGrid.jsx
import React from 'react';
import { Eye, Edit, Archive, Users, MapPin } from 'lucide-react';

const EmployeeGrid = ({ employees, onAction }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {employees.map((employee) => (
        <div key={employee.id} className="neu-small p-6 rounded-2xl hover:scale-105 transition-transform">
          <div className="text-center mb-4">
            <div className="w-16 h-16 neu-gradient rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-[#05A7CC]">
                {employee.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <h4 className="font-bold text-[#333333] mb-1">{employee.name}</h4>
            <p className="text-sm text-[#666666] mb-1">{employee.designation}</p>
            <p className="text-xs text-[#999999]">{employee.employeeId}</p>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-xs text-[#666666]">
              <Users size={12} className="mr-2" />
              {employee.department}
            </div>
            <div className="flex items-center text-xs text-[#666666]">
              <MapPin size={12} className="mr-2" />
              {employee.location}
            </div>
            <div className="flex items-center justify-center">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  employee.status === 'Active'
                    ? 'bg-green-100 text-green-700'
                    : employee.status === 'On Leave'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {employee.status}
              </span>
            </div>
          </div>

          <div className="flex justify-center space-x-2">
            <button
              onClick={() => onAction('view', employee)}
              className="neu-button p-2 rounded-xl hover:text-[#05A7CC] transition-colors"
              title="View Details"
            >
              <Eye size={16} />
            </button>
            <button
              onClick={() => onAction('edit', employee)}
              className="neu-button p-2 rounded-xl hover:text-[#EF5226] transition-colors"
              title="Edit Employee"
            >
              <Edit size={16} />
            </button>
            <button
              onClick={() => onAction('archive', employee)}
              className="neu-button p-2 rounded-xl hover:text-[#dc2626] transition-colors"
              title="Archive Employee"
            >
              <Archive size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeGrid;
