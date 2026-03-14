import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { GoPeople } from "react-icons/go";
import { FaRegHandRock } from "react-icons/fa";


const ButtonBottom = ({ viewMode, setViewMode }) => {
      const navigate = useNavigate();

    const handleAddNewPayroll = () => {
        navigate('/add-new-payroll');
    };

    return (
        <div className="flex justify-end gap-2 neu-card-inset rounded-xl p-1">
            <button
                onClick={handleAddNewPayroll}
                className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                    viewMode === 'All Employees'
                        ? 'neu-primary text-white shadow-md'
                        : 'text-[#666666] text-[#fff] bg-[#CA2030]'
                }`}
            >
              <FaPlus className="mr-2" /> Add New Payroll
            </button>
            <button
                onClick={() => setViewMode('PF Claim')}
                className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                    viewMode === 'PF Claim'
                        ? 'neu-primary text-white shadow-md'
                        : 'text-[#666666] text-[#fff] bg-[#CA2030]'
                }`}
            >
               <GoPeople   className="mr-2" /> Process Select
            </button>
            <button
                onClick={() => setViewMode('Process Payroll')}
                className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                    viewMode === 'Process Payroll'
                        ? 'neu-primary text-white shadow-md'
                        : 'text-[#666666] text-[#fff] bg-[#CA2030]'
                }`}
            >
              <FaRegHandRock  className="mr-2" /> Hold Select
            </button>
        </div>
    );
};
export default ButtonBottom;