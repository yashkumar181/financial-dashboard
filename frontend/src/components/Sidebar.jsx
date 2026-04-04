import React, { useState } from 'react';
import { LayoutDashboard, Landmark, ReceiptText, PlaySquare, Target, Settings, Plus, HelpCircle, LineChart } from 'lucide-react';
import { useFinance } from '../context/FinanceContext';
import AddTransactionModal from './AddTransactionModal';

const Sidebar = ({ currentPage, setCurrentPage, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const { role } = useFinance();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getNavClass = (pageName) => {
    const baseClass = "flex items-center px-4 py-3 rounded-lg font-medium text-xs tracking-wide border-l-4 transition-colors w-full text-left ";
    return currentPage === pageName
      ? baseClass + "bg-[#F0F5FF] text-[#0A3D8B] border-[#0A3D8B]"
      : baseClass + "text-gray-500 hover:bg-gray-50 border-transparent";
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      <div className={`fixed md:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-100 flex flex-col justify-between shrink-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out`}>
        
        <div>
          <div className="h-20 flex items-center justify-between px-6">
            <div className="flex items-center">
              <div className="bg-[#0F172A] w-8 h-8 rounded flex items-center justify-center mr-3 shrink-0">
                <div className="w-3 h-3 border-2 border-blue-400 rounded-sm transform rotate-45"></div>
              </div>
              <div>
                <h1 className="text-[#0F172A] font-bold text-sm tracking-wide">Fiscal Clarity</h1>
                <p className="text-gray-400 text-[10px] tracking-widest uppercase">The Precision Curator</p>
              </div>
            </div>
            <button className="md:hidden text-gray-500 font-bold" onClick={() => setIsMobileMenuOpen(false)}>
              ✕
            </button>
          </div>
          
          <nav className="mt-4 space-y-1 px-4">
            <button onClick={() => handleNavClick('dashboard')} className={getNavClass('dashboard')}><LayoutDashboard className="w-4 h-4 mr-3 shrink-0" /> DASHBOARD</button>
            <button onClick={() => handleNavClick('accounts')} className={getNavClass('accounts')}><Landmark className="w-4 h-4 mr-3 shrink-0" /> ACCOUNTS</button>
            <button onClick={() => handleNavClick('transactions')} className={getNavClass('transactions')}><ReceiptText className="w-4 h-4 mr-3 shrink-0" /> TRANSACTIONS</button>
            <button onClick={() => handleNavClick('subscriptions')} className={getNavClass('subscriptions')}><PlaySquare className="w-4 h-4 mr-3 shrink-0" /> SUBSCRIPTIONS</button>
            <button onClick={() => handleNavClick('investments')} className={getNavClass('investments')}><LineChart className="w-4 h-4 mr-3 shrink-0" /> INVESTMENTS</button>
            <button onClick={() => handleNavClick('goals')} className={getNavClass('goals')}><Target className="w-4 h-4 mr-3 shrink-0" /> GOALS</button>
            <button onClick={() => handleNavClick('settings')} className={getNavClass('settings')}><Settings className="w-4 h-4 mr-3 shrink-0" /> SETTINGS</button>
          </nav>
          
          {/* RBAC: Only render this button if the user is an Admin */}
          {role === 'Admin' && (
            <div className="px-6 mt-8">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#0A3D8B] hover:bg-[#082f6b] text-white flex items-center justify-center py-3 rounded-lg text-xs font-semibold tracking-wide transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" /> NEW TRANSACTION
              </button>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <button className="flex items-center text-gray-500 hover:text-gray-700 text-xs font-medium tracking-wide w-full">
            <HelpCircle className="w-4 h-4 mr-3" /> HELP CENTER
          </button>
        </div>
      </div>

      {/* Render the Modal */}
      <AddTransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Sidebar;