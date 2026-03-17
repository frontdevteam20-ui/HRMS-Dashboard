import React, { useState } from 'react';
import { Calendar, ChevronDown, Banknote } from 'lucide-react';
import EmployeeDetailsSection from './EmployeeDetailsSection';
import SalaryStructureSection from './SalaryStructureSection';
import PFProcessButtons from './PfProcessButtons';

const NewPayrollProcess = () => {
  const [formData, setFormData] = useState({
    // Payroll Processing Header
    payrollMonth: 'November 2024',
    payPeriodFrom: '2024-11-01',
    payPeriodTo: '2024-11-30',
    dateOfPayment: '2024-12-05',
    paidDays: '30',
    totalDays: '30',
    lopDays: '0',
    paymentMethod: 'Bank Transfer',
    processedBy: 'HR Admin (Auto)',
    
    // Employee Details
    employeeId: 'EMP001',
    employeeName: 'Sarah Johnson',
    designation: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'New York',
    dateOfJoining: '2022-03-15',
    pan: 'ABCDE1234F',
    uan: '123456789012',
    bankName: 'Chase Bank',
    accountNumber: '****5678'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-6 space-y-6">
      {/* Payroll Processing Header */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-500">PAYROLL PROCESSING HEADER</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Payroll Month */}
          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-500">Payroll Month</label>
            <div className="relative">
              <select
                name="payrollMonth"
                value={formData.payrollMonth}
                onChange={handleChange}
                className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>November 2024</option>
              </select>
              <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Pay Period From */}
          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-500">Pay Period From</label>
            <div className="relative">
              <input
                type="date"
                name="payPeriodFrom"
                value={formData.payPeriodFrom}
                onChange={handleChange}
                className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <Calendar className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Pay Period To */}
          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-500">Pay Period To</label>
            <div className="relative">
              <input
                type="date"
                name="payPeriodTo"
                value={formData.payPeriodTo}
                onChange={handleChange}
                className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <Calendar className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Date of Payment */}
          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-500">Date of Payment</label>
            <div className="relative">
              <input
                type="date"
                name="dateOfPayment"
                value={formData.dateOfPayment}
                onChange={handleChange}
                className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <Calendar className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Paid Days / Total Days */}
          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-500">Paid Days / Total Days</label>
            <div className="flex">
              <input
                type="text"
                name="paidDays"
                value={formData.paidDays}
                onChange={handleChange}
                className="w-1/2 p-2 text-sm border border-r-0 border-gray-300 rounded-l-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="flex items-center justify-center w-1/2 p-2 text-sm border border-l-0 border-gray-300 bg-gray-50 rounded-r-md">
                / {formData.totalDays}
              </div>
            </div>
          </div>

          {/* LOP Days */}
          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-500">LOP Days</label>
            <input
              type="text"
              name="lopDays"
              value={formData.lopDays}
              onChange={handleChange}
              className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Payment Method */}
          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-500">Payment Method</label>
            <div className="relative">
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Bank Transfer</option>
              </select>
              <Banknote className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Processed By */}
          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-500">Processed By</label>
            <input
              type="text"
              name="processedBy"
              value={formData.processedBy}
              onChange={handleChange}
              className="w-full p-2 text-sm border border-gray-300 rounded-md bg-gray-50 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Employee Details Section */}
      <EmployeeDetailsSection formData={formData} handleChange={handleChange} />
      
      {/* Salary Structure Section */}
      <SalaryStructureSection />
      
      {/* Process Buttons */}
      <PFProcessButtons />
    </div>
  );
};

export default NewPayrollProcess;