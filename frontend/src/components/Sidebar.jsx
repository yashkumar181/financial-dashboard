import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Landmark, ReceiptText, PlaySquare, Target, Settings, Plus, HelpCircle, LineChart } from 'lucide-react';
import { useFinance } from '../context/FinanceContext';

const Sidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const { role } = useFinance();

  const navLinkClass = ({ isActive }) => {
    const baseClass = "flex items-center px-4 py-3 rounded-lg font-medium text-xs tracking-wide border-l-4 transition-all duration-200 w-full text-left ";
    return isActive
      ? baseClass + "bg-[#F0F5FF] dark:bg-[#2A2A2A] text-[#0A3D8B] dark:text-gray-200 border-[#0A3D8B] dark:border-gray-400"
      : baseClass + "text-gray-500 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-[#2A2A2A] border-transparent";
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm z-20 md:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      <div className={`fixed md:static inset-y-0 left-0 z-30 w-64 bg-white dark:bg-[#1E1E1E] border-r border-gray-100 dark:border-white/5 flex flex-col justify-between shrink-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        
        <div>
          <div className="h-20 flex items-center justify-between px-6">
            <div className="flex items-center">
              <div className="bg-[#0F172A] dark:bg-gray-200 w-8 h-8 rounded flex items-center justify-center mr-3 shrink-0 shadow-inner">
                <div className="w-3 h-3 border-2 border-blue-400 dark:border-[#1E1E1E] rounded-sm transform rotate-45 transition-colors"></div>
              </div>
              <div>
                <h1 className="text-[#0F172A] dark:text-gray-200 font-bold text-sm tracking-wide transition-colors">Fiscal Clarity</h1>
                <p className="text-gray-400 dark:text-gray-500 text-[10px] tracking-widest uppercase">The Precision Curator</p>
              </div>
            </div>
            <button className="md:hidden text-gray-500 dark:text-gray-400 font-bold p-2" onClick={() => setIsMobileMenuOpen(false)}>✕</button>
          </div>
          
          <nav className="mt-4 space-y-1 px-4">
            <NavLink to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClass}><LayoutDashboard className="w-4 h-4 mr-3 shrink-0" /> DASHBOARD</NavLink>
            <NavLink to="/accounts" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClass}><Landmark className="w-4 h-4 mr-3 shrink-0" /> ACCOUNTS</NavLink>
            <NavLink to="/transactions" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClass}><ReceiptText className="w-4 h-4 mr-3 shrink-0" /> TRANSACTIONS</NavLink>
            <NavLink to="/subscriptions" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClass}><PlaySquare className="w-4 h-4 mr-3 shrink-0" /> SUBSCRIPTIONS</NavLink>
            <NavLink to="/investments" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClass}><LineChart className="w-4 h-4 mr-3 shrink-0" /> INVESTMENTS</NavLink>
            <NavLink to="/goals" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClass}><Target className="w-4 h-4 mr-3 shrink-0" /> GOALS</NavLink>
            <NavLink to="/settings" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClass}><Settings className="w-4 h-4 mr-3 shrink-0" /> SETTINGS</NavLink>
          </nav>
          
          {role === 'Admin' && (
            <div className="px-6 mt-8">
              <button className="w-full bg-[#0A3D8B] dark:bg-gray-700 hover:bg-[#082f6b] dark:hover:bg-gray-600 text-white flex items-center justify-center py-3 rounded-lg text-xs font-semibold tracking-wide transition-colors shadow-md">
                <Plus className="w-4 h-4 mr-2" /> NEW TRANSACTION
              </button>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-xs font-medium tracking-wide w-full transition-colors">
            <HelpCircle className="w-4 h-4 mr-3" /> HELP CENTER
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;