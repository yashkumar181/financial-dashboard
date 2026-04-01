import React, { useState } from 'react';
import { 
  Wallet, CreditCard, PiggyBank, TrendingUp, Home, 
  GraduationCap, Search, Filter, CreditCard as CardIcon, 
  Landmark as BankIcon, Plus
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('monthly');

  const transactions = [
    { id: 1, date: 'Oct 24, 2023', entity: 'Apple Store Soho', category: 'ELECTRONICS', method: 'Amex Gold', methodIcon: CardIcon, magnitude: '-$1,429.00', status: 'Cleared', type: 'negative' },
    { id: 2, date: 'Oct 23, 2023', entity: 'Vanguard Dividend', category: 'INVESTMENT', method: 'Brokerage', methodIcon: BankIcon, magnitude: '+$4,210.50', status: 'Cleared', type: 'positive' },
    { id: 3, date: 'Oct 22, 2023', entity: 'Equinox Membership', category: 'WELLNESS', method: 'Chase Sapphire', methodIcon: CardIcon, magnitude: '-$265.00', status: 'Pending', type: 'negative' },
    { id: 4, date: 'Oct 21, 2023', entity: 'Delta Airlines', category: 'LIFESTYLE', method: 'Amex Gold', methodIcon: CardIcon, magnitude: '-$842.12', status: 'Cleared', type: 'negative' },
  ];

  const merchants = [
    { id: 1, initial: 'A', name: 'Amazon Web Services', sub: 'ENTERPRISE CLOUD', amount: '$1,842.10', freq: 'Monthly Bill', bg: 'bg-blue-100', text: 'text-blue-600' },
    { id: 2, initial: 'T', name: 'Tesla Supercharger', sub: 'TRANSIT', amount: '$412.50', freq: '12 Transactions', bg: 'bg-indigo-100', text: 'text-indigo-600' },
    { id: 3, initial: 'W', name: 'Whole Foods Market', sub: 'PROVISIONING', amount: '$942.00', freq: '8 Transactions', bg: 'bg-blue-100', text: 'text-blue-600' },
  ];

  return (
    <div className="flex-1 overflow-auto p-4 md:p-10">
      
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A] mb-1">Portfolio Synopsis</h1>
          <p className="text-sm text-gray-500">Metric oversight for the current fiscal quarter</p>
        </div>
        <div className="bg-white rounded-lg p-1 flex shadow-sm border border-gray-100 overflow-x-auto">
          <button onClick={() => setActiveTab('monthly')} className={`whitespace-nowrap px-4 py-2 text-xs font-semibold rounded-md ${activeTab === 'monthly' ? 'bg-[#F4F7FA] text-[#0A3D8B]' : 'text-gray-500'}`}>Monthly</button>
          <button onClick={() => setActiveTab('quarterly')} className={`whitespace-nowrap px-4 py-2 text-xs font-semibold rounded-md ${activeTab === 'quarterly' ? 'bg-[#F4F7FA] text-[#0A3D8B]' : 'text-gray-500'}`}>Quarterly</button>
          <button onClick={() => setActiveTab('annual')} className={`whitespace-nowrap px-4 py-2 text-xs font-semibold rounded-md ${activeTab === 'annual' ? 'bg-[#F4F7FA] text-[#0A3D8B]' : 'text-gray-500'}`}>Annual</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
          <div className="flex justify-between items-start mb-8">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
              <Wallet className="w-5 h-5" />
            </div>
            <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-1 rounded-full">+12.4%</span>
          </div>
          <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-1 uppercase">Net Worth</p>
          <h3 className="text-2xl font-bold text-[#0F172A] mb-4">$2,482,910.42</h3>
          <div className="w-16 h-1 bg-[#0A3D8B] rounded-full"></div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
          <div className="flex justify-between items-start mb-8">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <span className="bg-orange-50 text-orange-600 text-[10px] font-bold px-2 py-1 rounded-full">+4.2%</span>
          </div>
          <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-1 uppercase">Monthly Cash Flow</p>
          <h3 className="text-2xl font-bold text-[#0F172A] mb-2">$14,290.00</h3>
          <p className="text-[10px] font-semibold text-gray-400 uppercase">Efficiency Grade: <span className="text-red-500">A-</span></p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
          <div className="flex justify-between items-start mb-8">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
              <PiggyBank className="w-5 h-5" />
            </div>
            <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-1 rounded-full">-1.8%</span>
          </div>
          <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-1 uppercase">Discretionary Surplus</p>
          <h3 className="text-2xl font-bold text-[#0F172A] mb-2">$3,104.50</h3>
          <p className="text-[10px] font-semibold text-gray-400">Remaining for cycle: 8 days</p>
        </div>

        <div className="bg-[#0A3D8B] p-6 rounded-2xl shadow-md text-white">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-8 shrink-0">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <p className="text-[10px] font-bold text-blue-200 tracking-wider mb-1 uppercase">Savings Rate</p>
          <h3 className="text-4xl font-bold mb-4">42.5%</h3>
          <p className="text-[9px] font-semibold text-blue-200 uppercase tracking-wide">Outperforming index by 12%</p>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 mb-8">
        
        <div className="w-full xl:w-2/3 space-y-6">
          
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-50 md:h-[320px] flex flex-col overflow-x-auto">
            <div className="flex justify-between items-center mb-6 min-w-[500px]">
              <div className="flex items-center space-x-4">
                <h3 className="text-[#0F172A] font-semibold text-base">Fiscal Velocity</h3>
                <span className="text-sm text-gray-400">Income vs Expenses</span>
              </div>
              <div className="flex items-center space-x-4 text-xs font-semibold text-gray-500">
                <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-[#0A3D8B] mr-2"></div>INCOME</div>
                <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-gray-200 mr-2"></div>EXPENSES</div>
              </div>
            </div>
            <div className="flex-1 border-b border-gray-100 flex items-end justify-between px-4 pb-0 relative min-h-[150px] min-w-[500px]">
              <div className="w-full flex justify-between absolute bottom-0 left-0 px-8 text-[10px] font-bold text-gray-400 uppercase">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-50">
            <h3 className="text-[#0F172A] font-semibold text-base mb-1">Allocation Waterfall</h3>
            <p className="text-xs text-gray-400 mb-8">Distinction between fixed liabilities and variable lifestyle spend</p>
            
            <div className="mb-8">
              <div className="flex justify-between text-xs font-bold mb-3 uppercase tracking-wide">
                <span className="text-[#0F172A]">Total Inflow</span>
                <span className="text-[#0F172A]">$18,400</span>
              </div>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#0A3D8B] w-full rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Committed</div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] text-gray-400 uppercase">(Mortgage, Utils)</span>
                  <span className="text-sm font-bold text-[#0F172A]">$8,200</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-600 w-3/4 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Discretionary</div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] text-gray-400 uppercase">(Travel, Dining)</span>
                  <span className="text-sm font-bold text-[#0F172A]">$3,104</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-800 w-1/3 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Residual Surplus</div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] text-gray-400 uppercase">&nbsp;</span>
                  <span className="text-sm font-bold text-[#0F172A]">$6,096</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0A3D8B] w-1/2 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-1/3 space-y-6">
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#0F172A] font-semibold text-base">Strategic Goals</h3>
              <button className="w-6 h-6 rounded-full bg-[#0A3D8B] text-white flex items-center justify-center shrink-0">
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <Home className="w-4 h-4 text-red-800 mr-3 shrink-0" />
                  <span className="text-sm font-bold text-[#0F172A]">Modernist Retreat</span>
                </div>
                <span className="text-sm font-bold text-gray-500">82%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-red-800 w-[82%] rounded-full"></div>
              </div>
              <p className="text-[10px] text-gray-400 font-semibold">$164,000 of $200,000</p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <GraduationCap className="w-4 h-4 text-[#0A3D8B] mr-3 shrink-0" />
                  <span className="text-sm font-bold text-[#0F172A]">Education Fund</span>
                </div>
                <span className="text-sm font-bold text-gray-500">34%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-[#0A3D8B] w-[34%] rounded-full"></div>
              </div>
              <p className="text-[10px] text-gray-400 font-semibold">$42,500 of $125,000</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
            <h3 className="text-[#0F172A] font-semibold text-base mb-6">Primary Merchants</h3>
            <div className="space-y-6">
              {merchants.map((merchant) => (
                <div key={merchant.id} className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full ${merchant.bg} ${merchant.text} flex items-center justify-center font-bold text-sm shrink-0`}>
                      {merchant.initial}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#0F172A]">{merchant.name}</p>
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">{merchant.sub}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-[#0F172A]">{merchant.amount}</p>
                    <p className="text-[9px] font-bold text-gray-400">{merchant.freq}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
        <div className="p-4 md:p-6 flex flex-col sm:flex-row justify-between sm:items-center border-b border-gray-50 gap-4">
          <h3 className="text-[#0F172A] font-semibold text-base">Recent Transactional History</h3>
          <div className="flex space-x-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search entries..." className="w-full pl-9 pr-4 py-2 bg-[#F4F7FA] rounded-lg text-xs focus:outline-none" />
            </div>
            <button className="flex items-center justify-center px-4 py-2 bg-[#F4F7FA] rounded-lg text-xs font-semibold text-[#0F172A] shrink-0">
              <Filter className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Filter</span>
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[700px]">
            <thead>
              <tr className="bg-[#F8FAFC] border-b border-gray-100">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Entity</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Method</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Magnitude</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {transactions.map((tx) => {
                const Icon = tx.methodIcon;
                return (
                  <tr key={tx.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="text-xs text-gray-500 font-medium block w-16 leading-tight">{tx.date}</span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-[#0F172A]">{tx.entity}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[9px] font-bold rounded uppercase tracking-wider">{tx.category}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center text-xs text-gray-500 font-medium">
                        <Icon className="w-4 h-4 mr-2 shrink-0" />
                        {tx.method}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-sm font-bold ${tx.type === 'positive' ? 'text-red-700' : 'text-[#0F172A]'}`}>
                        {tx.magnitude}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-[10px] font-bold rounded-full border 
                        ${tx.status === 'Cleared' && tx.type === 'negative' ? 'bg-orange-50 text-orange-700 border-orange-100' : ''}
                        ${tx.status === 'Cleared' && tx.type === 'positive' ? 'bg-red-50 text-red-700 border-red-100' : ''}
                        ${tx.status === 'Pending' ? 'bg-blue-50 text-blue-700 border-blue-100' : ''}
                      `}>
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;