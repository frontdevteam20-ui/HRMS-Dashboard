// In PFClaimDashboard.jsx
import React, { useState } from 'react';
import PFClaimCards from './PFClaimCards';
import PFClaimTable from './PFClaimTable';
import PFClaimDropdown from './PFClaimDropdown';
import { defaultClaims } from './ClaimData';

const PFClaimDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [dateRange, setDateRange] = useState('all');

  // Filter claims based on selected filters
  const filteredClaims = defaultClaims.filter(claim => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      !searchTerm || 
      (claim.name && claim.name.toLowerCase().includes(searchLower)) || 
      (claim.id && claim.id.toLowerCase().includes(searchLower));

    const matchesDept = 
      selectedDepartment === 'all' || 
      claim.dept === selectedDepartment;

    const matchesStatus = 
      selectedStatus === 'all' || 
      claim.status === selectedStatus;

    return matchesSearch && matchesDept && matchesStatus;
  });

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 bg-[#FDFAFA] min-h-screen">
      <PFClaimCards />
      <PFClaimDropdown 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />
      <PFClaimTable data={filteredClaims} />
    </div>
  );
};

export default PFClaimDashboard;