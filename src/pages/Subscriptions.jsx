import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  TrendingUp, AlertTriangle, History, Download, Plus, PiggyBank, Calendar, Trash2, X, ArrowRight, Heart 
} from 'lucide-react';
import { subscriptionsData } from '../data/mockData';

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState(subscriptionsData);
  const [isAddSheetOpen, setIsAddSheetOpen] = useState(false);
  
  const [newSub, setNewSub] = useState({
    name: '', plan: '', cost: '', cycle: 'MONTHLY', nextDate: new Date().toISOString().split('T')[0]
  });

  const totalMonthlyBurn = subscriptions.reduce((total, sub) => {
    const costValue = parseFloat(sub.cost.replace(/[^0-9.-]+/g, ""));
    return total + (isNaN(costValue) ? 0 : costValue);
  }, 0);

  const yearlyForecast = totalMonthlyBurn * 12;
  const activeCount = subscriptions.length;
  const dailyCost = (totalMonthlyBurn / 30).toFixed(2);

  const handleDelete = (id) => {
    setSubscriptions(subscriptions.filter(sub => sub.id !== id));
  };

  const handleExportCSV = () => {
    const headers = "Service,Plan,Billing Cycle,Next Billing,Monthly Cost\n";
    const csvRows = subscriptions.map(sub => `"${sub.name}","${sub.plan}","${sub.cycle}","${sub.next}","${sub.cost}"`).join("\n");
    const blob = new Blob([headers + csvRows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `subscriptions_ledger_${new Date().getTime()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleAddSubscription = (e) => {
    e.preventDefault();
    const formattedDate = new Date(newSub.nextDate).toLocaleDateString('en-US', { month: 'short', day: '2-digit' }).toUpperCase();
    
    const addedSub = {
      id: Date.now(),
      name: newSub.name,
      plan: newSub.plan,
      initial: newSub.name.charAt(0).toUpperCase(),
      bg: 'bg-blue-100 dark:bg-gray-800',
      text: 'text-blue-600 dark:text-gray-300',
      cycle: newSub.cycle,
      next: formattedDate,
      rating: 'New',
      ratingIcon: Heart,
      ratingColor: 'text-emerald-600 dark:text-emerald-400',
      ratingBg: 'bg-emerald-50 dark:bg-emerald-900/20',
      cost: `₹${parseFloat(newSub.cost).toFixed(2)}`,
      subCost: ''
    };

    setSubscriptions([...subscriptions, addedSub]);
    setIsAddSheetOpen(false);
    setNewSub({ name: '', plan: '', cost: '', cycle: 'MONTHLY', nextDate: new Date().toISOString().split('T')[0] });
  };

  return (
    <div className="flex-1 overflow-auto p-4 md:p-10 relative">
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        <div className="xl:col-span-2 bg-[#F8F9FA] dark:bg-[#121212] p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-[#262626] flex flex-col justify-between transition-all">
          <div>
            <p className="text-xs font-bold text-gray-500 dark:text-[#a3a3a3] tracking-widest uppercase mb-4">Total Monthly Burn</p>
            <h2 className="text-5xl font-bold text-[#0F172A] dark:text-gray-200 mb-3">
              ₹{totalMonthlyBurn.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
            </h2>
            <p className="text-sm font-semibold text-red-700 dark:text-red-400 flex items-center mb-8">
              <TrendingUp className="w-4 h-4 mr-1" />
              +₹12.99 <span className="text-gray-500 dark:text-[#a3a3a3] ml-1 font-medium">since last month</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="bg-[#F0F5FF] dark:bg-[#1A2235] px-6 py-4 rounded-xl border border-blue-50 dark:border-blue-900/30 w-40 flex-1 sm:flex-none">
              <p className="text-[9px] font-bold text-gray-500 dark:text-blue-300 uppercase tracking-widest mb-1">Yearly Forecast</p>
              <h4 className="text-lg font-bold text-[#0F172A] dark:text-gray-200">
                ₹{yearlyForecast.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
              </h4>
            </div>
            <div className="bg-[#F0F5FF] dark:bg-[#1A2235] px-6 py-4 rounded-xl border border-blue-50 dark:border-blue-900/30 w-40 flex-1 sm:flex-none">
              <p className="text-[9px] font-bold text-gray-500 dark:text-blue-300 uppercase tracking-widest mb-1">Active Services</p>
              <h4 className="text-lg font-bold text-[#0F172A] dark:text-gray-200">{activeCount}</h4>
            </div>
          </div>
        </div>

        <div className="bg-[#FFEFEA] dark:bg-[#2A1A15] p-8 rounded-2xl shadow-sm border border-orange-50 dark:border-orange-900/30">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#3A2218] dark:bg-[#4A2511] flex items-center justify-center text-white">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-[#3A2218] dark:text-orange-200 font-bold text-sm">Subscription Audit</h3>
          </div>
          <p className="text-xs text-[#8A4D35] dark:text-orange-300/80 font-medium leading-relaxed mb-6">
            We found <span className="font-bold">2 unused services</span> and <span className="font-bold">1 duplicate charge</span> that could save you <span className="font-bold">₹45.00/mo.</span>
          </p>
          <div className="space-y-3">
            <div className="bg-white/60 dark:bg-white/5 p-3 rounded-lg flex justify-between items-center border border-white/40 dark:border-[#262626]">
              <div className="flex items-center text-xs font-bold text-red-800 dark:text-red-400">
                <AlertTriangle className="w-4 h-4 mr-2" /> Duplicate: Hulu
              </div>
              <button className="text-[10px] font-bold text-[#0A3D8B] dark:text-orange-300 tracking-wider uppercase">Resolve</button>
            </div>
            <div className="bg-white/60 dark:bg-white/5 p-3 rounded-lg flex justify-between items-center border border-white/40 dark:border-[#262626]">
              <div className="flex items-center text-xs font-bold text-gray-800 dark:text-gray-300">
                <History className="w-4 h-4 mr-2" /> Rarely Used: Masterclass
              </div>
              <button className="text-[10px] font-bold text-[#0A3D8B] dark:text-orange-300 tracking-wider uppercase">Cancel</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-6 gap-4">
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] dark:text-gray-200 mb-1">Active Subscriptions</h2>
            <p className="text-sm text-gray-500 dark:text-[#a3a3a3]">A curated view of your recurring fiscal commitments.</p>
          </div>
          <div className="flex space-x-3">
            <button onClick={handleExportCSV} className="flex items-center px-4 py-2 bg-[#F8F9FA] dark:bg-[#121212] border border-gray-200 dark:border-[#262626] text-[#0F172A] dark:text-gray-200 rounded-lg text-xs font-semibold hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors shadow-sm whitespace-nowrap">
              <Download className="w-4 h-4 mr-2" /> EXPORT LEDGER
            </button>
            <button onClick={() => setIsAddSheetOpen(true)} className="flex items-center px-4 py-2 bg-[#0A3D8B] dark:bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-[#082f6b] dark:hover:bg-blue-500 transition-colors shadow-sm whitespace-nowrap">
              <Plus className="w-4 h-4 mr-2" /> ADD SERVICE
            </button>
          </div>
        </div>

        <div className="bg-[#F8F9FA] dark:bg-[#121212] rounded-2xl shadow-sm border border-gray-200 dark:border-[#262626] overflow-x-auto">
          <table className="w-full text-left min-w-[800px]">
            <thead>
              <tr className="bg-gray-100 dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-[#262626]">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest">Service</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest">Billing Cycle</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest">Usage Rating</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest">Monthly Cost</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-[#262626]">
              {subscriptions.map((sub) => {
                const Icon = sub.ratingIcon || Heart;
                return (
                  <tr key={sub.id} className="hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors">
                    <td className="px-6 py-5 flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-lg ${sub.bg} ${sub.text} flex items-center justify-center font-bold text-sm shrink-0`}>
                        {sub.initial}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0F172A] dark:text-gray-200">{sub.name}</p>
                        <p className="text-[10px] text-gray-500 dark:text-[#a3a3a3] font-medium">{sub.plan}</p>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="bg-[#F0F5FF] dark:bg-[#1A2235] text-[#0A3D8B] dark:text-blue-400 px-2 py-1 rounded text-[9px] font-bold uppercase tracking-wider block w-fit mb-1 border border-transparent dark:border-[#262626]">{sub.cycle}</span>
                      <p className="text-[9px] font-bold text-gray-500 dark:text-[#a3a3a3] tracking-wider uppercase">Next: {sub.next}</p>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold w-fit border border-transparent dark:border-[#262626] ${sub.ratingBg} ${sub.ratingColor}`}>
                        <Icon className="w-3 h-3 mr-1.5 fill-current" /> {sub.rating}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm font-bold text-[#0F172A] dark:text-gray-200">{sub.cost}</p>
                      {sub.subCost && <p className="text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3]">{sub.subCost}</p>}
                    </td>
                    <td className="px-6 py-5 text-center">
                      <button onClick={() => handleDelete(sub.id)} className="text-gray-400 hover:text-red-500 dark:text-[#a3a3a3] dark:hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20">
                        <Trash2 className="w-4 h-4 mx-auto" />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#F8F9FA] dark:bg-[#121212] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-[#262626]">
          <p className="text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest mb-6">Cost By Category</p>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-[10px] font-bold text-[#0F172A] dark:text-gray-300">
              <div className="w-full h-2 bg-gray-200 dark:bg-[#0a0a0a] rounded-full overflow-hidden mr-4"><div className="h-full bg-[#0A3D8B] dark:bg-blue-500 w-[45%] rounded-full"></div></div>
              Entertainment
            </div>
            <div className="flex justify-between items-center text-[10px] font-bold text-[#0F172A] dark:text-gray-300">
              <div className="w-full h-2 bg-gray-200 dark:bg-[#0a0a0a] rounded-full overflow-hidden mr-4"><div className="h-full bg-blue-600 dark:bg-gray-400 w-[25%] rounded-full"></div></div>
              Productivity
            </div>
            <div className="flex justify-between items-center text-[10px] font-bold text-[#0F172A] dark:text-gray-300">
              <div className="w-full h-2 bg-gray-200 dark:bg-[#0a0a0a] rounded-full overflow-hidden mr-4"><div className="h-full bg-gray-500 dark:bg-gray-600 w-[15%] rounded-full"></div></div>
              Utilities
            </div>
          </div>
        </div>

        <div className="bg-[#F0F5FF] dark:bg-[#1A2235] p-6 rounded-2xl shadow-sm border border-blue-50 dark:border-blue-900/30 flex flex-col items-center justify-center text-center">
          <PiggyBank className="w-6 h-6 text-[#0A3D8B] dark:text-blue-400 mb-3" />
          <p className="text-[10px] font-bold text-gray-500 dark:text-blue-300 uppercase tracking-widest mb-1">Potential Savings</p>
          <h3 className="text-2xl font-bold text-[#0F172A] dark:text-gray-200">₹540/yr</h3>
        </div>

        <div className="bg-[#F8F9FA] dark:bg-[#121212] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-[#262626] flex flex-col items-center justify-center text-center transition-all">
          <Calendar className="w-6 h-6 text-[#0A3D8B] dark:text-gray-400 mb-3" />
          <p className="text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest mb-1">Average Daily Cost</p>
          <h3 className="text-2xl font-bold text-[#0F172A] dark:text-gray-200">₹{dailyCost}</h3>
        </div>
      </div>

      {isAddSheetOpen && createPortal(
        <div className="fixed inset-0 z-[100] overflow-hidden transition-all duration-300 pointer-events-auto">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out opacity-100"
            onClick={() => setIsAddSheetOpen(false)}
          ></div>
          
          <div className="absolute inset-y-0 right-0 z-10 w-full max-w-md bg-[#F8F9FA] dark:bg-[#121212] border-l border-gray-200 dark:border-[#262626] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col translate-x-0 animate-fade-slide-up">
            <div className="px-6 py-5 border-b border-gray-200 dark:border-[#262626] flex justify-between items-center bg-white dark:bg-[#0a0a0a]">
              <div>
                <h2 className="text-lg font-bold text-[#0F172A] dark:text-gray-200">New Service</h2>
                <p className="text-[10px] text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest mt-0.5">Track a recurring charge</p>
              </div>
              <button onClick={() => setIsAddSheetOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#262626]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <form id="sub-form" onSubmit={handleAddSubscription} className="p-6 space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest mb-2">Service Name</label>
                  <input 
                    required type="text" value={newSub.name} onChange={(e) => setNewSub({...newSub, name: e.target.value})}
                    placeholder="e.g. Adobe Creative Cloud" 
                    className="w-full px-4 py-3 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#262626] text-[#0F172A] dark:text-gray-200 text-sm font-semibold rounded-xl focus:outline-none focus:border-[#0A3D8B] dark:focus:border-gray-500 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest mb-2">Plan Description</label>
                  <input 
                    required type="text" value={newSub.plan} onChange={(e) => setNewSub({...newSub, plan: e.target.value})}
                    placeholder="e.g. Pro Teams Monthly" 
                    className="w-full px-4 py-3 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#262626] text-[#0F172A] dark:text-gray-200 text-sm font-semibold rounded-xl focus:outline-none focus:border-[#0A3D8B] dark:focus:border-gray-500 shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest mb-2">Cost per cycle (₹)</label>
                    <input 
                      required type="number" step="0.01" value={newSub.cost} onChange={(e) => setNewSub({...newSub, cost: e.target.value})}
                      placeholder="0.00" 
                      className="w-full px-4 py-3 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#262626] text-[#0F172A] dark:text-gray-200 text-sm font-semibold rounded-xl focus:outline-none focus:border-[#0A3D8B] dark:focus:border-gray-500 shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest mb-2">Billing Cycle</label>
                    <select 
                      value={newSub.cycle} onChange={(e) => setNewSub({...newSub, cycle: e.target.value})}
                      className="w-full px-4 py-3 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#262626] text-[#0F172A] dark:text-gray-200 text-sm font-semibold rounded-xl appearance-none focus:outline-none focus:border-[#0A3D8B] dark:focus:border-gray-500 shadow-sm"
                    >
                      <option value="MONTHLY">Monthly</option>
                      <option value="ANNUAL">Annual</option>
                      <option value="QUARTERLY">Quarterly</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-500 dark:text-[#a3a3a3] uppercase tracking-widest mb-2">Next Billing Date</label>
                  <input 
                    required type="date" value={newSub.nextDate} onChange={(e) => setNewSub({...newSub, nextDate: e.target.value})}
                    className="w-full px-4 py-3 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#262626] text-[#0F172A] dark:text-gray-200 text-sm font-semibold rounded-xl focus:outline-none focus:border-[#0A3D8B] dark:focus:border-gray-500 shadow-sm"
                  />
                </div>
              </form>
            </div>

            <div className="p-6 border-t border-gray-200 dark:border-[#262626] bg-white dark:bg-[#0a0a0a]">
              <button type="submit" form="sub-form" className="w-full flex items-center justify-center py-3.5 bg-[#0A3D8B] dark:bg-gray-800 hover:bg-[#082f6b] dark:hover:bg-gray-700 text-white rounded-xl text-sm font-bold transition-colors shadow-lg">
                Activate Subscription <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
};

export default Subscriptions;