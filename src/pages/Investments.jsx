import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  TrendingUp, Wallet, Activity, PieChart, ChevronDown, Filter, History, 
  Lightbulb, Building2, Landmark, MoreHorizontal, Search, Plus, Trash2, X, ArrowRight, FileText, CheckCircle2, BarChart3
} from 'lucide-react';
import { investmentsData, portfolioPerformanceData } from '../data/mockData';
import AreaChart from '../components/charts/AreaChart';

const initialHoldings = [
  ...investmentsData,
  { id: 4, name: 'Reliance Industries', type: 'EQUITY • 120 UNITS', icon: BarChart3, iconBg: 'bg-blue-100 dark:bg-gray-800', iconColor: 'text-blue-700 dark:text-gray-300', value: '₹32,150.00', dayChange: '+1.2%', dayChangeType: 'positive', totalGain: '+₹5,400.00', roi: '20.1%', gainType: 'positive', goal: 'WEALTH GEN' },
  { id: 5, name: 'HDFC Bank', type: 'EQUITY • 85 UNITS', icon: BarChart3, iconBg: 'bg-blue-100 dark:bg-gray-800', iconColor: 'text-blue-700 dark:text-gray-300', value: '₹14,200.50', dayChange: '-0.5%', dayChangeType: 'negative', totalGain: '+₹1,200.00', roi: '9.2%', gainType: 'positive', goal: 'RETIREMENT' },
  { id: 6, name: 'Gold ETF (GOLDBEES)', type: 'COMMODITY • 500 UNITS', icon: Landmark, iconBg: 'bg-yellow-100 dark:bg-gray-800', iconColor: 'text-yellow-700 dark:text-gray-300', value: '₹25,600.00', dayChange: '+0.1%', dayChangeType: 'positive', totalGain: '+₹2,100.00', roi: '8.9%', gainType: 'positive', goal: 'HEDGE' },
  { id: 7, name: 'TCS', type: 'EQUITY • 40 UNITS', icon: BarChart3, iconBg: 'bg-blue-100 dark:bg-gray-800', iconColor: 'text-blue-700 dark:text-gray-300', value: '₹15,800.00', dayChange: '+2.4%', dayChangeType: 'positive', totalGain: '+₹3,400.00', roi: '27.4%', gainType: 'positive', goal: 'WEALTH GEN' },
  { id: 8, name: 'Liquid Fund (LIQUIDBEES)', type: 'MUTUAL FUND • 10 UNITS', icon: Building2, iconBg: 'bg-gray-100 dark:bg-[#121212]', iconColor: 'text-gray-700 dark:text-gray-400', value: '₹10,000.00', dayChange: '0.0%', dayChangeType: 'neutral', totalGain: '+₹450.00', roi: '4.7%', gainType: 'positive', goal: 'EMERGENCY' },
];

