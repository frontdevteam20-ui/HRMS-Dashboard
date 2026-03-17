// EmployeeList.jsx
import React from 'react';
import { Eye, Edit, Archive, Users, MapPin } from 'lucide-react';

const EmployeeList = ({ employees, onAction }) => {
  return (
    <div className="space-y-3 sm:space-y-4">
      {employees.map((employee) => (
        <div key={employee.id} className="neu-small p-4 sm:p-6 rounded-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 neu-gradient rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="font-bold text-sm sm:text-base text-[#05A7CC]">
                  {employee.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-[#333333] text-sm sm:text-base truncate">{employee.name}</h4>
                <p className="text-xs sm:text-sm text-[#666666] truncate">{employee.designation}</p>
                <p className="text-xs text-[#999999] truncate">{employee.employeeId}</p>
              </div>
            </div>

            <div className="hidden sm:block text-right sm:text-center">
              <p className="text-xs sm:text-sm font-medium text-[#333333] truncate">{employee.department}</p>
              <p className="text-xs text-[#666666] hidden sm:block">Department</p>
            </div>

            <div className="hidden md:block text-right sm:text-center">
              <p className="text-xs sm:text-sm font-medium text-[#333333] truncate">{employee.location}</p>
              <p className="text-xs text-[#666666] hidden sm:block">Location</p>
            </div>

            <div className="hidden lg:block text-right sm:text-center">
              <p className="text-xs sm:text-sm font-medium text-[#333333]">
                {new Date(employee.joiningDate).toLocaleDateString()}
              </p>
              <p className="text-xs text-[#666666] hidden sm:block">Joining Date</p>
            </div>

            <div className="sm:text-center">
              <span
                className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
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

            <div className="flex items-center justify-end sm:justify-center space-x-1 sm:space-x-2">
              <button
                onClick={() => onAction('view', employee)}
                className="neu-button p-1.5 sm:p-2 rounded-xl hover:text-[#05A7CC] transition-colors"
                aria-label="View details"
              >
                <Eye size={14} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={() => onAction('edit', employee)}
                className="neu-button p-1.5 sm:p-2 rounded-xl hover:text-[#EF5226] transition-colors"
                aria-label="Edit employee"
              >
                <Edit size={14} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={() => onAction('archive', employee)}
                className="neu-button p-1.5 sm:p-2 rounded-xl hover:text-[#dc2626] transition-colors"
                aria-label="Archive employee"
              >
                <Archive size={14} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
