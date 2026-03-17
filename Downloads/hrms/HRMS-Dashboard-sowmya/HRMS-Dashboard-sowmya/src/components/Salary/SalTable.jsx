import React from 'react';

const SalTable = ({ employees = [] }) => {
  // Calculate totals
  const totals = employees.reduce((acc, emp) => ({
    basic: (acc.basic || 0) + (emp.basic || 0),
    hra: (acc.hra || 0) + (emp.hra || 0),
    conveyance: (acc.conveyance || 0) + (emp.conveyance || 0),
    medical: (acc.medical || 0) + (emp.medical || 0),
    other: (acc.other || 0) + (emp.other || 0),
    gross: (acc.gross || 0) + (emp.gross || 0),
    pf: (acc.pf || 0) + (emp.pf || 0),
    pt: (acc.pt || 0) + (emp.pt || 0),
    esi: (acc.esi || 0) + (emp.esi || 0),
    totalDeduction: (acc.totalDeduction || 0) + (emp.totalDeduction || 0),
    netSalary: (acc.netSalary || 0) + (emp.netSalary || 0)
  }), {});

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-700">
        {/* Table Headers */}
        <thead>
          <tr className="bg-[#E8F4FF]" style={{border: '1px solid #BDBDDC' , textAlign: 'center' , fontSize: '20px'}}>
            <th colSpan="4" className="px-4 py-4 border border-gray-200">Employee Details</th>
            <th colSpan="4" className="px-4 py-4 border border-gray-200 bg-[#E4F1FF]">Earnings</th>
            <th colSpan="4" className="px-4 py-4 border border-gray-200 bg-[#FEF3F2]">Deductions</th>
            <th colSpan="2" className="px-4 py-4 border border-gray-200">Salary Details</th>
          </tr>
          <tr className="bg-gray-50">
            <th className="px-4 py-2 border border-gray-200">Emp ID</th>
            <th className="px-4 py-2 border border-gray-200">Name</th>
            <th className="px-4 py-2 border border-gray-200">Designation</th>
            <th className="px-4 py-2 border border-gray-200">Department</th>
            
            <th className="px-4 py-2 border border-gray-200 bg-[#E4F1FF]">Basic</th>
            <th className="px-4 py-2 border border-gray-200 bg-[#E4F1FF]">HRA</th>
            <th className="px-4 py-2 border border-gray-200 bg-[#E4F1FF]">Conveyance</th>
            <th className="px-4 py-2 border border-gray-200 bg-[#E4F1FF]">Medical</th>
            
            <th className="px-4 py-2 border border-gray-200 bg-[#FEF3F2]">PF</th>
            <th className="px-4 py-2 border border-gray-200 bg-[#FEF3F2]">PT</th>
            <th className="px-4 py-2 border border-gray-200 bg-[#FEF3F2]">ESI</th>
            <th className="px-4 py-2 border border-gray-200 bg-[#FEF3F2]">Others</th>
            
            <th className="px-4 py-2 border border-gray-200">Gross Pay</th>
            <th className="px-4 py-2 border border-gray-200">Net Pay</th>
          </tr>
        </thead>
        
        {/* Table Body */}
        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-4 py-3 border border-gray-200">{emp.empId}</td>
              <td className="px-4 py-3 border border-gray-200 font-medium">{emp.name}</td>
              <td className="px-4 py-3 border border-gray-200">{emp.designation}</td>
              <td className="px-4 py-3 border border-gray-200">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  emp.department === 'IT' ? 'bg-blue-100 text-blue-800' :
                  emp.department === 'HR' ? 'bg-green-100 text-green-800' :
                  emp.department === 'Design' ? 'bg-purple-100 text-purple-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {emp.department}
                </span>
              </td>
              
              <td className="px-4 py-3 border border-gray-200 bg-[#F9FCFF]">₹{emp.basic?.toLocaleString()}</td>
              <td className="px-4 py-3 border border-gray-200 bg-[#F9FCFF]">₹{emp.hra?.toLocaleString()}</td>
              <td className="px-4 py-3 border border-gray-200 bg-[#F9FCFF]">₹{emp.conveyance?.toLocaleString()}</td>
              <td className="px-4 py-3 border border-gray-200 bg-[#F9FCFF]">₹{emp.medical?.toLocaleString()}</td>
              
              <td className="px-4 py-3 border border-gray-200 bg-[#FFF9F9]">₹{emp.pf?.toLocaleString()}</td>
              <td className="px-4 py-3 border border-gray-200 bg-[#FFF9F9]">₹{emp.pt?.toLocaleString()}</td>
              <td className="px-4 py-3 border border-gray-200 bg-[#FFF9F9]">₹{emp.esi?.toLocaleString()}</td>
              <td className="px-4 py-3 border border-gray-200 bg-[#FFF9F9]">₹0</td>
              
              <td className="px-4 py-3 border border-gray-200 font-medium">₹{emp.gross?.toLocaleString()}</td>
              <td className="px-4 py-3 border border-gray-200 font-medium">₹{emp.netSalary?.toLocaleString()}</td>
            </tr>
          ))}
          
          {/* Total Row */}
          <tr className="bg-gray-50 font-medium">
            <td colSpan="4" className="px-4 py-3 border border-gray-200 text-right">Total</td>
            <td className="px-4 py-3 border border-gray-200 bg-[#E4F1FF]">₹{totals.basic?.toLocaleString()}</td>
            <td className="px-4 py-3 border border-gray-200 bg-[#E4F1FF]">₹{totals.hra?.toLocaleString()}</td>
            <td className="px-4 py-3 border border-gray-200 bg-[#E4F1FF]">₹{totals.conveyance?.toLocaleString()}</td>
            <td className="px-4 py-3 border border-gray-200 bg-[#E4F1FF]">₹{totals.medical?.toLocaleString()}</td>
            <td className="px-4 py-3 border border-gray-200 bg-[#FEF3F2]">₹{totals.pf?.toLocaleString()}</td>
            <td className="px-4 py-3 border border-gray-200 bg-[#FEF3F2]">₹{totals.pt?.toLocaleString()}</td>
            <td className="px-4 py-3 border border-gray-200 bg-[#FEF3F2]">₹{totals.esi?.toLocaleString()}</td>
            <td className="px-4 py-3 border border-gray-200 bg-[#FEF3F2]">₹0</td>
            <td className="px-4 py-3 border border-gray-200 bg-[#F0F0F0]">₹{totals.gross?.toLocaleString()}</td>
            <td className="px-4 py-3 border border-gray-200 bg-[#F0F0F0]">₹{totals.netSalary?.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      {/* Summary Section */}
      <div className="flex justify-between mt-6">
        <div className="flex-1 mr-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-500">Total Earnings</span>
              <span className="text-sm font-medium text-green-600">₹{totals.gross?.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
            </div>
          </div>
        </div>
        <div className="flex-1 ml-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-500">Total Deductions</span>
              <span className="text-sm font-medium text-red-600">₹{totals.totalDeduction?.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full" style={{width: '30%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalTable;