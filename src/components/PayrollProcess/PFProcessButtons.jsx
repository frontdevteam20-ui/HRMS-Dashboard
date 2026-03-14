import React from 'react';

const PFProcessButtons = () => {
  return (
    <div className="flex justify-end space-x-4 mt-6">
      <button
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Save Draft
      </button>
      <button
        className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
      >
        Approve Payroll
      </button>
      <button
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Process Payment
      </button>
      <button
        className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
      >
        Hold
      </button>
    </div>
  );
};

export default PFProcessButtons;