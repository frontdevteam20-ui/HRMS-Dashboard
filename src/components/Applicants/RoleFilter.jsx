import React from 'react';

export const RoleFilter = ({ filterRole, setFilterRole }) => {
  return (
    <div className="relative">
      <select
        value={filterRole}
        onChange={(e) => setFilterRole(e.target.value)}
        className="neu-input pl-4 pr-10 py-3 text-[#333333] focus:ring-2 focus:ring-[#05A7CC] transition-all appearance-none w-full"
      >
        <option value="all">All Roles</option>
        <option value="Senior Software Engineer">Senior Software Engineer</option>
        <option value="Product Manager">Product Manager</option>
        <option value="UX Designer">UX Designer</option>
        <option value="Marketing Specialist">Marketing Specialist</option>
        <option value="DevOps Engineer">DevOps Engineer</option>
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
