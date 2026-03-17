import React from 'react';
import { Users } from 'lucide-react';

const EmployeeTable = ({ filteredEmployees }) => {
  const renderEmployeeTable = () => (
    <div className="neu-card rounded-3xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#E8F7FF]">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-[#333333]">Department</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-[#333333]">Emp Name</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-[#333333]">Emp ID</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee, index) => (
              <tr
                key={employee.id}
                className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9FCFF]'}
              >
                <td className="py-3 px-4 text-sm text-[#333333]">{employee.department}</td>
                <td className="py-3 px-4 text-sm text-[#333333]">{employee.name}</td>
                <td className="py-3 px-4 text-sm text-[#666666]">{employee.empId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderTotalEmployeesBox = () => (
    <div className="neu-card p-6 rounded-3xl mb-6">
      <div className="flex items-center gap-4">
        <div className="w-[50px] h-[50px] bg-[#00AEEF] rounded-lg flex items-center justify-center">
          <Users size={24} className="text-white" />
        </div>
        <div>
          <div className="text-xl font-bold text-[#333333]">{filteredEmployees.length}</div>
          <div className="text-sm text-gray-600">Total Employees</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-[400px] lg:w-1/3 flex-shrink-0">
      {renderTotalEmployeesBox()}
      {renderEmployeeTable()}
    </div>
  );
};

export default EmployeeTable;
