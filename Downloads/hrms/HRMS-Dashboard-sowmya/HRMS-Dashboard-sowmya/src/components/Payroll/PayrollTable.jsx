 import React, { useState, useEffect } from 'react';
import { Edit3 } from 'lucide-react';
import { fetchEmployeesMonthlySummaryByMonth } from './api';

const attendanceStatusClasses = {
  present: 'bg-[#4CAF50]',
  absent: 'bg-[#F44336]',
  late: 'bg-[#FF9800]',
  leave: 'bg-[#9C27B0]',
  holiday: 'bg-[#FFC107]',
  weekOff: 'bg-gray-400',
  remote: 'bg-[#2196F3]'
};

const getStatusClass = (status) => attendanceStatusClasses[status] || 'bg-gray-300';

const PayrollTable = ({ month = null, year = null }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch employee data from API
  useEffect(() => {
    const loadEmployees = async () => {
      try {
        setLoading(true);
        const data = await fetchEmployeesMonthlySummaryByMonth(month, year);
        setEmployees(data);
        console.log('📊 PayrollTable - API Employees:', data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, [month, year]);

  const maxDays = employees.reduce(
    (max, employee) => Math.max(max, (employee.attendance || []).length),
    0
  );

  if (loading) {
    return (
      <div className="neu-card rounded-2xl sm:rounded-3xl p-8 text-center">
        <p className="text-[#666666]">Loading employee data...</p>
      </div>
    );
  }

  return (
    <div className="neu-card rounded-2xl sm:rounded-3xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead className="bg-[#fff]">
            <tr>  
               <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-[#333333] font-medium text-xs sm:text-sm">
                Departments
              </th>
              <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-[#333333] font-medium text-xs sm:text-sm">
                Emp Name
              </th>
              <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-[#333333] font-medium text-xs sm:text-sm">
                Emp ID
              </th>
              <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-[#333333] font-medium text-xs sm:text-sm">
                Attendance
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, rowIndex) => (
              <tr
                key={employee.id}
                className={rowIndex % 2 === 0 ? 'bg-[#fff]' : 'bg-[#FDFAFA]'}
              >
                 <td className="py-3 sm:py-4 px-3 sm:px-6">
                 
                  <p className="font-medium text-[#333333] mb-1 text-sm sm:text-base">
                    {employee.department}
                  </p>
                </td>
                <td className="py-3 sm:py-4 px-3 sm:px-6">
                 
                  <p className="font-medium text-[#333333] mb-1 text-sm sm:text-base">
                    {employee.name}
                  </p>
                </td>
                <td className="py-3 sm:py-4 px-3 sm:px-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs sm:text-sm text-[#666666]">
                      {employee.empId}
                    </span>
                    <button
                      type="button"
                      className="neu-small p-1 rounded-lg hover:shadow-md transition-all duration-200 hover:text-[#CA2030]"
                      title="Edit employee"
                      onClick={() => console.log('Edit employee:', employee.id)}
                    >
                      <Edit3 size={14} className="text-[#666666]" />
                    </button>
                  </div>
                </td>
                <td className="py-3 sm:py-4 px-3 sm:px-6">
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {Array.from({ length: maxDays }).map((_, dayIndex) => {
                      const status = employee.attendance[dayIndex] || 'empty';
                      const className =
                        status === 'empty' ? 'bg-gray-200' : getStatusClass(status);

                      return (
                        <span
                          key={dayIndex}
                          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full ${className}`}
                        />
                      );
                    })}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayrollTable;
