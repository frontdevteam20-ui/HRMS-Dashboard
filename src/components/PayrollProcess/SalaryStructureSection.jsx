import React, { useState } from 'react';

const SalaryStructureSection = () => {
  const [earnings, setEarnings] = useState([
    { id: 1, head: 'Basic Salary', amount: 50000, calculated: '' },
    { id: 2, head: 'HRA', amount: 25000, calculated: 'Auto (50%)' },
    { id: 3, head: 'Transport Allowance', amount: 3000, calculated: '' },
    { id: 4, head: 'Special Allowance', amount: 7000, calculated: '' },
  ]);

  const [deductions, setDeductions] = useState([
    { id: 1, head: 'Employee PF', amount: 6000, calculated: 'Auto (12%)' },
    { id: 2, head: 'Employee ESIC', amount: 765, calculated: 'Auto (0.75%)' },
    { id: 3, head: 'Professional Tax', amount: 200, calculated: '' },
    { id: 4, head: 'Income Tax', amount: 8500, calculated: '' },
  ]);

  const totalEarnings = earnings.reduce((sum, item) => sum + item.amount, 0);
  const totalDeductions = deductions.reduce((sum, item) => sum + item.amount, 0);
  const netPay = totalEarnings - totalDeductions;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount).replace('₹', '₹ ');
  };

  const handleAmountChange = (id, value, isEarnings) => {
    const updatedItems = isEarnings ? [...earnings] : [...deductions];
    const itemIndex = updatedItems.findIndex(item => item.id === id);
    updatedItems[itemIndex].amount = parseFloat(value) || 0;
    isEarnings ? setEarnings(updatedItems) : setDeductions(updatedItems);
  };

  const renderTable = (title, items, isEarnings = true) => (
    <div className="border border-gray-200 rounded-md shadow-sm">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
        <h5 className="text-sm font-medium text-gray-800">{title}</h5>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="w-3/5 text-left px-4 py-2 text-xs font-medium text-gray-500 border-r border-gray-200">
                {isEarnings ? 'Salary Head' : 'Deduction Head'}
              </th>
              <th className="w-1/5 text-right px-4 py-2 text-xs font-medium text-gray-500 border-r border-gray-200">
                Amount
              </th>
              <th className="w-1/5 text-center px-4 py-2 text-xs font-medium text-gray-500">
                Calculated
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-700 border-r border-gray-100">
                  {item.head}
                </td>
                <td className="p-0 border-r border-gray-100">
                  <input
                    type="number"
                    value={item.amount}
                    onChange={(e) => handleAmountChange(item.id, e.target.value, isEarnings)}
                    className="w-full px-3 py-1 text-right text-sm border-0 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  />
                </td>
                <td className="text-center text-xs text-gray-500">
                  {item.calculated}
                </td>
              </tr>
            ))}
            <tr className="bg-gray-50">
              <td className="px-4 py-2 font-medium text-sm text-gray-800 border-t border-gray-200">
                Total {isEarnings ? 'Earnings' : 'Deductions'}
              </td>
              <td className="px-4 py-2 text-right font-medium text-sm text-gray-800 border-t border-gray-200">
                {formatCurrency(isEarnings ? totalEarnings : totalDeductions)}
              </td>
              <td className="border-t border-gray-200"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="w-full md:w-1/2">
          {renderTable('Earnings', earnings, true)}
        </div>
        <div className="w-full md:w-1/2">
          {renderTable('Deductions', deductions, false)}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded p-4">
        <div className="flex justify-end items-center">
          <span className="text-gray-700 font-medium mr-4">Net Pay:</span>
          <span className="text-xl font-semibold text-blue-600">
            {formatCurrency(netPay)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SalaryStructureSection;