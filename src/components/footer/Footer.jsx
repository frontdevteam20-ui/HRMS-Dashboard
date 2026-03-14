import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-4 px-6 shadow-inner">
      <div className="container mx-auto  flex-col md:flex-row justify-between items-center d-block">
        <div className="text-sm text-gray-600 mb-2 md:mb-0 text-center">
          © {currentYear} Powdered by Lion. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;