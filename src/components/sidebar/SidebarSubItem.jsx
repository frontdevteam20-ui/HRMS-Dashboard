import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarSubItem = ({ subItem, activeModule, onModuleChange, isCollapsed }) => {
  const { id, label, icon: Icon, path } = subItem;
  const isActive = activeModule === id;
  const navigate = useNavigate();
  

  const handleClick = () => {
    onModuleChange(id);
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="relative group">
      <div className="relative">
        {/* <div className="absolute left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gray-400"></div> */}
        <button
          onClick={handleClick}
          className={`w-full flex items-center p-3 rounded-xl transition-colors duration-200 ${
            isActive
              ? "bg-[#CA2030] text-[#FFF]"
              : "text-gray-600 hover:bg-gray-50"
          } ${isCollapsed ? 'justify-center' : 'pl-8'}`}
        >
          <Icon size={18} className={isActive ? 'text-white' : (isCollapsed ? 'text-gray-500' : 'text-gray-600')} />
          {!isCollapsed && <span className="ml-3 text-sm">{label}</span>}
        </button>
      </div>
      
      {/* Tooltip for collapsed items */}
      {isCollapsed && (
        <div className="absolute left-full top-1/2 ml-2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded z-50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none -translate-y-1/2">
          {label}
          <div className="absolute top-1/2 right-full w-1.5 h-1.5 -mt-0.5 bg-gray-800 transform rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default SidebarSubItem;
