import React from 'react';

const PFClaimTable = () => {
  const rows = [
    {
      id: 'EMP001',
      name: 'Rajesh Kumar',
      appliedDate: '2025-10-05',
      amount: '₹48,500',
      reason: 'Medical Emergency',
      status: 'Completed',
    },
    {
      id: 'EMP002',
      name: 'Priya Sharma',
      appliedDate: '2025-09-28',
      amount: '₹36,200',
      reason: 'Home Renovation',
      status: 'Pending',
    },
    {
      id: 'EMP003',
      name: 'Amit Patel',
      appliedDate: '2025-11-02',
      amount: '₹25,000',
      reason: 'Education Fees',
      status: 'Rejected',
    },
    {
      id: 'EMP004',
      name: 'Sneha Reddy',
      appliedDate: '2025-10-22',
      amount: '₹58,000',
      reason: 'Marriage Expenses',
      status: 'Completed',
    },
    {
      id: 'EMP005',
      name: 'Vikram Singh',
      appliedDate: '2025-10-30',
      amount: '₹42,750',
      reason: 'House Purchase',
      status: 'Completed',
    },
    { 
      id: 'EMP006',
      name: 'Jones',
      appliedDate: '2025-10-30',
      amount: '₹42,750',
      reason: 'House Purchase',
      status: 'Rejected',
    },
        {
          id: 'EMP007',
          name: 'John Doe',
          appliedDate: '2025-10-30',
          amount: '₹42,750',
          reason: 'House Purchase',
          status: 'Completed',
        },
        {
          id: 'EMP008',
          name: 'John',
          appliedDate: '2025-10-30',
          amount: '₹42,750',
          reason: 'House Purchase',
          status: 'Pending',
        },
        {
          id: 'EMP009',
          name: 'John',
          appliedDate: '2025-10-30',
          amount: '₹42,750',
          reason: 'House Purchase',
          status: 'Completed',
        },
        {
          id: 'EMP010',
          name: 'Singh',
          appliedDate: '2025-10-30',
          amount: '₹42,750',
          reason: 'House Purchase',
          status: 'Rejected',
        }
  ];

  const getStatusClasses = (status) => {
    if (status === 'Completed') {
      return 'bg-[#E5F9EA] text-[#1F7A2E] border border-[#26A541]';
    }
    if (status === 'Pending') {
      return 'bg-[#FFF7E5] text-[#B37400] border border-[#FFC107]';
    }
    if (status === 'Rejected') {
      return 'bg-[#FDE7E9] text-[#B3261E] border border-[#F44336]';
    }
    return 'bg-gray-100 text-gray-700 border border-gray-300';
  };

  return (
    <div className="neu-card rounded-2xl sm:rounded-3xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-sm">
          {/* Header */}
          <thead>
            <tr className="bg-[#F4F9FD]">
              <th className="py-2 px-4 text-left font-medium text-[#333333] border border-[#D2E3F0]">
                Employee ID
              </th>
              <th className="py-2 px-4 text-left font-medium text-[#333333] border border-[#D2E3F0]">
                Name
              </th>
              <th className="py-2 px-4 text-left font-medium text-[#333333] border border-[#D2E3F0]">
                Applied Date
              </th>
              <th className="py-2 px-4 text-left font-medium text-[#333333] border border-[#D2E3F0]">
                Claim Amount
              </th>
              <th className="py-2 px-4 text-left font-medium text-[#333333] border border-[#D2E3F0]">
                Reason
              </th>
              <th className="py-2 px-4 text-left font-medium text-[#333333] border border-[#D2E3F0]">
                Status
              </th>
              <th className="py-2 px-4 text-center font-medium text-[#333333] border border-[#D2E3F0]">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.id}
                className={index % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#FDFDFD]'}
              >
                <td className="py-2 px-4 border border-[#D2E3F0] text-[#333333]">
                  {row.id}
                </td>
                <td className="py-2 px-4 border border-[#D2E3F0] text-[#333333]">
                  {row.name}
                </td>
                <td className="py-2 px-4 border border-[#D2E3F0] text-[#333333]">
                  {row.appliedDate}
                </td>
                <td className="py-2 px-4 border border-[#D2E3F0] text-[#333333]">
                  {row.amount}
                </td>
                <td className="py-2 px-4 border border-[#D2E3F0] text-[#333333]">
                  {row.reason}
                </td>
                <td className="py-2 px-4 border border-[#D2E3F0]">
                  <span
                    className={
                      'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ' +
                      getStatusClasses(row.status)
                    }
                  >
                    {row.status}
                  </span>
                </td>
                <td className="py-2 px-4 border border-[#D2E3F0]">
                  <div className="flex items-center justify-center space-x-3 text-[#555555]">
                    <button
                      type="button"
                      className="hover:text-[#CA2030]"
                      title="Edit"
                    >
                      ✏️
                    </button>
                    <button
                      type="button"
                      className="hover:text-[#CA2030]"
                      title="View"
                    >
                      👁️
                    </button>
                    <button
                      type="button"
                      className="hover:text-[#CA2030]"
                      title="Delete"
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PFClaimTable;