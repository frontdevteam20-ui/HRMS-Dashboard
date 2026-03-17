import React, { useState } from 'react';
import { Search, Filter, Calendar, User, Clock, CheckCircle, XCircle, AlertCircle, Eye, Download, Plus, ArrowRight } from 'lucide-react';
import { LeaveSummaryCards } from '../Leave_Absence/LeaveSummaryCards';
import { LeaveQuickActions } from '../Leave_Absence/LeaveQuickActions';
import { leaveRequests, kanbanColumns, getLeaveTypeColor, getDepartmentColor } from '../Leave_Absence/leaveData';
import { LeaveColumnHeader } from '../Leave_Absence/LeaveColumnHeader';
import { LeaveColumnContent } from '../Leave_Absence/LeaveColumnContent';

export const LeaveTracking = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [draggedRequest, setDraggedRequest] = useState(null);
  const [dragOverColumn, setDragOverColumn] = useState(null);
  const [currentLeaveRequests, setCurrentLeaveRequests] = useState(leaveRequests);

  const columns = kanbanColumns(currentLeaveRequests);

  const handleDragStart = (e, request) => {
    setDraggedRequest(request);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, columnId) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverColumn(columnId);
  };

  const handleDragLeave = () => {
    setDragOverColumn(null);
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();
    if (draggedRequest && draggedRequest.status !== newStatus) {
      handleMoveCard(draggedRequest.id, newStatus);
    }
    setDraggedRequest(null);
    setDragOverColumn(null);
  };

  const handleMoveCard = (requestId, newStatus) => {
    console.log(`Moving request ${requestId} to ${newStatus}`);
    
    // Update the leave requests state
    setCurrentLeaveRequests(prevRequests => 
      prevRequests.map(request => 
        request.id === requestId 
          ? { ...request, status: newStatus }
          : request
      )
    );
  };

  const LeaveCard = ({ request, columnColor }) => (
    <div 
      className={`neu-card p-4 rounded-xl mb-4 hover:shadow-lg transition-all duration-200 cursor-move group border-l-4 ${draggedRequest?.id === request.id ? 'opacity-50' : ''}`}
      style={{ borderLeftColor: columnColor }}
      draggable
      onDragStart={(e) => handleDragStart(e, request)}
    >
      {/* Employee Info */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div className={`neu-small w-10 h-10 rounded-full flex items-center justify-center mr-3 ${getDepartmentColor(request.department)} text-white font-semibold`}>
            {request.avatar}
          </div>
          <div>
            <div className="font-semibold text-[#333333] text-sm">{request.employee}</div>
            <div className="text-[#666666] text-xs">{request.employeeId}</div>
          </div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="neu-small p-1 rounded-lg hover:text-[#CA2030]">
            <Eye size={12} />
          </button>
        </div>
      </div>

      {/* Leave Type */}
      <div className="mb-3">
        <span className={`inline-block px-2 py-1 rounded-lg text-xs font-medium border ${getLeaveTypeColor(request.leaveType)}`}>
          {request.leaveType}
        </span>
      </div>

      {/* Duration */}
      <div className="neu-small p-3 rounded-lg mb-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-[#666666]">Duration</span>
          <span className="font-semibold text-[#333333]">{request.days} days</span>
        </div>
        <div className="flex items-center justify-between text-xs mt-1">
          <span className="text-[#666666]">From</span>
          <span className="text-[#333333]">{request.startDate}</span>
        </div>
        <div className="flex items-center justify-between text-xs mt-1">
          <span className="text-[#666666]">To</span>
          <span className="text-[#333333]">{request.endDate}</span>
        </div>
      </div>

      {/* Reason */}
      <div className="text-xs text-[#666666] mb-3">
        <strong>Reason:</strong> {request.reason.substring(0, 50)}
        {request.reason.length > 50 && '...'}
      </div>

      {/* Actions */}
      <div className="flex space-x-2">
        {request.status === 'pending' && (
          <>
            <button 
              onClick={() => handleMoveCard(request.id, 'approved')}
              className="flex-1 neu-small py-2 rounded-lg text-xs font-medium text-green-600 hover:bg-green-50 transition-colors flex items-center justify-center"
            >
              <CheckCircle size={12} className="mr-1" />
              Approve
            </button>
            <button 
              onClick={() => handleMoveCard(request.id, 'rejected')}
              className="flex-1 neu-small py-2 rounded-lg text-xs font-medium text-red-600 hover:bg-red-50 transition-colors flex items-center justify-center"
            >
              <XCircle size={12} className="mr-1" />
              Reject
            </button>
          </>
        )}
        {request.status !== 'pending' && (
          <div className="w-full text-center text-xs text-[#666666] py-2">
            {request.status === 'approved' ? '✓ Approved' : '✗ Rejected'}
          </div>
        )}
      </div>
    </div>
  );

  // Layout: Kanban Board View
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#333333] mb-2">Leave & Absence Tracking</h1>
        <p className="text-[#666666]">Manage leave requests with interactive kanban board</p>
      </div>


  {/* Summary Cards */}
      <LeaveSummaryCards leaveRequests={currentLeaveRequests} kanbanColumns={columns} />
      
      
      {/* Filters and Actions */}
      <div className="neu-card p-6 rounded-2xl mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-4 top-2.5 text-[#CA2030]" />
              <input
                type="text"
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 neu-input rounded-xl text-[#333333] placeholder-[#666666] focus:ring-2 focus:ring-[#CA2030] transition-all"
              />
            </div>

            {/* Department Filter */}
            <div className="relative">
              <select className="neu-input pl-4 pr-8 py-3 rounded-xl text-[#333333] focus:ring-2 focus:ring-[#CA2030] transition-all appearance-none">
                <option value="all">All Departments</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Support">Support</option>
                <option value="Design">Design</option>
                <option value="Development">Development</option>
              </select>
              <div className="absolute right-3 top-[65%] -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Leave Type Filter */}
            <div className="relative">
              <select className="neu-input pl-4 pr-8 py-3 rounded-xl text-[#333333] focus:ring-2 focus:ring-[#CA2030] transition-all appearance-none">
                <option value="all">All Leave Types</option>
                <option value="sick">Sick Leave</option>
                <option value="casual">Casual Leave</option>
                <option value="earned">Earned Leave</option>
                <option value="maternity">Maternity Leave</option>
              </select>
              <div className="absolute right-3 top-[65%] -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="neu-button px-6 py-3 rounded-xl flex items-center hover:text-[#CA2030] transition-colors">
              <Download size={16} className="mr-2" />
              Export
            </button>
            <button className="neu-primary px-6 py-3 rounded-xl flex items-center hover:shadow-xl transition-all">
              <Plus size={16} className="mr-2" />
              Add Request
            </button>
          </div>
        </div>
      </div>

    

      {/* Kanban Board */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {columns.map((column) => (
          <div 
            key={column.id} 
            className={`neu-card p-6 rounded-2xl transition-all duration-200 ${
              dragOverColumn === column.id ? 'ring-2 ring-[#CA2030] ring-opacity-50' : ''
            }`}
            onDragOver={(e) => handleDragOver(e, column.id)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, column.id)}
          >
            {/* Column Header */}
            <LeaveColumnHeader
              title={column.title} 
              color={column.color} 
              count={column.count} 
            />
            {/* Column Content */}
         <LeaveColumnContent 
            columnId={column.id} 
            leaveRequests={currentLeaveRequests} 
            columnColor={column.color} 
            LeaveCard={LeaveCard}
          />

            {/* Column Footer */}
            <div className="mt-6 pt-4 border-t border-[#E8EBEF]">
              <button 
                onClick={() => onNavigate('admin-dashboard')}
                className="w-full neu-button py-3 rounded-xl flex items-center justify-center hover:text-[#CA2030] transition-colors group"
              >
                <span className="font-medium">View All {column.title}</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions Panel */}
    <LeaveQuickActions onNavigate={onNavigate} />

    </div>
  );
};