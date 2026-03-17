import React from 'react';

export const StatusFilter = ({ filterStatus, setFilterStatus }) => {
  return (
    <div className="relative">
      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
        className="neu-input pl-4 pr-10 py-3 text-[#333333] focus:ring-2 focus:ring-[#05A7CC] transition-all appearance-none w-full"
      >
        <option value="all">All Status</option>
        <option value="Under Review">Under Review</option>
        <option value="Shortlisted">Shortlisted</option>
        <option value="Interview Scheduled">Interview Scheduled</option>
        <option value="Technical Interview">Technical Interview</option>
        <option value="Offer Extended">Offer Extended</option>
        <option value="Hired">Hired</option>
        <option value="Rejected">Rejected</option>
      </select>
      <div className="absolute right-3 top-[60%] -translate-y-1/2 pointer-events-none">
        <svg
          className="w-4 h-4 text-[#05A7CC]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};
