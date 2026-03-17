import React, { useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import StatsCards from './StatsCards';
import SalTable from "./SalTable";
import SalDropdown from './SalDropdown';
import { defaultEmployees } from './SalaryTableData';

const SalaryOverview = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = React.useState('');
    const [selectedDepartment, setSelectedDepartment] = React.useState('All Departments');
    const [selectedStatus, setSelectedStatus] = React.useState('all');
    const [dateRange, setDateRange] = React.useState('all');
    
    // Extract unique departments from your data
    const departments = useMemo(() => {
        const depts = new Set(['All Departments']);
        defaultEmployees.forEach(emp => emp.department && depts.add(emp.department));
        return Array.from(depts);
    }, [defaultEmployees]);
    return (
        <div className="p-6 bg-[#F5F7FA] min-h-screen">
            <div className="flex items-center gap-4 mb-6">
                <button 
                    onClick={() => navigate(-1)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                >
                    <ArrowLeft size={20} className="text-[#333333]" />
                </button>
                <h1 className="text-3xl font-bold text-[#333333] mb-2">Salaries</h1>
            </div>
            
            <StatsCards />
            
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <SalDropdown 
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedDepartment={selectedDepartment}
                    setSelectedDepartment={setSelectedDepartment}
                    selectedStatus={selectedStatus}
                    setSelectedStatus={setSelectedStatus}
                    dateRange={dateRange}
                    setDateRange={setDateRange}
                    departments={departments}
                />
            </div>
            
          <SalTable 
            employees={defaultEmployees}
            searchTerm={searchTerm}
            selectedDepartment={selectedDepartment}
            selectedStatus={selectedStatus}
            dateRange={dateRange}
          />
        </div>
    );
};

export default SalaryOverview;