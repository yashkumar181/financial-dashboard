import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // Updated background to Shyara's #0a0a0a
    <div className="flex h-screen bg-[#F4F7FA] dark:bg-[#0a0a0a] font-sans overflow-hidden transition-colors duration-300">
      
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <div className="flex-1 flex flex-col overflow-hidden w-full">
        <Header setIsMobileMenuOpen={setIsMobileMenuOpen} />
        
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default Layout;