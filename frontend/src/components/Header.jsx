import React from 'react';
import { Bell, Search } from 'lucide-react';
import { useFinance } from '../context/FinanceContext';

const Header = () => {
  const { role, setRole } = useFinance();

  return (
    <header className="h-16 md:h-20 bg-white flex items-center justify-between px-4 md:px-10 border-b border-gray-100 shrink-0">
      <div className="flex items-center space-x-4 md:space-x-8 flex-1">
        
        <div className="hidden sm:block relative w-full max-w-sm">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search ledgers..." 
            className="w-full pl-9 pr-4 py-2 bg-[#F4F7FA] rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-blue-100" 
          />
        </div>
        
        <div className="hidden md:flex space-x-6">
          <button 
            onClick={() => setRole('Admin')}
            className={`font-medium text-sm pb-7 pt-7 transition-colors ${role === 'Admin' ? 'text-[#0A3D8B] border-b-2 border-[#0A3D8B]' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Admin
          </button>
          <button 
            onClick={() => setRole('Viewer')}
            className={`font-medium text-sm pb-7 pt-7 transition-colors ${role === 'Viewer' ? 'text-[#0A3D8B] border-b-2 border-[#0A3D8B]' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Viewer
          </button>
        </div>
      </div>
      
      <div className="flex items-center space-x-4 md:space-x-6 shrink-0">
        <button className="text-gray-400 hover:text-gray-600 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        <div className="flex items-center space-x-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-[#0F172A]">Alex Stratton</p>
            <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">
              {role === 'Admin' ? 'Senior Auditor' : 'Guest Viewer'}
            </p>
          </div>
          <img src="https://ui-avatars.com/api/?name=Alex+Stratton&background=0F172A&color=fff" alt="Profile" className="w-8 h-8 md:w-10 md:h-10 rounded-lg" />
        </div>
      </div>
    </header>
  );
};

export default Header;