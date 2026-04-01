import React from 'react';
import { 
  TrendingUp, AlertTriangle, History, Download, Plus, 
  Heart, CheckCircle2, Frown, PiggyBank, Calendar
} from 'lucide-react';

const Subscriptions = () => {
  const subs = [
    { id: 1, name: 'Netflix', plan: 'Premium 4K Plan', initial: 'N', bg: 'bg-black', text: 'text-white', cycle: 'MONTHLY', next: 'OCT 14', rating: 'Loved', ratingIcon: Heart, ratingColor: 'text-red-600', ratingBg: 'bg-red-50', cost: '$19.99', subCost: '' },
    { id: 2, name: 'Spotify', plan: 'Family Plan', initial: 'S', bg: 'bg-green-500', text: 'text-white', cycle: 'MONTHLY', next: 'OCT 22', rating: 'Loved', ratingIcon: Heart, ratingColor: 'text-red-600', ratingBg: 'bg-red-50', cost: '$16.99', subCost: '' },
    { id: 3, name: 'Google One', plan: '2TB Storage', initial: 'G', bg: 'bg-blue-100', text: 'text-blue-600', cycle: 'ANNUAL', next: 'MAR 2024', rating: 'Constant', ratingIcon: CheckCircle2, ratingColor: 'text-[#0A3D8B]', ratingBg: 'bg-blue-50', cost: '$9.99', subCost: '$99.99/yr' },
    { id: 4, name: 'Masterclass', plan: 'All-Access Pass', initial: 'M', bg: 'bg-black', text: 'text-white', cycle: 'ANNUAL', next: 'NOV 02', rating: 'Rarely Used', ratingIcon: Frown, ratingColor: 'text-red-700', ratingBg: 'bg-red-100', cost: '$15.00', subCost: '$180.00/yr' },
  ];

  return (
    <div className="flex-1 overflow-auto p-4 md:p-10">
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        
        <div className="xl:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-50 flex flex-col justify-between">
          <div>
            <p className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-4">Total Monthly Burn</p>
            <h2 className="text-5xl font-bold text-[#0F172A] mb-3">$428.50</h2>
            <p className="text-sm font-semibold text-red-700 flex items-center mb-8">
              <TrendingUp className="w-4 h-4 mr-1" />
              +$12.99 <span className="text-gray-400 ml-1 font-medium">since last month</span>
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#F0F5FF] px-6 py-4 rounded-xl border border-blue-50 w-40">
              <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">Yearly Forecast</p>
              <h4 className="text-lg font-bold text-[#0F172A]">$5,142.00</h4>
            </div>
            <div className="bg-[#F0F5FF] px-6 py-4 rounded-xl border border-blue-50 w-40">
              <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">Active Services</p>
              <h4 className="text-lg font-bold text-[#0F172A]">14</h4>
            </div>
          </div>
        </div>

        <div className="bg-[#FFEFEA] p-8 rounded-2xl shadow-sm border border-orange-50">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#3A2218] flex items-center justify-center text-white">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-[#3A2218] font-bold text-sm">Subscription Audit</h3>
          </div>
          <p className="text-xs text-[#8A4D35] font-medium leading-relaxed mb-6">
            We found <span className="font-bold">2 unused services</span> and <span className="font-bold">1 duplicate charge</span> that could save you <span className="font-bold">$45.00/mo.</span>
          </p>
          
          <div className="space-y-3">
            <div className="bg-white/60 p-3 rounded-lg flex justify-between items-center border border-white/40">
              <div className="flex items-center text-xs font-bold text-red-800">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Duplicate: Hulu
              </div>
              <button className="text-[10px] font-bold text-[#0A3D8B] tracking-wider uppercase">Resolve</button>
            </div>
            <div className="bg-white/60 p-3 rounded-lg flex justify-between items-center border border-white/40">
              <div className="flex items-center text-xs font-bold text-gray-800">
                <History className="w-4 h-4 mr-2" />
                Rarely Used: Masterclass
              </div>
              <button className="text-[10px] font-bold text-[#0A3D8B] tracking-wider uppercase">Cancel</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-6 gap-4">
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-1">Active Subscriptions</h2>
            <p className="text-sm text-gray-500">A curated view of your recurring fiscal commitments.</p>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-[#F0F5FF] text-[#0A3D8B] rounded-lg text-xs font-semibold hover:bg-blue-50 transition-colors">
              <Download className="w-4 h-4 mr-2" />
              EXPORT LEDGER
            </button>
            <button className="flex items-center px-4 py-2 bg-[#0A3D8B] text-white rounded-lg text-xs font-semibold hover:bg-[#082f6b] transition-colors shadow-sm">
              <Plus className="w-4 h-4 mr-2" />
              ADD SERVICE
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-x-auto">
          <table className="w-full text-left min-w-[800px]">
            <thead>
              <tr className="bg-[#F8FAFC] border-b border-gray-50">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Service</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Billing Cycle</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Usage Rating</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Monthly Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {subs.map((sub) => {
                const Icon = sub.ratingIcon;
                return (
                  <tr key={sub.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-5 flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-lg ${sub.bg} ${sub.text} flex items-center justify-center font-bold text-sm shrink-0`}>
                        {sub.initial}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0F172A]">{sub.name}</p>
                        <p className="text-[10px] text-gray-400 font-medium">{sub.plan}</p>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="bg-[#F0F5FF] text-[#0A3D8B] px-2 py-1 rounded text-[9px] font-bold uppercase tracking-wider block w-fit mb-1">{sub.cycle}</span>
                      <p className="text-[9px] font-bold text-gray-400 tracking-wider uppercase">Next: {sub.next}</p>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold w-fit ${sub.ratingBg} ${sub.ratingColor}`}>
                        <Icon className="w-3 h-3 mr-1.5 fill-current" />
                        {sub.rating}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm font-bold text-[#0F172A]">{sub.cost}</p>
                      {sub.subCost && <p className="text-[10px] font-bold text-gray-400">{sub.subCost}</p>}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#F8FAFC] p-6 rounded-2xl shadow-sm border border-gray-50">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">Cost By Category</p>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-[10px] font-bold text-[#0F172A]">
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mr-4">
                <div className="h-full bg-[#0A3D8B] w-[45%] rounded-full"></div>
              </div>
              Entertainment
            </div>
            <div className="flex justify-between items-center text-[10px] font-bold text-[#0F172A]">
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mr-4">
                <div className="h-full bg-blue-600 w-[25%] rounded-full"></div>
              </div>
              Productivity
            </div>
            <div className="flex justify-between items-center text-[10px] font-bold text-[#0F172A]">
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mr-4">
                <div className="h-full bg-gray-500 w-[15%] rounded-full"></div>
              </div>
              Utilities
            </div>
          </div>
        </div>

        <div className="bg-[#F0F5FF] p-6 rounded-2xl shadow-sm border border-blue-50 flex flex-col items-center justify-center text-center">
          <PiggyBank className="w-6 h-6 text-[#0A3D8B] mb-3" />
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Potential Savings</p>
          <h3 className="text-2xl font-bold text-[#0F172A]">$540/yr</h3>
        </div>

        <div className="bg-[#F8FAFC] p-6 rounded-2xl shadow-sm border border-gray-50 flex flex-col items-center justify-center text-center">
          <Calendar className="w-6 h-6 text-[#0A3D8B] mb-3" />
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Average Daily Cost</p>
          <h3 className="text-2xl font-bold text-[#0F172A]">$14.28</h3>
        </div>
      </div>

    </div>
  );
};

export default Subscriptions;