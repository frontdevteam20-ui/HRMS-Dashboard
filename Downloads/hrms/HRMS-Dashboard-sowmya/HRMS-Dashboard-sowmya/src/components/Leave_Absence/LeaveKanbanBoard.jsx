import React from 'react';
import { Calendar, ArrowRight, CheckCircle, XCircle, Eye } from 'lucide-react';

export const LeaveKanbanBoard = ({ leaveRequests, kanbanColumns, onNavigate, handleMoveCard, getLeaveTypeColor, getDepartmentColor }) => {

  const LeaveCard = ({ request, columnColor }) => (
    <div className="neu-card p-4 rounded-xl mb-4 hover:shadow-lg transition-all duration-200 cursor-move group border-l-4" 
         style={{ borderLeftColor: columnColor }}>
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
        {request.status === 'pending' ? (
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
        ) : (
          <div className="w-full text-center text-xs text-[#666666] py-2">
            {request.status === 'approved' ? '✓ Approved' : '✗ Rejected'}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {kanbanColumns.map((column) => (
        <div key={column.id} className="neu-card p-6 rounded-2xl">
          {/* Column Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: column.color }}></div>
              <h3 className="text-lg font-bold text-[#333333]">{column.title}</h3>
            </div>
            <div className="px-3 py-1 rounded-full text-white text-sm font-medium" style={{ backgroundColor: column.color }}>
              {column.count}
            </div>
          </div>

          {/* Column Content */}
          <div className="space-y-4 min-h-96">
            {leaveRequests.filter(request => request.status === column.id).map(request => (
              <LeaveCard key={request.id} request={request} columnColor={column.color} />
            ))}

            {leaveRequests.filter(request => request.status === column.id).length === 0 && (
              <div className="neu-card-inset p-8 rounded-xl text-center">
                <div className="text-[#666666] mb-4">
                  <Calendar size={32} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No {column.title.toLowerCase()} requests</p>
                </div>
              </div>
            )}
          </div>

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
  );
};
