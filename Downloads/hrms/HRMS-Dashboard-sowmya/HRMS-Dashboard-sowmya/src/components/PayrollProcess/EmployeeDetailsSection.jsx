import React from 'react';
import { Calendar } from 'lucide-react';

const EmployeeDetailsSection = ({ formData = {}, handleChange = () => {} }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500">EMPLOYEE DETAILS</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Employee Name */}
        <div className="space-y-1">
          <label className="block text-xs font-medium text-gray-500">Employee Name</label>
          <input
            type="text"
            name="employeeName"
            value={formData.employeeName || ''}
            onChange={handleChange}
            className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Employee ID */}
        <div className="space-y-1">
          <label className="block text-xs font-medium text-gray-500">Employee ID</label>
          <input
            type="text"
            name="employeeId"
            value={formData.employeeId || ''}
            onChange={handleChange}
            className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Department */}
        <div className="space-y-1">
          <label className="block text-xs font-medium text-gray-500">Department</label>
          <input
            type="text"
            name="department"
            value={formData.department || ''}
            onChange={handleChange}
            className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Designation */}
        <div className="space-y-1">
          <label className="block text-xs font-medium text-gray-500">Designation</label>
          <input
            type="text"
            name="designation"
            value={formData.designation || ''}
            onChange={handleChange}
            className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Location */}
        <div className="space-y-1">
          <label className="block text-xs font-medium text-gray-500">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location || ''}
            onChange={handleChange}
            className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Date of Joining */}
        <div className="space-y-1">
          <label className="block text-xs font-medium text-gray-500">Date of Joining</label>
          <div className="relative">
            <input
              type="date"
              name="dateOfJoining"
              value={formData.dateOfJoining || ''}
              onChange={handleChange}
              className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
            <Calendar className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* PAN */}
        <div className="space-y-1">
          <label className="block text-xs font-medium text-gray-500">PAN</label>
          <input
            type="text"
            name="pan"
            value={formData.pan || ''}
            onChange={handleChange}
            className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* UAN */}
        <div className="space-y-1">
          <label className="block text-xs font-medium text-gray-500">UAN</label>
          <input
            type="text"
            name="uan"
            value={formData.uan || ''}
            onChange={handleChange}
            className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Bank Name */}
        <div className="space-y-1">
          <label className="block text-xs font-medium text-gray-500">Bank Name</label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName || ''}
            onChange={handleChange}
            className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Account Number */}
        <div className="space-y-1">
          <label className="block text-xs font-medium text-gray-500">Account Number</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber || ''}
            onChange={handleChange}
            className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailsSection;