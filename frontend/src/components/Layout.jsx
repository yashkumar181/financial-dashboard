import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F4F7FA] dark:bg-[#121212] font-sans overflow-hidden transition-colors duration-300">
      
      {/* SIDEBAR */}
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        <Header setIsMobileMenuOpen={setIsMobileMenuOpen} />
        
        {/* PAGE CONTENT INJECTED HERE */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default Layout;