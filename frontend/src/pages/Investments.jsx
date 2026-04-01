import React from 'react';
import { 
  TrendingUp, Wallet, Activity, PieChart, BarChart2, 
  ChevronDown, Filter, History, Lightbulb, Building2, 
  BarChart3, Landmark, MoreHorizontal, Plus
} from 'lucide-react';

const Investments = () => {
  const holdings = [
    {
      id: 1,
      name: 'Nvidia Corp (NVDA)',
      type: 'EQUITY • 42 UNITS',
      icon: BarChart3,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-700',
      value: '$48,421.10',
      dayChange: '+4.2%',
      dayChangeType: 'positive',
      totalGain: '+$18,200.00',
      roi: '60.2%',
      gainType: 'positive',
      goal: 'WEALTH GEN'
    },
    {
      id: 2,
      name: 'Blue Ridge REIT',
      type: 'REAL ESTATE • MONTHLY DIV',
      icon: Building2,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-700',
      value: '$125,000.00',
      dayChange: '0.0%',
      dayChangeType: 'neutral',
      totalGain: '+$12,400.00',
      roi: '11.0%',
      gainType: 'positive',
      goal: 'RETIREMENT'
    },
    {
      id: 3,
      name: 'Vanguard Global Tech Fund',
      type: 'MUTUAL FUND • GROWTH',
      icon: Landmark,
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-700',
      value: '$64,120.30',
      dayChange: '-0.8%',
      dayChangeType: 'negative',
      totalGain: '+$8,920.00',
      roi: '16.2%',
      gainType: 'positive',
      goal: 'COLLEGE'
    }
  ];

  return (
    <div className="flex-1 overflow-auto p-4 md:p-10">
      
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A] mb-1">Investment Portfolio</h1>
          <p className="text-sm text-gray-500">Tracking across 12 active accounts</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 bg-white border border-gray-200 text-[#0F172A] rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors shadow-sm">
            Export Report
          </button>
          <button className="flex items-center px-4 py-2 bg-[#0A3D8B] text-white rounded-lg text-xs font-semibold hover:bg-[#082f6b] transition-colors shadow-sm">
            Rebalance Portfolio
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#0A3D8B] p-6 rounded-2xl shadow-md text-white relative overflow-hidden flex flex-col justify-between h-40">
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 pointer-events-none">
            <Wallet className="w-48 h-48" strokeWidth={1} />
          </div>
          <div className="relative z-10">
            <p className="text-[10px] font-bold text-blue-200 tracking-widest uppercase mb-1">Current Value</p>
            <h3 className="text-3xl lg:text-4xl font-bold mb-3">$428,592.12</h3>
            <div className="flex items-center space-x-2">
              <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" /> +$12,402.50
              </span>
              <span className="text-[10px] text-blue-200">Today's Performance</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex flex-col justify-between h-40">
          <div>
            <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">Total Invested</p>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#0F172A]">$312,000.00</h3>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Cash Basis</p>
            <Wallet className="w-5 h-5 text-[#0A3D8B]" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex flex-col justify-between h-40">
          <div>
            <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">Portfolio XIRR</p>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#991B1B]">14.82%</h3>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Annualized</p>
            <Activity className="w-5 h-5 text-[#991B1B]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        <div className="xl:col-span-2 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-50">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-sm font-bold text-[#0F172A]">Asset Allocation</h2>
            <div className="flex space-x-2">
              <button className="w-6 h-6 rounded bg-[#F0F5FF] text-[#0A3D8B] flex items-center justify-center">
                <PieChart className="w-3.5 h-3.5" />
              </button>
              <button className="w-6 h-6 rounded text-gray-400 hover:bg-gray-50 flex items-center justify-center">
                <BarChart2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#0A3D8B" strokeWidth="4" strokeDasharray="42.5 57.5" strokeDashoffset="0"></circle>
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#4B5563" strokeWidth="4" strokeDasharray="28.1 71.9" strokeDashoffset="-42.5"></circle>
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#991B1B" strokeWidth="4" strokeDasharray="15.4 84.6" strokeDashoffset="-70.6"></circle>
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#9CA3AF" strokeWidth="4" strokeDasharray="10 90" strokeDashoffset="-86"></circle>
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#DBEAFE" strokeWidth="4" strokeDasharray="4 96" strokeDashoffset="-96"></circle>
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-1">
                <span className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase">Total</span>
                <span className="block text-xl font-bold text-[#0F172A]">5 Assets</span>
              </div>
            </div>

            <div className="w-full md:w-64 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center"><div className="w-2.5 h-2.5 rounded-full bg-[#0A3D8B] mr-3"></div><span className="text-gray-600 font-semibold">Stocks & ETFs</span></div>
                <span className="font-bold text-[#0F172A]">42.5%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center"><div className="w-2.5 h-2.5 rounded-full bg-[#4B5563] mr-3"></div><span className="text-gray-600 font-semibold">Mutual Funds</span></div>
                <span className="font-bold text-[#0F172A]">28.1%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center"><div className="w-2.5 h-2.5 rounded-full bg-[#991B1B] mr-3"></div><span className="text-gray-600 font-semibold">Real Estate</span></div>
                <span className="font-bold text-[#0F172A]">15.4%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center"><div className="w-2.5 h-2.5 rounded-full bg-[#9CA3AF] mr-3"></div><span className="text-gray-600 font-semibold">Fixed Income</span></div>
                <span className="font-bold text-[#0F172A]">10.0%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center"><div className="w-2.5 h-2.5 rounded-full bg-[#DBEAFE] mr-3"></div><span className="text-gray-600 font-semibold">Others</span></div>
                <span className="font-bold text-[#0F172A]">4.0%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F0F5FF] p-6 md:p-8 rounded-2xl shadow-sm border border-blue-50">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm font-bold text-[#0F172A]">Monthly Mandates</h2>
            <span className="bg-[#E0E7FF] text-[#0A3D8B] text-[9px] font-bold px-2 py-1 rounded uppercase tracking-widest">Active</span>
          </div>

          <div className="space-y-3 mb-6">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-[#0F172A] mb-0.5">Vanguard 500 SIP</p>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Next: Oct 05</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-[#0A3D8B] mb-0.5">$1,200.00</p>
                <p className="text-[8px] font-bold text-gray-500 uppercase flex items-center justify-end"><div className="w-1.5 h-1.5 rounded-full bg-orange-700 mr-1"></div> Retirement</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-[#0F172A] mb-0.5">Gold Accumulation Plan</p>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Next: Oct 12</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-[#0A3D8B] mb-0.5">$450.00</p>
                <p className="text-[8px] font-bold text-gray-500 uppercase flex items-center justify-end"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1"></div> Wedding</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-[#0F172A] mb-0.5">Education FD</p>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Next: Oct 15</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-[#0A3D8B] mb-0.5">$800.00</p>
                <p className="text-[8px] font-bold text-gray-500 uppercase flex items-center justify-end"><div className="w-1.5 h-1.5 rounded-full bg-red-700 mr-1"></div> College</p>
              </div>
            </div>
          </div>

          <button className="w-full bg-transparent border border-dashed border-gray-300 text-gray-500 rounded-xl py-3 text-xs font-bold hover:bg-white hover:text-[#0A3D8B] hover:border-[#0A3D8B] transition-colors uppercase tracking-wide">
            + Add New Automation
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden mb-8">
        <div className="p-6 flex flex-col sm:flex-row justify-between sm:items-center border-b border-gray-50 gap-4">
          <h3 className="text-sm font-bold text-[#0F172A]">Active Holdings</h3>
          <div className="flex space-x-3">
            <div className="relative">
              <select className="pl-3 pr-8 py-2 bg-white border border-gray-200 text-[#0F172A] text-[10px] font-bold rounded-md appearance-none focus:outline-none focus:border-[#0A3D8B] shadow-sm">
                <option>Sort by Gain (High to Low)</option>
              </select>
              <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </div>
            </div>
            <button className="flex items-center justify-center px-2 py-2 bg-white border border-gray-200 rounded-md shadow-sm text-gray-400 hover:text-[#0F172A]">
              <Filter className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[900px]">
            <thead>
              <tr className="border-b border-gray-50 bg-[#F8FAFC]">
                <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest">Asset Name</th>
                <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest text-right">Current Value</th>
                <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest text-right">1-Day Change</th>
                <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest text-right">Total Gain</th>
                <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest text-center">Goal Link</th>
                <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {holdings.map((item) => {
                const Icon = item.icon;
                return (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-5 flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-lg ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0F172A]">{item.name}</p>
                        <p className="text-[9px] text-gray-400 font-bold tracking-widest uppercase mt-0.5">{item.type}</p>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <p className="text-sm font-bold text-[#0F172A]">{item.value}</p>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <p className={`text-xs font-bold ${
                        item.dayChangeType === 'positive' ? 'text-green-600' : 
                        item.dayChangeType === 'negative' ? 'text-red-600' : 'text-gray-500'
                      }`}>
                        {item.dayChange}
                      </p>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <p className={`text-sm font-bold ${item.gainType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                        {item.totalGain}
                      </p>
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">ROI: {item.roi}</p>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="bg-[#F0F5FF] text-[#0A3D8B] text-[8px] font-bold px-2.5 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap">
                        {item.goal}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <button className="text-gray-400 hover:text-[#0A3D8B] transition-colors">
                        <MoreHorizontal className="w-5 h-5 mx-auto" />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="bg-white border-t border-gray-50 p-4 text-center">
          <button className="text-[9px] font-bold text-gray-400 tracking-widest uppercase hover:text-[#0A3D8B] flex items-center justify-center w-full">
            View All 42 Assets <ChevronDown className="w-3 h-3 ml-1" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div className="bg-[#0F172A] p-8 rounded-2xl shadow-md flex flex-col justify-between">
          <div className="mb-4">
            <span className="bg-blue-600 text-white text-[8px] font-bold px-2 py-1 rounded uppercase tracking-widest">Pro Insight</span>
          </div>
          <div className="flex justify-between items-start gap-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Tax Harvesting Opportunity</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                You have $2,400 in unrealized short-term losses. Consider switching some equity holdings to offset gains.
              </p>
              <button className="text-[10px] font-bold text-white uppercase tracking-widest border-b border-white pb-0.5 hover:text-blue-200 hover:border-blue-200 transition-colors">
                Review Harvest strategy
              </button>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Lightbulb className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4 border border-gray-100">
            <History className="w-5 h-5 text-gray-400" />
          </div>
          <h3 className="text-sm font-bold text-[#0F172A] mb-2">Recent Activity</h3>
          <p className="text-xs text-gray-500 mb-6 max-w-xs">
            Switch of $5,000 from Alpha MF to Beta Stocks completed yesterday.
          </p>
          <button className="text-[10px] font-bold text-[#0A3D8B] tracking-widest uppercase hover:underline">
            View History
          </button>
        </div>
      </div>

    </div>
  );
};

export default Investments;