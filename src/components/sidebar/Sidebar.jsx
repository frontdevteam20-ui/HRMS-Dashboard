import React, { useState, useEffect } from "react";
import { navigationItems, getFilteredNavigation } from "./navigationData";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import { IoIosMenu } from 'react-icons/io';

const Sidebar = ({ activeModule, onModuleChange }) => {
  const [expandedItems, setExpandedItems] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Get user level and filter navigation accordingly
  const userLevel = localStorage.getItem('userLevel') || '1'; // Default to admin level
  const filteredNavigation = getFilteredNavigation(userLevel);

  // Auto-expand parent when a sub-item is active
  useEffect(() => {
    const findParentId = () => {
      for (const item of filteredNavigation) {
        if (item.subItems?.some(subItem => subItem.id === activeModule)) {
          return item.id;
        }
      }
      return null;
    };

    const parentId = findParentId();
    if (parentId && !expandedItems.includes(parentId)) {
      setExpandedItems(prev => [...prev, parentId]);
    }
  }, [activeModule, filteredNavigation]);

  const toggleExpanded = (id) => {
    setExpandedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id) // Collapse if already expanded
        : [...prev, id] // Expand if collapsed
    );
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    // Close all expanded items when collapsing
    if (!isCollapsed) {
      setExpandedItems([]);
    }
  };

  // Handle hover state for better UX
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className={`
        h-screen flex flex-col neu-sidebar overflow-hidden
        ${isCollapsed ? 'w-20' : 'w-80'}
        transition-all duration-300 ease-in-out
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-between p-3">
        {!isCollapsed && <SidebarLogo />}
        <button
          onClick={toggleSidebar}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <IoIosMenu size={24} className={isCollapsed ? '' : 'transform rotate-90'} />
        </button>
      </div>
      
      <nav className={`flex-1 overflow-y-auto px-2 pb-6 space-y-2 ${isCollapsed ? 'px-2' : 'px-4'}`}>
        {filteredNavigation.map((item) => {
          // When collapsed, only render the main icon without any submenu functionality
          if (isCollapsed) {
            return (
              <div 
                key={item.id} 
                className="flex justify-center p-3"
                onClick={() => !isCollapsed && onModuleChange(item.id)}
              >
                <item.icon size={20} className="text-gray-600" />
              </div>
            );
          }
          
          // When expanded, render the full item with submenu functionality
          return (
            <div key={item.id} className="w-full">
              <SidebarItem
                item={item}
                isExpanded={expandedItems.includes(item.id)}
                onToggle={toggleExpanded}
                activeModule={activeModule}
                onModuleChange={onModuleChange}
                isCollapsed={isCollapsed}
                isHovered={isHovered}
              />
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;