import React, { useState } from 'react';
import { Plus, Edit3, Clock, Users, Calendar, Settings, Trash2, Copy, Eye, ArrowRight, ChevronDown } from 'lucide-react';
import { ShiftGrid } from '../Shift/ShiftGrid';
import { UnassignedEmployees } from '../Shift/UnassignedEmployees';
import { ShiftAssignments } from '../Shift/ShiftAssignments';
import { AddShiftModal } from '../Shift/AddShiftModal';

const ShiftManagement = ({ navigate }) => {
  const [activeTab, setActiveTab] = useState('shifts');
  const [showAddShift, setShowAddShift] = useState(false);
  const [draggedEmployee, setDraggedEmployee] = useState(null);

  const shifts = [
    {
      id: 1,
      name: 'Morning Shift',
      startTime: '09:00',
      endTime: '18:00',
      breakDuration: '1h',
      workingHours: '8h',
      employees: 25,
      departments: ['IT', 'HR'],
      overtimeRule: 'After 8 hours',
      status: 'active',
      color: '#CA2030'
    },
    {
      id: 2,
      name: 'Evening Shift',
      startTime: '14:00',
      endTime: '23:00',
      breakDuration: '1h',
      workingHours: '8h',
      employees: 15,
      departments: ['Support', 'Operations'],
      overtimeRule: 'After 8 hours',
      status: 'active',
      color: '#2C318E'
    },
    {
      id: 3,
      name: 'Night Shift',
      startTime: '23:00',
      endTime: '08:00',
      breakDuration: '1h',
      workingHours: '8h',
      employees: 8,
      departments: ['Security', 'Maintenance'],
      overtimeRule: 'After 8 hours',
      status: 'active',
      color: '#9C27B0'
    },
    {
      id: 4,
      name: 'Flexible Hours',
      startTime: 'Flexible',
      endTime: 'Flexible',
      breakDuration: '1h',
      workingHours: '8h',
      employees: 12,
      departments: ['Development', 'Design'],
      overtimeRule: 'After 8 hours',
      status: 'active',
      color: '#4CAF50'
    }
  ];

  const unassignedEmployees = [
    { id: 'emp1', name: 'Alex Johnson', department: 'IT', avatar: 'AJ' },
    { id: 'emp2', name: 'Maria Garcia', department: 'HR', avatar: 'MG' },
    { id: 'emp3', name: 'Tom Wilson', department: 'Support', avatar: 'TW' },
    { id: 'emp4', name: 'Lisa Zhang', department: 'Design', avatar: 'LZ' }
  ];

  const shiftAssignments = [
    {
      employee: 'Lion',
      employeeId: 'EMP001',
      currentShift: 'Morning Shift',
      department: 'IT',
      startDate: '2024-01-15',
      status: 'active',
      avatar: 'JD'
    },
    {
      employee: 'Sarah Wilson',
      employeeId: 'EMP002',
      currentShift: 'Morning Shift',
      department: 'HR',
      startDate: '2024-02-01',
      status: 'active',
      avatar: 'SW'
    },
    {
      employee: 'Mike Johnson',
      employeeId: 'EMP003',
      currentShift: 'Evening Shift',
      department: 'Support',
      startDate: '2024-01-20',
      status: 'active',
      avatar: 'MJ'
    },
    {
      employee: 'Emma Brown',
      employeeId: 'EMP004',
      currentShift: 'Flexible Hours',
      department: 'Development',
      startDate: '2024-03-01',
      status: 'active',
      avatar: 'EB'
    }
  ];

  const handleDragStart = (e, employee) => {
    setDraggedEmployee(employee);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, shiftId) => {
    e.preventDefault();
    if (draggedEmployee) {
      console.log(`Assigning ${draggedEmployee.name} to shift ${shiftId}`);
      setDraggedEmployee(null);
    }
  };

  // Layout: Card/Grid-based with Drag & Drop
  const renderShiftsTab = () => (
    <div className="space-y-8">
      {/* Header with Add Button */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-[#333333]">Shift Management</h2>
          <p className="text-[#666666] text-sm mt-1">Organize and assign work shifts to employees</p>
        </div>
        <button 
          onClick={() => setShowAddShift(true)}
          className="neu-primary px-6 py-3 rounded-xl flex items-center hover:shadow-xl transition-all"
        >
          <Plus size={16} className="mr-2" />
          Create New Shift
        </button>
      </div>

      {/*
       */}
     <ShiftGrid
      shifts={shifts}
      handleDrop={handleDrop}
      handleDragOver={handleDragOver}
      navigate={navigate}
    />

      {/* Unassigned Employees */}
     <UnassignedEmployees
      unassignedEmployees={unassignedEmployees}
      handleDragStart={handleDragStart}
    />

    </div>
  );

  const renderAssignmentsTab = () => (
   <ShiftAssignments
    shiftAssignments={shiftAssignments}
   />
  );

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 space-y-4 sm:space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-2">Shift Management</h1>
        <p className="text-[#666666] text-sm sm:text-base">Create, organize, and assign work shifts with drag-and-drop interface</p>
      </div>

      {/* Tab Navigation */}
      <div className="neu-card rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-1 space-y-2 sm:space-y-0 neu-card-inset rounded-xl p-1">
          {[
            { id: 'shifts', label: 'Shift Overview', icon: Clock },
            { id: 'assignments', label: 'Employee Assignments', icon: Users }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center py-3 px-3 sm:px-6 rounded-lg transition-all duration-200 text-sm sm:text-base ${
                  activeTab === tab.id
                    ? 'neu-primary text-white shadow-lg'
                    : 'text-[#666666] hover:text-[#CA2030]'
                }`}
              >
                <Icon size={14} className="mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="neu-card rounded-2xl p-4 sm:p-6 lg:p-8">
        {activeTab === 'shifts' && renderShiftsTab()}
        {activeTab === 'assignments' && renderAssignmentsTab()}
      </div>

      {/* Add Shift Modal */}
      {showAddShift && (
        <AddShiftModal show={showAddShift} onClose={() => setShowAddShift(false)} />
      )}
    </div>
  );
};

export default ShiftManagement;