import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Accounts from './pages/Accounts';
import Transactions from './pages/Transactions';
import Subscriptions from './pages/Subscriptions';
import Investments from './pages/Investments';
import Goals from './pages/Goals';
import Settings from './pages/Settings';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'accounts':
        return <Accounts />;
      case 'transactions':
        return <Transactions />;
      case 'subscriptions':
        return <Subscriptions />;
      case 'investments':
        return <Investments />;
      case 'goals':
        return <Goals />;
      case 'settings':
        return <Settings />;
      default:
        return (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-400 font-medium tracking-wide">Page under construction...</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-[#F4F7FA] font-sans overflow-hidden">
      <Sidebar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        <div className="flex items-center bg-white md:hidden px-4 border-b border-gray-100 shrink-0">
          <button onClick={() => setIsMobileMenuOpen(true)} className="p-4 text-gray-600">
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <Header />
          </div>
        </div>
        
        <div className="hidden md:block shrink-0">
          <Header />
        </div>

        {renderPage()}
      </div>
    </div>
  );
}

export default App;