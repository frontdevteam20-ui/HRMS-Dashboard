import React from "react";
import logo from "../../assets/logo.webp";

const SidebarLogo = () => (
  <div className="w-full">
    {/* w-full px-4 py-3 */}
    <div className="w-full flex items-center justify-center">
      <div className="h-auto w-full">
        {/* h-10 w-full max-w-[520px] */}
        <img 
          src={logo} 
          alt="HRMS Logo" 
          className="w-full h-full object-contain" 
        />
      </div>
    </div>
  </div>
);

export default SidebarLogo;
