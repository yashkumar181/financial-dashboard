import React, { useState, useEffect } from 'react';
import { Bell, Search, Moon, Sun, Menu } from 'lucide-react';
import { useFinance } from '../context/FinanceContext';

const Header = ({ setIsMobileMenuOpen }) => {
  const { role, setRole } = useFinance();
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <header className="h-16 md:h-20 bg-white dark:bg-[#1E1E1E] flex items-center justify-between px-4 md:px-10 border-b border-gray-100 dark:border-white/5 shrink-0 transition-colors">
      <div className="flex items-center space-x-4 md:space-x-8 flex-1">
        
        <button 
          onClick={() => setIsMobileMenuOpen(true)} 
          className="md:hidden p-2 -ml-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="hidden sm:block relative w-full max-w-sm">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
          <input 
            type="text" 
            placeholder="Search ledgers..." 
            className="w-full pl-9 pr-4 py-2 bg-[#F4F7FA] dark:bg-[#121212] dark:text-gray-200 dark:border-white/10 dark:border rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-gray-500 transition-colors" 
          />
        </div>
        
        <div className="hidden md:flex space-x-6">
          <button 
            onClick={() => setRole('Admin')}
            className={`font-medium text-sm pb-7 pt-7 transition-colors ${role === 'Admin' ? 'text-[#0A3D8B] dark:text-gray-200 border-b-2 border-[#0A3D8B] dark:border-gray-200' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'}`}
          >
            Admin
          </button>
          <button 
            onClick={() => setRole('Viewer')}
            className={`font-medium text-sm pb-7 pt-7 transition-colors ${role === 'Viewer' ? 'text-[#0A3D8B] dark:text-gray-200 border-b-2 border-[#0A3D8B] dark:border-gray-200' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'}`}
          >
            Viewer
          </button>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 md:space-x-6 shrink-0">
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)} 
          className="text-gray-400 dark:text-gray-400 hover:text-[#0F172A] dark:hover:text-white p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
        >
          {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
        </button>

        <button className="text-gray-400 dark:text-gray-400 hover:text-[#0F172A] dark:hover:text-white relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-all">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-[#1E1E1E]"></span>
        </button>
        
        <div className="flex items-center space-x-3 pl-2 border-l border-gray-100 dark:border-white/10">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-[#0F172A] dark:text-gray-200">Alex Stratton</p>
            <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 tracking-wider uppercase">
              {role === 'Admin' ? 'Senior Auditor' : 'Guest Viewer'}
            </p>
          </div>
          <img src="https://ui-avatars.com/api/?name=Alex+Stratton&background=1E1E1E&color=fff" alt="Profile" className="w-8 h-8 md:w-10 md:h-10 rounded-lg shadow-sm border border-gray-200 dark:border-white/10" />
        </div>
      </div>
    </header>
  );
};

export default Header;