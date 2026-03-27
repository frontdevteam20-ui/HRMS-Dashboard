import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { ArrowLeft, Upload, Save, X, Calendar, Clock, User, Mail, Phone, MapPin, Edit3, TrendingUp, Users, Download, ChevronDown } from 'lucide-react';
import { fetchEmployeesMonthlySummaryByMonth, ATTENDANCE_STATUS_COLORS, DAY_LABELS } from './api';

const PayrollEditScreen = () => {
  const navigate = useNavigate();
  const { employeeId } = useParams();
  const routerLocation = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [dateRange, setDateRange] = useState(() => ({
    startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
  }));
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    empId: '',
    email: '',
    phone: '',
    department: '',
    position: '',
    joinDate: '',
    profileImage: null
  });
  const [hasChanges, setHasChanges] = useState(false);
  const [attendanceData, setAttendanceData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [showDownloadDropdown, setShowDownloadDropdown] = useState(false);
  const [editingCell, setEditingCell] = useState({ index: null, field: null });

  const getStatusRemark = (status) => {
    switch(status) {
      case 'present': return 'Regular day';
      case 'absent': return 'No show';
      case 'holiday': return 'Company holiday';
      case 'week-off': return 'Weekend';
      case 'casual-leave': return 'Approved leave';
      default: return 'Working day';
    }
    
  };

  // Fetch employees on component mount
  const loadEmployees = useCallback(async () => {
      try {
        setLoading(true);
        const currentMonth = selectedMonth;
        const currentYear = selectedYear;
        
        // Check if employee data is passed through navigation state
        const passedEmployee = routerLocation.state?.employee;
        
        if (passedEmployee) {
          // Use the passed employee data directly
          setSelectedEmployee(passedEmployee);
          setEmployees([passedEmployee]);
          
          setFormData({
            name: passedEmployee.name || '',
            empId: passedEmployee.empId || '',
            email: passedEmployee.email || '',
            phone: passedEmployee.phone || '',
            department: passedEmployee.department || '',
            position: passedEmployee.position || '',
            joinDate: passedEmployee.joinDate || '',
            profileImage: passedEmployee.profileImage || null
          });

          // Generate attendance data for the selected month
          const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
          const monthAttendance = Array.from({ length: daysInMonth }, (_, i) => {
            const date = String(i + 1).padStart(2, '0');
            const month = String(currentMonth + 1).padStart(2, '0');
            const fullDate = `${date}-${month}-${currentYear}`;
            const dayIndex = new Date(currentYear, currentMonth, i + 1).getDay();
            const dayName2 = DAY_LABELS[dayIndex];
            
            // Use passed employee attendance or default to 'empty'
            const employeeAttendanceStatus = passedEmployee.attendance && passedEmployee.attendance[i] 
              ? passedEmployee.attendance[i] 
              : 'empty';
            
            return {
              date: fullDate,
              day: dayName2,
              loginTime: '--',
              logoutTime: '--',
              totalHours: '0h 0m',
              status: employeeAttendanceStatus,
              remarks: getStatusRemark(employeeAttendanceStatus)
            };
          });
          setAttendanceData(monthAttendance);
        } else {
          // Fallback to original logic using employeeId from URL
          const data = await fetchEmployeesMonthlySummaryByMonth(currentMonth, currentYear);
          setEmployees(data);
          
          // Find the specific employee to edit
          const employee = data.find(emp => emp.id.toString() === employeeId);
          setSelectedEmployee(employee);
          
          if (employee) {
            setFormData({
              name: employee.name || '',
              empId: employee.empId || '',
              email: employee.email || '',
              phone: employee.phone || '',
              department: employee.department || '',
              position: employee.position || '',
              joinDate: employee.joinDate || '',
              profileImage: employee.profileImage || null
            });

            // Generate attendance data for the selected month
            const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
            
            // Sample attendance data
            const attendanceStatus = [
              'present', 'present', 'absent', 'holiday', 'week-off', 'present', 'present', 'casual-leave',
              'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present',
              'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present',
              'present', 'present', 'present', 'present', 'present', 'present', 'present'
            ];
            const loginTimes = [
              '10:03 AM', '09:15 AM', '--', '10:30 AM', '09:00 AM', '09:00 AM', '09:00 AM', '09:00 AM',
              '09:00 AM', '09:00 AM', '09:00 AM', '09:00 AM', '09:00 AM', '09:00 AM', '09:00 AM', '09:00 AM',
              '09:00 AM', '09:00 AM', '09:00 AM', '09:00 AM', '09:00 AM', '09:00 AM', '09:00 AM', '09:00 AM',
              '09:00 AM', '09:00 AM', '09:00 AM', '09:00 AM', '09:00 AM', '09:00 AM', '09:00 AM'
            ];
            const logoutTimes = [
              '07:10 PM', '06:15 PM', '--', '07:00 PM', '06:30 PM', '06:00 PM', '06:00 PM', '06:00 PM',
              '06:00 PM', '06:00 PM', '06:00 PM', '06:00 PM', '06:00 PM', '06:00 PM', '06:00 PM', '06:00 PM',
              '06:00 PM', '06:00 PM', '06:00 PM', '06:00 PM', '06:00 PM', '06:00 PM', '06:00 PM', '06:00 PM',
              '06:00 PM', '06:00 PM', '06:00 PM', '06:00 PM', '06:00 PM', '06:00 PM', '06:00 PM'
            ];
            const totalHours = [
              '9h 0m', '8h 45m', '0h 0m', '8h 30m', '9h 0m', '9h 0m', '9h 0m', '9h 0m', '9h 0m', '9h 0m',
              '9h 0m', '9h 0m', '9h 0m', '9h 0m', '9h 0m', '9h 0m', '9h 0m', '9h 0m', '9h 0m', '9h 0m',
              '9h 0m', '9h 0m', '9h 0m', '9h 0m', '9h 0m', '9h 0m', '9h 0m', '9h 0m', '9h 0m', '9h 0m',
              '9h 0m'
            ];
            
            const monthAttendance = Array.from({ length: daysInMonth }, (_, i) => {
              const dateStr = String(i + 1).padStart(2, '0');
              const month = String(currentMonth + 1).padStart(2, '0');
              const fullDate = `${dateStr}-${month}-${currentYear}`;
              const dayIndex = new Date(currentYear, currentMonth, i + 1).getDay();
              const dayName = DAY_LABELS[dayIndex];
              
              return {
                date: fullDate,
                day: dayName,
                loginTime: loginTimes[i] || '--',
                logoutTime: logoutTimes[i] || '--',
                totalHours: totalHours[i] || '0h 0m',
                status: attendanceStatus[i] || 'present',
                remarks: getStatusRemark(attendanceStatus[i] || 'present')
              };
            });
            
            setAttendanceData(monthAttendance);
          }
        }
      } catch (error) {
        console.error('Error fetching employees:', error);
      } finally {
        setLoading(false);
      }
    }, [employeeId, selectedMonth, selectedYear, routerLocation.state]);

  useEffect(() => {
    loadEmployees();
  }, [loadEmployees]);

  const getStatusColor = (status) => {
    return ATTENDANCE_STATUS_COLORS[status] || ATTENDANCE_STATUS_COLORS.empty;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setHasChanges(true);
  };

  const handleAttendanceEdit = (dateIndex, field, value) => {
    setEditingCell({ index: dateIndex, field: field });
    setHasChanges(true);
  };

  const handleTimeChange = (dateIndex, field, newValue) => {
    const updatedAttendance = [...attendanceData];
    updatedAttendance[dateIndex] = {
      ...updatedAttendance[dateIndex],
      [field]: newValue
    };
    
    // Calculate total hours if login or logout time is changed
    if (field === 'loginTime' || field === 'logoutTime') {
      const loginTime = updatedAttendance[dateIndex].loginTime;
      const logoutTime = updatedAttendance[dateIndex].logoutTime;
      
      if (loginTime !== '--' && logoutTime !== '--') {
        const totalHours = calculateTotalHours(loginTime, logoutTime);
        updatedAttendance[dateIndex].totalHours = totalHours;
      }
    }
    
    setAttendanceData(updatedAttendance);
    setEditingCell({ index: null, field: null });
  };

  const calculateTotalHours = (loginTime, logoutTime) => {
    if (loginTime === '--' || logoutTime === '--') return '0h 0m';
    
    try {
      // Convert 12-hour format to 24-hour format
      const convertTo24Hour = (timeStr) => {
        const [time, period] = timeStr.split(' ');
        const [hours, minutes] = time.split(':').map(Number);
        const hours24 = period === 'PM' && hours !== 12 ? hours + 12 : period === 'AM' && hours === 12 ? 0 : hours;
        return hours24 * 60 + minutes;
      };
      
      const loginMinutes = convertTo24Hour(loginTime);
      const logoutMinutes = convertTo24Hour(logoutTime);
      
      if (logoutMinutes <= loginMinutes) return '0h 0m';
      
      const totalMinutes = logoutMinutes - loginMinutes;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      
      return `${hours}h ${minutes}m`;
    } catch (error) {
      return '0h 0m';
    }
  };

  const handleRemarksEdit = (dateIndex, newValue) => {
    const updatedAttendance = [...attendanceData];
    updatedAttendance[dateIndex] = {
      ...updatedAttendance[dateIndex],
      remarks: newValue
    };
    setAttendanceData(updatedAttendance);
    setHasChanges(true);
  };

  const handleDownload = (format) => {
    console.log(`Downloading attendance data in ${format} format`);
    setShowDownloadDropdown(false);
    // Implement download logic here
  };

  const handleSave = () => {
    // Update employee data
    const updatedEmployee = {
      ...selectedEmployee,
      ...formData
    };
    
    setEmployees(prevEmployees => 
      prevEmployees.map(emp => 
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
    setSelectedEmployee(updatedEmployee);
    setHasChanges(false);
    console.log('✅ PayrollEditScreen - Updated employee:', updatedEmployee);
    
    // Navigate back to overview
    navigate('/attendance-overview');
  };

  const handleCancel = () => {
    navigate('/attendance-overview');
  };

  // Calculate summary statistics
  const calculateStats = () => {
    const workingDays = attendanceData.filter(d => d.status !== 'week-off' && d.status !== 'holiday').length;
    const presentDays = attendanceData.filter(d => d.status === 'present').length;
    const absentDays = attendanceData.filter(d => d.status === 'absent').length;
    const holidays = attendanceData.filter(d => d.status === 'holiday' || d.status === 'week-off').length;
    
    return { workingDays, presentDays, absentDays, holidays };
  };

  if (loading) {
    return (
      <div className="px-4 sm:px-6 lg:px-10 py-6 lg:py-8 bg-[#FDFAFA] min-h-screen">
        <div className="flex items-center justify-center py-12">
          <div className="text-lg text-gray-600">Loading employee data...</div>
        </div>
      </div>
    );
  }

  if (!selectedEmployee) {
    return (
      <div className="px-4 sm:px-6 lg:px-10 py-6 lg:py-8 bg-[#FDFAFA] min-h-screen">
        <div className="flex items-center justify-center py-12">
          <div className="text-lg text-gray-600">Employee not found</div>
        </div>
      </div>
    );
  }

  const stats = calculateStats();

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-6 lg:py-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => window.history.back()} className="neu-small p-2 rounded-xl hover:text-[#CA2030] transition-colors">
            <ArrowLeft size={20} />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#333333]">Edit Attendance</h1>
          </div>
        </div>
        
        {/* Employee Info Bar */}
        <div className="neu-card p-6 rounded-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full neu-small flex items-center justify-center bg-blue-100">
                <User size={36} className="text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#333333]">{selectedEmployee?.name || 'Employee Name'}</div>
                <div className="text-base text-[#666666] mt-1">{selectedEmployee?.empId || 'EMP-000'}</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
              <div className="text-base text-[#666666]">
                <span className="font-medium text-[#333333]">Department:</span> {selectedEmployee?.department || 'Engineering'}
              </div>
              
              <div className="text-base text-[#666666]">
                <span className="font-medium text-[#333333]">Position:</span> {selectedEmployee?.position || 'Software Developer'}
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-base text-[#666666]">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Month Filter and Download Options */}
      <div className="neu-card p-4 rounded-2xl mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-[#333333]">Month:</label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              className="px-4 py-2 neu-small rounded-lg text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#CA2030]"
            >
              <option value={0}>January</option>
              <option value={1}>February</option>
              <option value={2}>March</option>
              <option value={3}>April</option>
              <option value={4}>May</option>
              <option value={5}>June</option>
              <option value={6}>July</option>
              <option value={7}>August</option>
              <option value={8}>September</option>
              <option value={9}>October</option>
              <option value={10}>November</option>
              <option value={11}>December</option>
            </select>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              className="px-4 py-2 neu-small rounded-lg text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#CA2030]"
            >
              <option value={2024}>2024</option>
              <option value={2025}>2025</option>
              <option value={2026}>2026</option>
              <option value={2027}>2027</option>
            </select>
          </div>
          
          <div className="relative">
            <button
              onClick={() => setShowDownloadDropdown(!showDownloadDropdown)}
              className="neu-button px-4 py-2 rounded-lg font-medium hover:text-[#CA2030] transition-colors flex items-center gap-2"
            >
              <Download size={16} />
              Download
              <ChevronDown size={16} />
            </button>
            
            {showDownloadDropdown && (
              <div className="absolute right-0 mt-2 w-48 neu-card rounded-xl shadow-lg z-10">
                <button
                  onClick={() => handleDownload('excel')}
                  className="w-full text-left px-4 py-2 text-sm text-[#333333] hover:bg-gray-100 transition-colors rounded-t-xl"
                >
                  Excel
                </button>
                <button
                  onClick={() => handleDownload('pdf')}
                  className="w-full text-left px-4 py-2 text-sm text-[#333333] hover:bg-gray-100 transition-colors"
                >
                  PDF
                </button>
                <button
                  onClick={() => handleDownload('csv')}
                  className="w-full text-left px-4 py-2 text-sm text-[#333333] hover:bg-gray-100 transition-colors"
                >
                  CSV
                </button>
                <button
                  onClick={() => handleDownload('other')}
                  className="w-full text-left px-4 py-2 text-sm text-[#333333] hover:bg-gray-100 transition-colors rounded-b-xl"
                >
                  Other formats
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="neu-card p-6 rounded-2xl text-center">
          <div className="flex items-center justify-center mb-2">
            <div className="w-12 h-12 rounded-full neu-small flex items-center justify-center bg-blue-100">
              <Calendar size={24} className="text-blue-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-[#333333] mb-1">{attendanceData.length}</div>
          <div className="text-sm text-[#666666]">Total Days</div>
        </div>
        <div className="neu-card p-6 rounded-2xl text-center">
          <div className="flex items-center justify-center mb-2">
            <div className="w-12 h-12 rounded-full neu-small flex items-center justify-center bg-green-100">
              <Users size={24} className="text-green-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-[#333333] mb-1">{attendanceData.filter(record => record.status === 'present').length}</div>
          <div className="text-sm text-[#666666]">Present Days</div>
        </div>
        <div className="neu-card p-6 rounded-2xl text-center">
          <div className="flex items-center justify-center mb-2">
            <div className="w-12 h-12 rounded-full neu-small flex items-center justify-center bg-red-100">
              <X size={24} className="text-red-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-[#333333] mb-1">{attendanceData.filter(record => record.status === 'absent').length}</div>
          <div className="text-sm text-[#666666]">Absent Days</div>
        </div>
        <div className="neu-card p-6 rounded-2xl text-center">
          <div className="flex items-center justify-center mb-2">
            <div className="w-12 h-12 rounded-full neu-small flex items-center justify-center bg-purple-100">
              <Clock size={24} className="text-purple-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-[#333333] mb-1">{attendanceData.filter(record => record.status === 'holiday' || record.status === 'week-off').length}</div>
          <div className="text-sm text-[#666666]">Holidays</div>
        </div>
      </div>

      {/* 
      
      */}

      
      <div className="neu-card p-6 rounded-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#333333]">Attendance Table</h2>
          <div className="text-sm text-[#666666]">
            {new Date(selectedYear, selectedMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full neu-card rounded-2xl overflow-hidden" style={{ minWidth: '900px' }}>
            <thead className="bg-[#E8F7FF]">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-[#333333] w-24">Date</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-[#333333] w-32">Day</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-[#333333] w-32">Login Time</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-[#333333] w-32">Logout Time</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-[#333333] w-24">Total Hours</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-[#333333] w-28">Status</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-[#333333] w-40">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((record, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9FCFF]'}>
                  <td className="py-3 px-4 text-sm text-[#333333]">{record.date}</td>
                  <td className="py-3 px-4 text-sm text-[#333333]">{record.day}</td>
                  <td className="py-3 px-4 text-sm text-[#333333]">
                    {editingCell.index === index && editingCell.field === 'loginTime' ? (
                      <input
                        type="text"
                        defaultValue={record.loginTime}
                        onBlur={(e) => handleTimeChange(index, 'loginTime', e.target.value)}
                        className="px-2 py-1 neu-small rounded text-sm text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#CA2030] w-24"
                        autoFocus
                      />
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="min-w-16">{record.loginTime}</span>
                        <button
                          onClick={() => handleAttendanceEdit(index, 'loginTime')}
                          className="p-1 hover:bg-gray-100 rounded transition-colors"
                        >
                          <Edit3 size={14} className="text-gray-500" />
                        </button>
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-4 text-sm text-[#333333]">
                    {editingCell.index === index && editingCell.field === 'logoutTime' ? (
                      <input
                        type="text"
                        defaultValue={record.logoutTime}
                        onBlur={(e) => handleTimeChange(index, 'logoutTime', e.target.value)}
                        className="px-2 py-1 neu-small rounded text-sm text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#CA2030] w-24"
                        autoFocus
                      />
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="min-w-16">{record.logoutTime}</span>
                        <button
                          onClick={() => handleAttendanceEdit(index, 'logoutTime')}
                          className="p-1 hover:bg-gray-100 rounded transition-colors"
                        >
                          <Edit3 size={14} className="text-gray-500" />
                        </button>
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-4 text-sm text-[#333333]">{record.totalHours}</td>
                  <td className="py-3 px-4 text-sm text-[#333333]">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                      {record.status === 'present' ? 'Present' :
                       record.status === 'absent' ? 'Absent' :
                       record.status === 'holiday' ? 'Holiday' :
                       record.status === 'week-off' ? 'Week-off' :
                       record.status === 'casual-leave' ? 'Casual Leave' : 'Working'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-[#333333]">
                    <input
                      type="text"
                      defaultValue={record.remarks}
                      onBlur={(e) => handleRemarksEdit(index, e.target.value)}
                      className="px-2 py-1 neu-small rounded text-sm text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#CA2030] w-32"
                      placeholder="Add remarks..."
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={handleCancel}
          className="neu-button px-6 py-3 rounded-lg font-medium hover:text-[#CA2030] transition-colors"
        >
          <X size={16} className="inline mr-2" />
          Cancel
        </button>
        <button
          onClick={handleSave}
          disabled={!hasChanges}
          className={`neu-primary px-6 py-3 rounded-lg font-medium text-white transition-all ${
            hasChanges ? 'hover:shadow-lg' : 'opacity-50 cursor-not-allowed'
          }`}
        >
          <Save size={16} className="inline mr-2" />
          Update Data
        </button>
      </div>
    </div>
  );
};

export default PayrollEditScreen;
