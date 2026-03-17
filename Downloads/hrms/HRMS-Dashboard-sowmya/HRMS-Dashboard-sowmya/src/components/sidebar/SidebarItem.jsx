import React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import SidebarSubItem from "./SidebarSubItem";

const SidebarItem = ({
  item,
  isExpanded = false,  // Set default value
  onToggle,
  onModuleChange,
  activeModule,
  isCollapsed = false,  // Set default value
  isHovered = false    // Set default value
}) => {
  const { id, label, icon: Icon, subItems = [] } = item;
  const hasSubItems = Array.isArray(subItems) && subItems.length > 0;
  const isParentActive = activeModule === id || (Array.isArray(subItems) && subItems.some((s) => s && s.id === activeModule));
    
  // Show tooltip when sidebar is collapsed and item is hovered
  const showTooltip = isCollapsed && isHovered;

  const handleItemClick = () => {
    console.log('Sidebar item clicked:', { id, label, hasSubItems, isExpanded });
    if (hasSubItems) {
      // If not already expanded, expand and select the first sub-item
      if (!isExpanded) {
        onToggle(id);
        // Find the first sub-item and navigate to it
        const firstSubItem = subItems[0];
        if (firstSubItem) {
          // Use the path for navigation to ensure the correct page loads
          onModuleChange(firstSubItem.path || firstSubItem.id);
        }
      } else {
        // If already expanded, just toggle the expansion
        onToggle(id);
      }
    } else {
      // For items without sub-items, just navigate to them
      onModuleChange(item.path || id);
    }
  };

  return (
    <div className="space-y-1 relative group">
      {/* Parent Item */}
      <div className="relative">
        <button
          onClick={handleItemClick}
          className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all duration-200 ${
            isParentActive && !hasSubItems
              ? "neu-primary text-white"
              : "neu-button text-[#333333] "
          } ${isCollapsed ? 'justify-center p-3' : 'px-4'}`}
        >
          <div className={`flex items-center ${isCollapsed ? 'mx-auto' : ''}`}>
            <Icon size={20} className={isCollapsed ? '' : 'mr-3'} />
            {!isCollapsed && <span className="font-medium">{label}</span>}
          </div>
          {hasSubItems && !isCollapsed && (
            isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />
          )}
        </button>
        
        {/* Tooltip for collapsed items */}
        {showTooltip && (
          <div className="absolute left-full ml-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-md z-50 whitespace-nowrap">
            {label}
            {/* <div className="absolute top-1/2 right-full w-2 h-2 -mt-1 bg-gray-800 transform rotate-45"></div> */}
          </div>
        )}
      </div>

      {/* Submenu */}
      {hasSubItems && (isExpanded || (isCollapsed === true && isHovered === true)) && (
        <div 
          className={`space-y-1 neu-card-inset p-2 rounded-xl transition-all duration-200 ${
            isCollapsed 
              ? 'absolute left-full top-0 ml-2 min-w-[200px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200' 
              : 'ml-4 mt-1 transition-none'
          }`}
        >
          {subItems.map((subItem) => (
            <SidebarSubItem
              key={subItem.id}
              subItem={subItem}
              activeModule={activeModule}
              onModuleChange={onModuleChange}
              isCollapsed={isCollapsed}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