const Investments = () => {
  const [holdings, setHoldings] = useState(initialHoldings);
  const [showAllHoldings, setShowAllHoldings] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('gain_desc');

  const [isAddHoldingOpen, setIsAddHoldingOpen] = useState(false);
  const [isAddAutomationOpen, setIsAddAutomationOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const [newHolding, setNewHolding] = useState({ name: '', type: 'EQUITY', invested: '', current: '', goal: 'WEALTH GEN' });
  const [newAuto, setNewAuto] = useState({ name: '', amount: '', date: '' });

  const parseCurrency = (str) => parseFloat(str.replace(/[^0-9.-]+/g, "")) || 0;

  const baseCurrentValue = 191050.52; 
  const baseInvestedValue = 150000.00;
  
  const tableCurrentValue = holdings.reduce((sum, item) => sum + parseCurrency(item.value), 0);
  const tableTotalGain = holdings.reduce((sum, item) => {
    const gain = parseCurrency(item.totalGain);
    return item.gainType === 'negative' ? sum - gain : sum + gain;
  }, 0);
  const tableInvestedValue = tableCurrentValue - tableTotalGain;

  const displayCurrentValue = baseCurrentValue + tableCurrentValue;
  const displayInvestedValue = baseInvestedValue + tableInvestedValue;
  const displayXirr = (((displayCurrentValue - displayInvestedValue) / displayInvestedValue) * 100).toFixed(2);

  let processedHoldings = holdings.filter(h => 
    h.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    h.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  processedHoldings.sort((a, b) => {
    if (sortOption === 'gain_desc') return parseCurrency(b.totalGain) - parseCurrency(a.totalGain);
    if (sortOption === 'gain_asc') return parseCurrency(a.totalGain) - parseCurrency(b.totalGain);
    if (sortOption === 'value_desc') return parseCurrency(b.value) - parseCurrency(a.value);
    if (sortOption === 'name_asc') return a.name.localeCompare(b.name);
    return 0;
  });

  const displayedHoldings = showAllHoldings ? processedHoldings : processedHoldings.slice(0, 3);

  const handleExportCSV = () => {
    const headers = "Asset Name,Type,Current Value,Total Gain,ROI,Goal\n";
    const csvRows = holdings.map(h => `"${h.name}","${h.type}","${h.value}","${h.totalGain}","${h.roi}","${h.goal}"`).join("\n");
    const blob = new Blob([headers + csvRows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `holdings_report_${new Date().getTime()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleDeleteHolding = (id) => {
    setHoldings(holdings.filter(h => h.id !== id));
  };

  const handleAddHolding = (e) => {
    e.preventDefault();
    const investedVal = parseFloat(newHolding.invested);
    const currentVal = parseFloat(newHolding.current);
    const gainVal = currentVal - investedVal;
    
    const addedHolding = {
      id: Date.now(),
      name: newHolding.name,
      type: `${newHolding.type} • MANUAL ENTRY`,
      icon: BarChart3,
      iconBg: 'bg-indigo-100 dark:bg-[#262626]',
      iconColor: 'text-indigo-600 dark:text-indigo-400',
      value: `₹${currentVal.toLocaleString(undefined, {minimumFractionDigits: 2})}`,
      dayChange: '0.0%',
      dayChangeType: 'neutral',
      totalGain: `${gainVal >= 0 ? '+' : '-'}₹${Math.abs(gainVal).toLocaleString(undefined, {minimumFractionDigits: 2})}`,
      roi: `${((gainVal / investedVal) * 100).toFixed(1)}%`,
      gainType: gainVal >= 0 ? 'positive' : 'negative',
      goal: newHolding.goal
    };

    setHoldings([addedHolding, ...holdings]);
    setIsAddHoldingOpen(false);
    setNewHolding({ name: '', type: 'EQUITY', invested: '', current: '', goal: 'WEALTH GEN' });
  };

  return (
    <div className="flex-1 overflow-auto p-4 md:p-10 relative">
      
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A] dark:text-gray-200 mb-1">Investment Portfolio</h1>
          <p className="text-sm text-gray-500 dark:text-[#a3a3a3]">Tracking across 12 active accounts</p>
        </div>
        <div className="flex space-x-3">
          <button onClick={handleExportCSV} className="flex items-center px-4 py-2 bg-[#F8F9FA] dark:bg-[#121212] border border-gray-200 dark:border-[#262626] text-[#0F172A] dark:text-gray-200 rounded-lg text-xs font-semibold hover:bg-gray-100 dark:hover:bg-[#1E1E1E] transition-colors shadow-sm whitespace-nowrap">
            Export Report
          </button>
          <button className="flex items-center px-4 py-2 bg-[#0A3D8B] dark:bg-gray-700 text-white rounded-lg text-xs font-semibold hover:bg-[#082f6b] dark:hover:bg-gray-600 transition-colors shadow-sm whitespace-nowrap">
            Rebalance Portfolio
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#0A3D8B] dark:bg-[#1A2235] p-6 rounded-2xl shadow-md text-white relative overflow-hidden flex flex-col justify-between h-40 border border-transparent dark:border-blue-900/30 transition-all">
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 pointer-events-none">
            <Wallet className="w-48 h-48" strokeWidth={1} />
          </div>
          <div className="relative z-10">
            <p className="text-[10px] font-bold text-blue-200 tracking-widest uppercase mb-1">Current Value</p>
            <h3 className="text-3xl lg:text-4xl font-bold mb-3 dark:text-gray-100">
              ₹{displayCurrentValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
            </h3>
            <div className="flex items-center space-x-2">
              <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" /> +₹12,402.50
              </span>
              <span className="text-[10px] text-blue-200">Today's Performance</span>
            </div>
          </div>
        </div>

        <div className="bg-[#F8F9FA] dark:bg-[#121212] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-[#262626] flex flex-col justify-between h-40 transition-all">
          <div>
            <p className="text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] tracking-widest uppercase mb-1">Total Invested</p>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#0F172A] dark:text-gray-200">
              ₹{displayInvestedValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
            </h3>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] tracking-widest uppercase">Cash Basis</p>
            <Wallet className="w-5 h-5 text-[#0A3D8B] dark:text-gray-400" />
          </div>
        </div>

        <div className="bg-[#F8F9FA] dark:bg-[#121212] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-[#262626] flex flex-col justify-between h-40 transition-all">
          <div>
            <p className="text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] tracking-widest uppercase mb-1">Portfolio XIRR</p>
            <h3 className="text-2xl lg:text-3xl font-bold text-emerald-600 dark:text-emerald-500">{displayXirr}%</h3>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] tracking-widest uppercase">Annualized</p>
            <Activity className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        <div className="xl:col-span-2 bg-[#F8F9FA] dark:bg-[#121212] p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-[#262626] flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-sm font-bold text-[#0F172A] dark:text-gray-200 mb-1">Holdings Performance</h2>
              <p className="text-xs text-gray-500 dark:text-[#a3a3a3]">P&L trajectory against initial capital</p>
            </div>
            <div className="flex items-center space-x-4 text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-wider">
              <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-slate-400 mr-2"></div>INVESTED</div>
              <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>CURRENT</div>
            </div>
          </div>
          <AreaChart data={portfolioPerformanceData} />
        </div>

        <div className="bg-[#F8F9FA] dark:bg-[#121212] p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-[#262626] flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-sm font-bold text-[#0F172A] dark:text-gray-200">Asset Allocation</h2>
            <PieChart className="w-4 h-4 text-gray-400" />
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="relative w-48 h-48 mb-6">
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#3b82f6" strokeWidth="4" strokeDasharray="42.5 57.5" strokeDashoffset="0"></circle>
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#8b5cf6" strokeWidth="4" strokeDasharray="28.1 71.9" strokeDashoffset="-42.5"></circle>
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#f59e0b" strokeWidth="4" strokeDasharray="15.4 84.6" strokeDashoffset="-70.6"></circle>
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#10b981" strokeWidth="4" strokeDasharray="14 86" strokeDashoffset="-86"></circle>
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-1">
                <span className="block text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] tracking-widest uppercase">Total</span>
                <span className="block text-xl font-bold text-[#0F172A] dark:text-gray-200">{holdings.length} Assets</span>
              </div>
            </div>

            <div className="w-full space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center"><div className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-3"></div><span className="text-gray-600 dark:text-[#a3a3a3] font-semibold">Stocks & ETFs</span></div>
                <span className="font-bold text-[#0F172A] dark:text-gray-200">42.5%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center"><div className="w-2.5 h-2.5 rounded-full bg-violet-500 mr-3"></div><span className="text-gray-600 dark:text-[#a3a3a3] font-semibold">Mutual Funds</span></div>
                <span className="font-bold text-[#0F172A] dark:text-gray-200">28.1%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center"><div className="w-2.5 h-2.5 rounded-full bg-amber-500 mr-3"></div><span className="text-gray-600 dark:text-[#a3a3a3] font-semibold">Real Estate</span></div>
                <span className="font-bold text-[#0F172A] dark:text-gray-200">15.4%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#F0F5FF] dark:bg-[#1A2235] p-6 md:p-8 rounded-2xl shadow-sm border border-blue-50 dark:border-blue-900/30">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm font-bold text-[#0F172A] dark:text-gray-200">Monthly Mandates</h2>
            <span className="bg-[#E0E7FF] dark:bg-[#202A40] text-[#0A3D8B] dark:text-blue-400 text-[9px] font-bold px-2 py-1 rounded uppercase tracking-widest border border-transparent dark:border-[#262626]">Active</span>
          </div>

          <div className="space-y-3 mb-6">
            <div className="bg-white dark:bg-[#1E1E1E] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-[#262626] flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-[#0F172A] dark:text-gray-200 mb-0.5">Vanguard 500 SIP</p>
                <p className="text-[9px] text-gray-500 dark:text-[#a3a3a3] font-bold uppercase tracking-widest">Next: Oct 05</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-[#0A3D8B] dark:text-gray-300 mb-0.5">₹12,000.00</p>
              </div>
            </div>
            <div className="bg-white dark:bg-[#1E1E1E] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-[#262626] flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-[#0F172A] dark:text-gray-200 mb-0.5">Gold Accumulation Plan</p>
                <p className="text-[9px] text-gray-500 dark:text-[#a3a3a3] font-bold uppercase tracking-widest">Next: Oct 12</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-[#0A3D8B] dark:text-gray-300 mb-0.5">₹4,500.00</p>
              </div>
            </div>
          </div>
          <button onClick={() => setIsAddAutomationOpen(true)} className="w-full bg-transparent border border-dashed border-[#0A3D8B] dark:border-gray-600 text-[#0A3D8B] dark:text-[#a3a3a3] rounded-xl py-3 text-xs font-bold hover:bg-blue-50 dark:hover:bg-[#202A40] transition-colors uppercase tracking-wide">
            + Add New Automation
          </button>
        </div>

        <div className="bg-[#0F172A] dark:bg-[#1A2235] p-8 rounded-2xl shadow-md flex flex-col justify-between border border-transparent dark:border-blue-900/30">
          <div className="mb-4">
            <span className="bg-blue-600 dark:bg-blue-800 text-white text-[8px] font-bold px-2 py-1 rounded uppercase tracking-widest">Pro Insight</span>
          </div>
          <div className="flex justify-between items-start gap-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Tax Harvesting Opportunity</h3>
              <p className="text-xs text-gray-400 dark:text-blue-100 leading-relaxed mb-6">
                You have ₹24,000 in unrealized short-term losses. Consider switching some equity holdings to offset gains.
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

        <div className="bg-[#F8F9FA] dark:bg-[#121212] border-2 border-dashed border-gray-200 dark:border-[#262626] rounded-2xl p-8 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-[#0a0a0a] flex items-center justify-center mb-4 border border-gray-200 dark:border-[#262626]">
            <History className="w-5 h-5 text-gray-500 dark:text-[#a3a3a3]" />
          </div>
          <h3 className="text-sm font-bold text-[#0F172A] dark:text-gray-200 mb-2">Recent Activity</h3>
          <p className="text-xs text-gray-500 dark:text-[#a3a3a3] mb-6 max-w-xs">
            Switch of ₹50,000 from Alpha MF to Beta Stocks completed yesterday.
          </p>
          <button onClick={() => setIsHistoryOpen(true)} className="text-[10px] font-bold text-[#0A3D8B] dark:text-gray-400 tracking-widest uppercase hover:underline">
            View History
          </button>
        </div>
      </div>

      <div className="bg-[#F8F9FA] dark:bg-[#121212] rounded-2xl shadow-sm border border-gray-200 dark:border-[#262626] overflow-hidden mb-8">
        <div className="p-4 md:p-6 flex flex-col lg:flex-row justify-between lg:items-center border-b border-gray-200 dark:border-[#262626] gap-4">
          <h3 className="text-sm font-bold text-[#0F172A] dark:text-gray-200 whitespace-nowrap">Active Holdings</h3>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-[#a3a3a3]" />
              <input type="text" placeholder="Search holdings..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-9 pr-4 py-2 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#262626] text-[#0F172A] dark:text-gray-200 text-xs font-semibold rounded-md focus:outline-none focus:border-[#0A3D8B] dark:focus:border-gray-500 shadow-sm" />
            </div>
            
            <div className="relative shrink-0">
              <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="w-full pl-3 pr-8 py-2 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#262626] text-[#0F172A] dark:text-gray-200 text-[10px] font-bold rounded-md appearance-none focus:outline-none focus:border-[#0A3D8B] shadow-sm">
                <option value="gain_desc">Sort by Gain (High to Low)</option>
                <option value="gain_asc">Sort by Gain (Low to High)</option>
                <option value="value_desc">Sort by Value (High to Low)</option>
                <option value="name_asc">Name (A-Z)</option>
              </select>
              <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                <ChevronDown className="w-3 h-3 text-gray-500 dark:text-[#a3a3a3]" />
              </div>
            </div>

            <button onClick={() => setIsAddHoldingOpen(true)} className="flex items-center justify-center px-4 py-2 bg-[#0A3D8B] dark:bg-[#262626] text-white rounded-md text-xs font-semibold hover:bg-[#082f6b] dark:hover:bg-[#333] transition-colors shadow-sm shrink-0">
              <Plus className="w-3.5 h-3.5 mr-1.5" /> Add Holding
            </button>
          </div>
        </div>

        <div className="overflow-x-auto min-h-[300px]">
          {displayedHoldings.length > 0 ? (
            <table className="w-full text-left min-w-[900px]">
              <thead>
                <tr className="border-b border-gray-200 dark:border-[#262626] bg-gray-100 dark:bg-[#0a0a0a]">
                  <th className="px-6 py-4 text-[9px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest">Asset Name</th>
                  <th className="px-6 py-4 text-[9px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest text-right">Current Value</th>
                  <th className="px-6 py-4 text-[9px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest text-right">1-Day Change</th>
                  <th className="px-6 py-4 text-[9px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest text-right">Total Gain</th>
                  <th className="px-6 py-4 text-[9px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest text-center">Goal Link</th>
                  <th className="px-6 py-4 text-[9px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-[#262626]">
                {displayedHoldings.map((item) => {
                  const Icon = item.icon || BarChart3;
                  return (
                    <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors">
                      <td className="px-6 py-5 flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-lg ${item.iconBg.replace('bg-gray-800', 'bg-[#262626]')} ${item.iconColor} flex items-center justify-center shrink-0`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#0F172A] dark:text-gray-200">{item.name}</p>
                          <p className="text-[9px] text-gray-500 dark:text-[#a3a3a3] font-bold tracking-widest uppercase mt-0.5">{item.type}</p>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <p className="text-sm font-bold text-[#0F172A] dark:text-gray-200">{item.value}</p>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <p className={`text-xs font-bold ${item.dayChangeType === 'positive' ? 'text-emerald-600 dark:text-emerald-400' : item.dayChangeType === 'negative' ? 'text-red-600 dark:text-red-400' : 'text-gray-500 dark:text-[#a3a3a3]'}`}>
                          {item.dayChange}
                        </p>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <p className={`text-sm font-bold ${item.gainType === 'positive' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                          {item.totalGain}
                        </p>
                        <p className="text-[9px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest mt-0.5">ROI: {item.roi}</p>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className="bg-[#F0F5FF] dark:bg-[#0a0a0a] text-[#0A3D8B] dark:text-gray-400 border border-transparent dark:border-[#262626] text-[8px] font-bold px-2.5 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap">
                          {item.goal}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <button onClick={() => handleDeleteHolding(item.id)} className="text-gray-400 hover:text-red-500 dark:text-[#a3a3a3] dark:hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20">
                          <Trash2 className="w-4 h-4 mx-auto" />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-gray-400 dark:text-gray-600">
              <Search className="w-10 h-10 mb-3 opacity-20" />
              <p className="text-sm font-semibold">No assets match your search.</p>
            </div>
          )}
        </div>
        
        {processedHoldings.length > 3 && (
          <div className="bg-[#F8F9FA] dark:bg-[#121212] border-t border-gray-200 dark:border-[#262626] p-4 text-center">
            <button onClick={() => setShowAllHoldings(!showAllHoldings)} className="text-[9px] font-bold text-gray-500 dark:text-[#a3a3a3] tracking-widest uppercase hover:text-[#0A3D8B] dark:hover:text-gray-300 flex items-center justify-center w-full">
              {showAllHoldings ? "Show Less" : `View All ${processedHoldings.length} Assets`} <ChevronDown className={`w-3 h-3 ml-1 transform transition-transform ${showAllHoldings ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>


      {isAddAutomationOpen && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-auto">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsAddAutomationOpen(false)}></div>
          <div className="bg-[#F8F9FA] dark:bg-[#121212] w-full max-w-md rounded-2xl shadow-2xl relative z-10 border border-gray-200 dark:border-[#262626] overflow-hidden animate-fade-slide-up">
            <div className="px-6 py-5 border-b border-gray-200 dark:border-[#262626] flex justify-between items-center bg-white dark:bg-[#0a0a0a]">
              <div>
                <h2 className="text-lg font-bold text-[#0F172A] dark:text-gray-200">New SIP / Automation</h2>
                <p className="text-[10px] text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest mt-0.5">Automate your wealth</p>
              </div>
              <button onClick={() => setIsAddAutomationOpen(false)} className="text-gray-400 hover:text-[#0F172A] dark:hover:text-gray-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#262626]"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setIsAddAutomationOpen(false); setNewAuto({name:'', amount:'', date:''}); }} className="p-6 space-y-5">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest mb-2">Automation Name</label>
                <input required type="text" value={newAuto.name} onChange={e => setNewAuto({...newAuto, name: e.target.value})} placeholder="e.g. Index Fund SIP" className="w-full px-4 py-3 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#262626] text-[#0F172A] dark:text-gray-200 text-sm font-semibold rounded-xl focus:outline-none focus:border-[#0A3D8B] dark:focus:border-gray-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest mb-2">Amount (₹)</label>
                  <input required type="number" step="0.01" value={newAuto.amount} onChange={e => setNewAuto({...newAuto, amount: e.target.value})} placeholder="0.00" className="w-full px-4 py-3 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#262626] text-[#0F172A] dark:text-gray-200 text-sm font-semibold rounded-xl focus:outline-none focus:border-[#0A3D8B] dark:focus:border-gray-500" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest mb-2">Frequency</label>
                  <select className="w-full px-4 py-3 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#262626] text-[#0F172A] dark:text-gray-200 text-sm font-semibold rounded-xl focus:outline-none focus:border-[#0A3D8B] dark:focus:border-gray-500">
                    <option>Monthly</option>
                    <option>Weekly</option>
                    <option>Quarterly</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest mb-2">Start Date</label>
                <input required type="date" value={newAuto.date} onChange={e => setNewAuto({...newAuto, date: e.target.value})} className="w-full px-4 py-3 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#262626] text-[#0F172A] dark:text-gray-200 text-sm font-semibold rounded-xl focus:outline-none focus:border-[#0A3D8B] dark:focus:border-gray-500" />
              </div>
              <button type="submit" className="w-full py-3.5 bg-[#0A3D8B] dark:bg-gray-800 hover:bg-[#082f6b] dark:hover:bg-gray-700 text-white rounded-xl text-sm font-bold transition-colors shadow-lg mt-4">Save Automation</button>
            </form>
          </div>
        </div>,
        document.body
      )}

      {isHistoryOpen && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-auto">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsHistoryOpen(false)}></div>
          <div className="bg-[#F8F9FA] dark:bg-[#121212] w-full max-w-lg rounded-2xl shadow-2xl relative z-10 border border-gray-200 dark:border-[#262626] overflow-hidden animate-fade-slide-up">
            <div className="px-6 py-5 border-b border-gray-200 dark:border-[#262626] flex justify-between items-center bg-white dark:bg-[#0a0a0a]">
              <div>
                <h2 className="text-lg font-bold text-[#0F172A] dark:text-gray-200 flex items-center"><FileText className="w-5 h-5 mr-2 text-[#0A3D8B] dark:text-gray-400"/> Investment Log</h2>
              </div>
              <button onClick={() => setIsHistoryOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#262626]"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-[#0F172A] dark:text-gray-200">Rebalance Executed</p>
                  <p className="text-xs text-gray-500 dark:text-[#a3a3a3]">Switch of ₹50,000 from Alpha MF to Beta Stocks completed.</p>
                  <p className="text-[9px] text-gray-400 dark:text-[#666666] font-bold tracking-widest mt-1 uppercase">Yesterday, 14:02 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-[#0F172A] dark:text-gray-200">Dividend Received</p>
                  <p className="text-xs text-gray-500 dark:text-[#a3a3a3]">₹4,500.00 credited from Blue Ridge REIT.</p>
                  <p className="text-[9px] text-gray-400 dark:text-[#666666] font-bold tracking-widest mt-1 uppercase">Oct 15, 09:15 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {isAddHoldingOpen && createPortal(
        <div className="fixed inset-0 z-[100] overflow-hidden transition-all duration-300 pointer-events-auto">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out opacity-100" onClick={() => setIsAddHoldingOpen(false)}></div>
          <div className="absolute inset-y-0 right-0 z-10 w-full max-w-md bg-[#F8F9FA] dark:bg-[#121212] border-l border-gray-200 dark:border-[#262626] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col translate-x-0 animate-fade-slide-up">
            <div className="px-6 py-5 border-b border-gray-200 dark:border-[#262626] flex justify-between items-center bg-white dark:bg-[#0a0a0a]">
              <div>
                <h2 className="text-lg font-bold text-[#0F172A] dark:text-gray-200">New Holding</h2>
                <p className="text-[10px] text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest mt-0.5">Manually track an asset</p>
              </div>
              <button onClick={() => setIsAddHoldingOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#262626]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <form id="holding-form" onSubmit={handleAddHolding} className="p-6 space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest mb-2">Asset Name / Ticker</label>
                  <input required type="text" value={newHolding.name} onChange={(e) => setNewHolding({...newHolding, name: e.target.value})} placeholder="e.g. Apple Inc. (AAPL)" className="w-full px-4 py-3 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#262626] text-[#0F172A] dark:text-gray-200 text-sm font-semibold rounded-xl focus:outline-none focus:border-[#0A3D8B] dark:focus:border-gray-500 shadow-sm" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest mb-2">Total Invested (₹)</label>
                    <input required type="number" step="0.01" value={newHolding.invested} onChange={(e) => setNewHolding({...newHolding, invested: e.target.value})} placeholder="0.00" className="w-full px-4 py-3 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#262626] text-[#0F172A] dark:text-gray-200 text-sm font-semibold rounded-xl focus:outline-none focus:border-[#0A3D8B] dark:focus:border-gray-500 shadow-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest mb-2">Current Value (₹)</label>
                    <input required type="number" step="0.01" value={newHolding.current} onChange={(e) => setNewHolding({...newHolding, current: e.target.value})} placeholder="0.00" className="w-full px-4 py-3 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#262626] text-[#0F172A] dark:text-gray-200 text-sm font-semibold rounded-xl focus:outline-none focus:border-[#0A3D8B] dark:focus:border-gray-500 shadow-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest mb-2">Asset Class</label>
                  <select value={newHolding.type} onChange={(e) => setNewHolding({...newHolding, type: e.target.value})} className="w-full px-4 py-3 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#262626] text-[#0F172A] dark:text-gray-200 text-sm font-semibold rounded-xl appearance-none focus:outline-none focus:border-[#0A3D8B] dark:focus:border-gray-500 shadow-sm">
                    <option value="EQUITY">Equity / Stocks</option>
                    <option value="MUTUAL FUND">Mutual Fund</option>
                    <option value="COMMODITY">Commodity</option>
                    <option value="REAL ESTATE">Real Estate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest mb-2">Assigned Goal</label>
                  <select value={newHolding.goal} onChange={(e) => setNewHolding({...newHolding, goal: e.target.value})} className="w-full px-4 py-3 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#262626] text-[#0F172A] dark:text-gray-200 text-sm font-semibold rounded-xl appearance-none focus:outline-none focus:border-[#0A3D8B] dark:focus:border-gray-500 shadow-sm">
                    <option value="WEALTH GEN">Wealth Generation</option>
                    <option value="RETIREMENT">Retirement</option>
                    <option value="COLLEGE">Education / College</option>
                    <option value="HEDGE">Hedge / Emergency</option>
                  </select>
                </div>
              </form>
            </div>

            <div className="p-6 border-t border-gray-200 dark:border-[#262626] bg-white dark:bg-[#0a0a0a]">
              <button type="submit" form="holding-form" className="w-full flex items-center justify-center py-3.5 bg-[#0A3D8B] dark:bg-gray-800 hover:bg-[#082f6b] dark:hover:bg-gray-700 text-white rounded-xl text-sm font-bold transition-colors shadow-lg">
                Add to Portfolio <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
};

export default Investments;