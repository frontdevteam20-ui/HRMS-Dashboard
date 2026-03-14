// In src/components/PayrollClaim/ClaimTable.jsx
import React, { useState, useMemo } from 'react';
import ClaimDropdown from './ClaimDropdown';
import { defaultClaims } from './ClaimData';

const ClaimTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [dateRange, setDateRange] = useState('all');

  // Filter the rows based on search term and department
  const filteredRows = useMemo(() => {
    return defaultClaims.filter(row => {
      const matchesSearch = 
        !searchTerm || 
        (row.name && row.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (row.id && row.id.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesDept = 
        selectedDepartment === 'all' || 
        row.dept === selectedDepartment;

      return matchesSearch && matchesDept;
    });
  }, [searchTerm, selectedDepartment, dateRange]);

  // Get unique departments for the dropdown
  const departments = useMemo(() => {
    const depts = new Set(defaultClaims.map(row => row.dept));
    return ['all', ...depts].filter(Boolean);
  }, []);

  return (
    <>
      <ClaimDropdown 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        departments={departments}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />
      <div className="neu-card rounded-2xl sm:rounded-3xl overflow-hidden mt-4">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-sm">
            {/* Table headers */}
            <thead>
              <tr className="bg-[#E4F1FA]">
                <th className="py-3 px-4 text-left font-semibold text-[#333333] border border-[#D2E3F0]">
                  Employee ID
                </th>
                <th className="py-3 px-4 text-left font-semibold text-[#333333] border border-[#D2E3F0]">
                  Name
                </th>
                <th className="py-3 px-4 text-left font-semibold text-[#333333] border border-[#D2E3F0]">
                  Department
                </th>
                <th className="py-3 px-4 text-left font-semibold text-[#333333] border border-[#D2E3F0]">
                  UAN
                </th>
                <th className="py-3 px-4 text-left font-semibold text-[#333333] border border-[#D2E3F0]">
                  PF Employee
                </th>
                <th className="py-3 px-4 text-left font-semibold text-[#333333] border border-[#D2E3F0]">
                  PF Employer
                </th>
                <th className="py-3 px-4 text-left font-semibold text-[#333333] border border-[#D2E3F0]">
                  Total PF
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, index) => (
                <tr
                  key={row.id}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="py-2 px-4 border border-[#D2E3F0] text-[#333333]">
                    {row.id}
                  </td>
                  <td className="py-2 px-4 border border-[#D2E3F0] text-[#333333]">
                    {row.name}
                  </td>
                  <td className="py-2 px-4 border border-[#D2E3F0] text-[#333333]">
                    {row.dept}
                  </td>
                  <td className="py-2 px-4 border border-[#D2E3F0] text-[#333333]">
                    {row.uan}
                  </td>
                  <td className="py-2 px-4 border border-[#D2E3F0] text-[#333333]">
                    ₹{row.pfEmp}
                  </td>
                  <td className="py-2 px-4 border border-[#D2E3F0] text-[#333333]">
                    ₹{row.pfEmployer}
                  </td>
                  <td className="py-2 px-4 border border-[#D2E3F0] text-[#333333] font-medium">
                    ₹{row.totalPf}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ClaimTable;