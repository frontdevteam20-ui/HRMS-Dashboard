import React from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { payrollData } from './payrollData';

const PayrollTable = () => {
  const getStatusClasses = (status) => {
    if (status === 'Processed') {
      return 'bg-green-100 text-green-800 border border-green-200';
    } else if (status === 'Draft') {
      return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
    } else {
      return 'bg-red-100 text-red-800 border border-red-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          {/* Section Headers */}
          <thead className="bg-[#F0F7FF]">
            <tr className="border-b-2 border-[#D1E3F8]">
              <th className="p-4 text-left text-sm font-semibold text-[#1E40AF] border-r border-[#D1E3F8]">
                <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
              </th>
              <th colSpan="3" className="p-3 text-left text-sm font-semibold text-[#1E40AF] border-r border-[#D1E3F8]">
                Employee Details
              </th>
              <th colSpan="3" className="p-3 text-left text-sm font-semibold text-[#1E40AF] border-r border-[#D1E3F8]">
                Bank Details
              </th>
              <th colSpan="2" className="p-3 text-left text-sm font-semibold text-[#1E40AF] border-r border-[#D1E3F8]">
                Payment Details
              </th>
              <th className="p-3 text-left text-sm font-semibold text-[#1E40AF] border-r border-[#D1E3F8]">
                Status
              </th>
              <th className="p-3 text-left text-sm font-semibold text-[#1E40AF]">
                Actions
              </th>
            </tr>
            
            {/* Column Headers */}
            <tr className="bg-white border-b border-[#E5E7EB]">
              <th className="p-4 border-r border-[#E5E7EB]"></th>
              <th className="p-3 text-left text-sm font-medium text-gray-500 border-r border-[#E5E7EB]">Employee ID</th>
              <th className="p-3 text-left text-sm font-medium text-gray-500 border-r border-[#E5E7EB]">Name</th>
              <th className="p-3 text-left text-sm font-medium text-gray-500 border-r border-[#E5E7EB]">Department</th>
              <th className="p-3 text-left text-sm font-medium text-gray-500 border-r border-[#E5E7EB]">Bank Name</th>
              <th className="p-3 text-left text-sm font-medium text-gray-500 border-r border-[#E5E7EB]">Account Number</th>
              <th className="p-3 text-left text-sm font-medium text-gray-500 border-r border-[#E5E7EB]">IFSC Code</th>
              <th className="p-3 text-left text-sm font-medium text-gray-500 border-r border-[#E5E7EB]">Credit Amount</th>
              <th className="p-3 text-left text-sm font-medium text-gray-500 border-r border-[#E5E7EB]">Status</th>
              <th className="p-3 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          
          <tbody>
            {payrollData.map((row, index) => (
              <tr key={row.id} className="border-b border-[#E5E7EB] hover:bg-gray-50">
                <td className="p-4 border-r border-[#E5E7EB]">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
                </td>
                <td className="p-3 text-sm text-gray-800 border-r border-[#E5E7EB]">{row.id}</td>
                <td className="p-3 text-sm text-gray-800 border-r border-[#E5E7EB]">{row.name}</td>
                <td className="p-3 text-sm text-gray-800 border-r border-[#E5E7EB]">{row.department}</td>
                <td className="p-3 text-sm text-gray-800 border-r border-[#E5E7EB]">{row.bankName}</td>
                <td className="p-3 text-sm text-gray-800 border-r border-[#E5E7EB]">{row.accountNumber}</td>
                <td className="p-3 text-sm text-gray-800 border-r border-[#E5E7EB]">{row.ifscCode}</td>
                <td className="p-3 text-sm text-gray-800 border-r border-[#E5E7EB]">{row.creditAmount}</td>
                <td className="p-3 border-r border-[#E5E7EB]">
                  <span className={`px-3 py-1 text-xs rounded-full ${getStatusClasses(row.status)}`}>
                    {row.status}
                  </span>
                </td>
                <td className="p-3">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FiEdit2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayrollTable;