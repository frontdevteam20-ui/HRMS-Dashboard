// src/Leave_Absence/LeaveColumnContent.jsx
import React from 'react';
import { Calendar } from 'lucide-react';

export const LeaveColumnContent = ({ columnId, leaveRequests, columnColor , LeaveCard }) => {
  const requestsForColumn = leaveRequests.filter(request => request.status === columnId);

  return (
    <div className="space-y-4">
      {requestsForColumn.map(request => (
        <LeaveCard
          key={request.id}
          request={request}
          columnColor={columnColor}
        />
      ))}

      {requestsForColumn.length === 0 && (
        <div className="neu-card-inset p-8 rounded-xl text-center">
          <div className="text-[#666666] mb-4">
            <Calendar size={32} className="mx-auto mb-2 opacity-50" />
            <p className="text-sm">No requests</p>
          </div>
        </div>
      )}
    </div>
  );
};
