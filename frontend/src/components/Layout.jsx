import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, Landmark, ReceiptText, PlaySquare, 
  Target, Settings, Plus, HelpCircle, Bell 
} from 'lucide-react';

const Layout = () => {
  // A helper function to apply active styles to our sidebar links
  const navLinkClass = ({ isActive }) => 
    isActive 
      ? "flex items-center px-4 py-3 bg-[#F0F5FF] text-[#0A3D8B] rounded-lg border-l-4 border-[#0A3D8B] font-medium text-xs tracking-wide"
      : "flex items-center px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-lg font-medium text-xs tracking-wide border-l-4 border-transparent";

  return (
    <div className="flex h-screen bg-[#F4F7FA] font-sans overflow-hidden">
      
      {/* SIDEBAR */}
      <div className="w-64 bg-white border-r border-gray-100 flex flex-col justify-between shrink-0">
        <div>
          <div className="h-20 flex items-center px-6">
            <div className="bg-[#0F172A] w-8 h-8 rounded flex items-center justify-center mr-3">
              <div className="w-3 h-3 border-2 border-blue-400 rounded-sm transform rotate-45"></div>
            </div>
            <div>
              <h1 className="text-[#0F172A] font-bold text-sm tracking-wide">Fiscal Clarity</h1>
              <p className="text-gray-400 text-[10px] tracking-widest uppercase">The Precision Curator</p>
            </div>
          </div>

          <nav className="mt-4 space-y-1 px-4">
            <NavLink to="/dashboard" className={navLinkClass}>
              <LayoutDashboard className="w-4 h-4 mr-3" /> DASHBOARD
            </NavLink>
            <NavLink to="/accounts" className={navLinkClass}>
              <Landmark className="w-4 h-4 mr-3" /> ACCOUNTS
            </NavLink>
            <NavLink to="/transactions" className={navLinkClass}>
              <ReceiptText className="w-4 h-4 mr-3" /> TRANSACTIONS
            </NavLink>
            <NavLink to="/subscriptions" className={navLinkClass}>
              <PlaySquare className="w-4 h-4 mr-3" /> SUBSCRIPTIONS
            </NavLink>
            <NavLink to="/goals" className={navLinkClass}>
              <Target className="w-4 h-4 mr-3" /> GOALS
            </NavLink>
            <NavLink to="/settings" className={navLinkClass}>
              <Settings className="w-4 h-4 mr-3" /> SETTINGS
            </NavLink>
          </nav>

          <div className="px-6 mt-8">
            <button className="w-full bg-[#0A3D8B] hover:bg-[#082f6b] text-white flex items-center justify-center py-3 rounded-lg text-xs font-semibold tracking-wide transition-colors">
              <Plus className="w-4 h-4 mr-2" /> NEW TRANSACTION
            </button>
          </div>
        </div>

        <div className="p-6">
          <a href="#" className="flex items-center text-gray-500 hover:text-gray-700 text-xs font-medium tracking-wide">
            <HelpCircle className="w-4 h-4 mr-3" /> HELP CENTER
          </a>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* HEADER */}
        <header className="h-20 bg-white flex items-center justify-between px-10 border-b border-gray-100 shrink-0">
          <div className="flex items-center space-x-8">
            <h2 className="text-[#0F172A] font-semibold text-lg">Architectural Ledger</h2>
            <div className="flex space-x-6">
              <a href="#" className="text-[#0A3D8B] font-medium text-sm border-b-2 border-[#0A3D8B] pb-7 pt-7">Admin</a>
              <a href="#" className="text-gray-400 font-medium text-sm pb-7 pt-7 hover:text-gray-600">Viewer</a>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-gray-600 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-semibold text-[#0F172A]">Alex Stratton</p>
                <p className="text-[10px] font-bold text-gray-400 tracking-wider">SENIOR AUDITOR</p>
              </div>
              <img src="https://ui-avatars.com/api/?name=Alex+Stratton&background=0F172A&color=fff" alt="Profile" className="w-10 h-10 rounded-lg" />
            </div>
          </div>
        </header>

        {/* PAGE CONTENT INJECTED HERE */}
        <Outlet />
        
      </div>
    </div>
  );
};

export default Layout;