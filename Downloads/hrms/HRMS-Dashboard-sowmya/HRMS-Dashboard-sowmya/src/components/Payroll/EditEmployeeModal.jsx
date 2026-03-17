import React from 'react';
import { Edit3, X, Calendar, Users } from 'lucide-react';

const EditEmployeeModal = ({ 
  employee, 
  isOpen, 
  onClose, 
  onSave,
  attendanceStatuses,
  getDaysInMonth,
  getDaysOfWeek,
  getDatesInMonth,
  getAttendanceColor
}) => {
  const [editedEmployee, setEditedEmployee] = React.useState(employee || {
    id: '',
    name: '',
    department: '',
    empId: '',
    attendance: []
  });
  const [activeTab, setActiveTab] = React.useState('info');

  React.useEffect(() => {
    if (employee) {
      setEditedEmployee(employee);
    }
  }, [employee]);

  const handleAttendanceChange = (dayIndex, newStatus) => {
    const updatedAttendance = editedEmployee.attendance ? [...editedEmployee.attendance] : [];
    updatedAttendance[dayIndex] = newStatus;
    setEditedEmployee({ ...editedEmployee, attendance: updatedAttendance });
  };

  const handleSave = () => {
    onSave(editedEmployee);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-[50px] h-[50px] bg-[#00AEEF] rounded-lg flex items-center justify-center">
              <Users size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#333333]">Edit Employee</h2>
              <p className="text-sm text-gray-600">{editedEmployee.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="neu-small p-2 rounded-xl hover:text-[#CA2030] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('info')}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'info' 
                ? 'text-[#CA2030] border-b-2 border-[#CA2030]' 
                : 'text-gray-600 hover:text-[#333333]'
            }`}
          >
            Employee Info
          </button>
          <button
            onClick={() => setActiveTab('attendance')}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'attendance' 
                ? 'text-[#CA2030] border-b-2 border-[#CA2030]' 
                : 'text-gray-600 hover:text-[#333333]'
            }`}
          >
            Attendance
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'info' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">Employee Name</label>
                <input
                  type="text"
                  value={editedEmployee.name}
                  onChange={(e) => setEditedEmployee({ ...editedEmployee, name: e.target.value })}
                  className="neu-input p-3 rounded-xl w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">Employee ID</label>
                <input
                  type="text"
                  value={editedEmployee.empId}
                  onChange={(e) => setEditedEmployee({ ...editedEmployee, empId: e.target.value })}
                  className="neu-input p-3 rounded-xl w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">Department</label>
                <select
                  value={editedEmployee.department}
                  onChange={(e) => setEditedEmployee({ ...editedEmployee, department: e.target.value })}
                  className="neu-input p-3 rounded-xl w-full"
                >
                  <option value="Sales">Sales</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Finance">Finance</option>
                  <option value="HR">HR</option>
                  <option value="Operations">Operations</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div className="space-y-4">
              {/* Days and Dates Header */}
              <div className="neu-card p-3 rounded-3xl">
                <div className="text-sm font-semibold text-[#333333] mb-2">Edit Attendance</div>
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

              {/* Attendance Grid */}
              <div className="neu-card rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#E8F7FF]">
                      <tr>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-[#333333] w-[45px]">Day</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-[#333333]">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: getDaysInMonth }).map((_, dayIndex) => {
                        const currentStatus = editedEmployee.attendance && editedEmployee.attendance[dayIndex] ? editedEmployee.attendance[dayIndex] : 'empty';
                        return (
                          <tr key={dayIndex} className="border-b border-gray-100">
                            <td className="py-2 px-4 text-sm text-[#333333]">
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-600">{getDatesInMonth[dayIndex]}</span>
                                <span className="text-xs text-gray-500">{getDaysOfWeek[dayIndex]}</span>
                              </div>
                            </td>
                            <td className="py-2 px-4">
                              <select
                                value={currentStatus}
                                onChange={(e) => handleAttendanceChange(dayIndex, e.target.value)}
                                className="neu-input p-2 rounded-lg text-sm w-full"
                              >
                                {attendanceStatuses.map((status) => (
                                  <option key={status.value} value={status.value}>
                                    {status.label}
                                  </option>
                                ))}
                              </select>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Attendance Summary */}
              <div className="neu-card p-4 rounded-3xl">
                <h3 className="text-sm font-semibold text-[#333333] mb-3">Attendance Summary</h3>
                <div className="grid grid-cols-4 gap-3">
                  {attendanceStatuses.map((status) => {
                    const count = editedEmployee.attendance ? editedEmployee.attendance.filter(a => a === status.value).length : 0;
                    return (
                      <div key={status.value} className="text-center">
                        <div className={`w-8 h-8 rounded-full ${getAttendanceColor(status.value)} mx-auto mb-1`}></div>
                        <div className="text-xs text-[#333333]">{count}</div>
                        <div className="text-xs text-gray-600">{status.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="neu-small px-6 py-2 rounded-xl hover:text-[#CA2030] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="neu-small px-6 py-2 rounded-xl bg-[#00AEEF] text-white hover:bg-[#0095D8] transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEmployeeModal;
