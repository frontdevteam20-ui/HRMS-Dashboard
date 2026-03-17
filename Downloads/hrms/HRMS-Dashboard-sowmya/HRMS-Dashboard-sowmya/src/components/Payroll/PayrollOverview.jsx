import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PayrollDropdowns from './PayrollDropdowns';
import PayrollLegends from './PayrollLegends';
import Tabination from './Tabination';
import OverviewTable from './OverviewTable';
import EmployeeTable from './EmployeeTable';
import AttendanceTable from './AttendanceTable';
import { fetchEmployees, fetchEmployeesMonthlySummaryByMonth, ATTENDANCE_STATUS_COLORS, DAY_LABELS } from './api';

export const PayrollOverview = ({ taskId }) => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('Quick Attendance Overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [dateRange, setDateRange] = useState({
    startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
  });
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Fetch employees on component mount and when dateRange changes
  const loadEmployees = useCallback(async () => {
    try {
        setLoading(true);
        const currentMonth = dateRange.startDate.getMonth();
        const currentYear = dateRange.startDate.getFullYear();
        const data = await fetchEmployeesMonthlySummaryByMonth(currentMonth, currentYear);
        setEmployees(data);
        console.log(`📊 PayrollOverview - Loaded employees for ${currentMonth}/${currentYear}:`, data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      } finally {
        setLoading(false);
      }
    }, [dateRange.startDate, dateRange.endDate]);

  // Call loadEmployees on component mount
  useEffect(() => {
    loadEmployees();
  }, []);

  // Call loadEmployees when dateRange changes
  useEffect(() => {
    loadEmployees();
  }, [dateRange.startDate, dateRange.endDate]);

  // Memoized calculations
  const filteredEmployees = useMemo(() => {
    return employees.filter(employee => {
      const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          employee.empId.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = selectedDepartment === 'all' || 
                              employee.department === selectedDepartment;
      return matchesSearch && matchesDepartment;
    });
  }, [employees, searchTerm, selectedDepartment]);

  // Helper functions
  const getAttendanceColor = (status) => {
    return ATTENDANCE_STATUS_COLORS[status] || ATTENDANCE_STATUS_COLORS.empty;
  };

  const handleEditEmployee = (employee) => {
    setSelectedEmployee(employee);
    setEditMode(true);
  };

  const handleSaveEdit = (updatedEmployee) => {
    // Update the employee in the employees array
    setEmployees(prevEmployees => 
      prevEmployees.map(emp => 
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
    setEditMode(false);
    setSelectedEmployee(null);
    console.log('Updated employee:', updatedEmployee);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setSelectedEmployee(null);
  };

  const handleNavigateBack = () => {
    navigate(-1);
  };

  // Dynamic month calculation functions
  const getDaysInMonth = useMemo(() => {
    return dateRange.endDate.getDate();
  }, [dateRange]);

  const getDaysOfWeek = useMemo(() => {
    const days = [];
    const startDay = new Date(dateRange.startDate);
    const daysInMonth = getDaysInMonth;
    
    for (let i = 0; i < daysInMonth; i++) {
      const currentDay = new Date(startDay);
      currentDay.setDate(startDay.getDate() + i);
      const dayIndex = currentDay.getDay();
      days.push(DAY_LABELS[dayIndex]);
    }
    return days;
  }, [dateRange, getDaysInMonth]);

  const getDatesInMonth = useMemo(() => {
    return Array.from({ length: getDaysInMonth }, (_, i) => String(i + 1).padStart(2, "0"));
  }, [getDaysInMonth]);

  const renderQuickAttendanceOverview = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center py-12">
          <div className="text-lg text-gray-600">Loading employee data...</div>
        </div>
      );
    }

    return (
      <>
        <PayrollDropdowns
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedDepartment={selectedDepartment}
          setSelectedDepartment={setSelectedDepartment}
          dateRange={dateRange}
          setDateRange={setDateRange}
          filteredEmployees={filteredEmployees}
          loading={loading}
          viewMode={viewMode}
        />
        <div className="mt-6 lg:mt-8 overflow-x-auto">
          <div className="flex flex-row gap-6 min-w-max">
            <EmployeeTable filteredEmployees={filteredEmployees} />
            <AttendanceTable 
              filteredEmployees={filteredEmployees}
              getDaysInMonth={getDaysInMonth}
              getDaysOfWeek={getDaysOfWeek}
              getDatesInMonth={getDatesInMonth}
              getAttendanceColor={getAttendanceColor}
              onEditEmployee={handleEditEmployee}
            />
          </div>
        </div>
        <PayrollLegends />
      </>
    );
  };

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-6 lg:py-8 bg-[#FDFAFA] min-h-screen">
      <div className="mb-6 lg:mb-8 flex items-center gap-4">
        <button onClick={handleNavigateBack} className="neu-small p-2 rounded-xl hover:text-[#CA2030] transition-colors">
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#333333]">Attendance</h1>
        </div>
      </div>

      <div className="mb-4 sm:mb-6 flex justify-center">
        <Tabination viewMode={viewMode} setViewMode={setViewMode} />
      </div>

      <div className="space-y-4 sm:space-y-5 lg:space-y-6">
        {editMode ? (
          // Edit Screen
          <div className="neu-card p-6 rounded-2xl">
            <div className="mb-6 flex items-center gap-4">
              <button onClick={handleCancelEdit} className="neu-small p-2 rounded-xl hover:text-[#CA2030] transition-colors">
                <ArrowLeft size={20} />
              </button>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#333333]">Edit Employee Attendance</h1>
              </div>
            </div>
            
            {selectedEmployee && (
              <AttendanceTable 
                filteredEmployees={[selectedEmployee]}
                getDaysInMonth={getDaysInMonth}
                getDaysOfWeek={getDaysOfWeek}
                getDatesInMonth={getDatesInMonth}
                getAttendanceColor={getAttendanceColor}
                onEditEmployee={handleSaveEdit}
                editMode={true}
              />
            )}
          </div>
        ) : viewMode === 'Quick Attendance Overview' ? (
          renderQuickAttendanceOverview()
        ) : (
          <OverviewTable 
            viewMode={viewMode} 
            setViewMode={setViewMode}
            filteredEmployees={filteredEmployees}
          />
        )}
      </div>
    </div>
  );
};