import React from "react";

export const UnassignedEmployees = ({ unassignedEmployees, handleDragStart }) => {
  return (
    <div className="neu-card p-4 sm:p-6 rounded-2xl">
      <h3 className="text-base sm:text-lg font-bold text-[#333333] mb-3 sm:mb-4">Unassigned Employees</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
        {unassignedEmployees.map((employee) => (
          <div
            key={employee.id}
            draggable
            onDragStart={(e) => handleDragStart(e, employee)}
            className="neu-small p-3 sm:p-4 rounded-xl cursor-move hover:shadow-lg transition-all group"
          >
            <div className="flex items-center">
              <div className="neu-small w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-2 sm:mr-3 bg-gradient-to-br from-[#CA2030] to-[#d4471f] text-[#2C318E] font-semibold text-xs sm:text-sm">
                {employee.avatar}
              </div>

              <div className="flex-1 min-w-0">
                <div className="font-medium text-[#333333] group-hover:text-[#CA2030] transition-colors text-sm sm:text-base truncate">
                  {employee.name}
                </div>
                <div className="text-[#666666] text-xs sm:text-sm truncate">{employee.department}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
