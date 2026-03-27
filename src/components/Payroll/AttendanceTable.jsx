import React, { useState } from 'react';
import { Edit3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EditEmployeeModal from './EditEmployeeModal';

const AttendanceTable = ({ 
  filteredEmployees, 
  getDaysInMonth, 
  getDaysOfWeek, 
  getDatesInMonth, 
  getAttendanceColor,
  onEditEmployee 
}) => {
  const navigate = useNavigate();
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const attendanceStatuses = [
    { value: 'present', label: 'Present' },
    { value: 'absent', label: 'Absent' },
    { value: 'late', label: 'Late' },
    { value: 'leave', label: 'Leave' },
    { value: 'holiday', label: 'Holiday' },
    { value: 'weekOff', label: 'Week Off' },
    { value: 'remote', label: 'Remote' },
    { value: 'empty', label: 'Empty' }
  ];

  const handleEditClick = (employee) => {
    // Navigate to PayrollEditScreen with employee data
    navigate('/payroll-edit', { state: { employee } });
  };

  const handleSaveEmployee = (updatedEmployee) => {
    onEditEmployee(updatedEmployee);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  const renderAttendanceDots = (employee) => {
    return Array.from({ length: getDaysInMonth }).map((_, dayIndex) => {
      const status = dayIndex < employee.attendance.length ? employee.attendance[dayIndex] : 'empty';
      const className = getAttendanceColor(status);
      
      return (
        <span
          key={dayIndex}
          className={`w-4 h-4 rounded-full flex-shrink-0 ${className}`}
        />
      );
    });
  };

  const renderAttendanceTable = () => (
    <div className="neu-card rounded-3xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-[#E8F7FF]">
          <tr>
            <th className="py-3 px-4 text-left text-sm font-semibold text-[#333333] w-[45px]">Edit</th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-[#333333]">Attendance</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee, index) => (
            <tr
              key={employee.id}
              className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9FCFF]'}
            >
              <td className="text-sm text-[#333333] p-[0.555rem_1rem]">
                <button
                  type="button"
                  className="neu-small rounded-lg hover:shadow-md transition-all duration-200 hover:text-[#CA2030] mt-1 mb-2"
                  title="Edit employee"
                  onClick={() => handleEditClick(employee)}
                >
                  <Edit3 size={14} className="text-[#666666]" />
                </button>
              </td>
              <td className="text-sm text-[#333333] p-[0.555rem_1rem]">
                <div className="flex gap-1 flex-1 mt-1 mb-1 justify-between">
                  {renderAttendanceDots(employee)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderDaysAndDatesHeader = () => (
    <div className="neu-card p-3 rounded-3xl mb-6">
      <div className="text-sm font-semibold text-[#333333] mb-2">Attendance Overview</div>
      <div className="flex gap-1 pb-0 justify-between">
        <div className="w-[45px] flex-shrink-0"></div>
        {getDaysOfWeek.map((day, i) => (
          <div key={i} className="w-6 h-6 flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-medium text-[#666666]">{day}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-1 pb-0 justify-between">
        <div className="w-[45px] flex-shrink-0"></div>
        {getDatesInMonth.map((date, i) => (
          <div key={i} className="w-6 h-6 flex items-center justify-center flex-shrink-0">
            <span className="text-xs text-[#333333]">{date}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full lg:w-100 lg:w-2/3 flex-shrink-0">
      {renderDaysAndDatesHeader()}
      {renderAttendanceTable()}
      
      <EditEmployeeModal
        employee={selectedEmployee}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveEmployee}
        attendanceStatuses={attendanceStatuses}
        getDaysInMonth={getDaysInMonth}
        getDaysOfWeek={getDaysOfWeek}
        getDatesInMonth={getDatesInMonth}
        getAttendanceColor={getAttendanceColor}
      />
    </div>
  );
};

export default AttendanceTable;
