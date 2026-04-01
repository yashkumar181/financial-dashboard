import React from 'react';
import { Calendar, Download, PieChart, MoreHorizontal, Cloud, ShoppingBag, Landmark, ExternalLink, ChevronDown } from 'lucide-react';

const Goals = () => {
  return (
    <div className="flex-1 overflow-auto p-4 md:p-10">
      
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A] mb-1">Architectural Ledger</h1>
          <p className="text-sm text-gray-500">Surgical precision in your fiscal reporting cycle.</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 bg-[#F0F5FF] text-[#0A3D8B] rounded-lg text-xs font-semibold hover:bg-blue-50 transition-colors">
            <Calendar className="w-4 h-4 mr-2" />
            OCT 01 - OCT 31, 2023
          </button>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-200 text-[#0F172A] rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors shadow-sm">
            <Download className="w-4 h-4 mr-2" />
            EXPORT PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">Spending By Category</h3>
            <PieChart className="w-4 h-4 text-gray-300" />
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-6">$14,280.00</h2>
          
          <div className="flex items-center justify-between">
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#E5E7EB" strokeWidth="4"></circle>
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#1E3A8A" strokeWidth="4" strokeDasharray="45 55" strokeDashoffset="0"></circle>
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#3B82F6" strokeWidth="4" strokeDasharray="25 75" strokeDashoffset="-45"></circle>
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#7F1D1D" strokeWidth="4" strokeDasharray="15 85" strokeDashoffset="-70"></circle>
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#4B5563" strokeWidth="4" strokeDasharray="10 90" strokeDashoffset="-85"></circle>
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-1">
                <span className="block text-[8px] font-bold text-gray-400 tracking-widest uppercase">Total</span>
                <span className="block text-sm font-bold text-[#0F172A]">100%</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs w-24">
                <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-[#1E3A8A] mr-2"></div><span className="text-gray-600">Housing</span></div>
                <span className="font-bold text-[#0F172A]">45%</span>
              </div>
              <div className="flex items-center justify-between text-xs w-24">
                <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-[#3B82F6] mr-2"></div><span className="text-gray-600">Lifestyle</span></div>
                <span className="font-bold text-[#0F172A]">25%</span>
              </div>
              <div className="flex items-center justify-between text-xs w-24">
                <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-[#7F1D1D] mr-2"></div><span className="text-gray-600">Subscriptions</span></div>
                <span className="font-bold text-[#0F172A]">15%</span>
              </div>
              <div className="flex items-center justify-between text-xs w-24">
                <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-[#4B5563] mr-2"></div><span className="text-gray-600">Utilities</span></div>
                <span className="font-bold text-[#0F172A]">10%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F8FAFC] p-6 rounded-2xl shadow-sm border border-gray-50 flex flex-col justify-between">
          <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-4">Efficiency Ratio</h3>
          <div className="flex items-end space-x-2 mb-4">
            <h2 className="text-4xl font-bold text-[#1E3A8A]">72:28</h2>
            <div className="text-[8px] font-bold text-gray-500 uppercase tracking-widest pb-1 leading-tight">Essential<br/>/ Wants</div>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
            <div className="h-full bg-[#1E3A8A] w-[72%] rounded-full"></div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-100 flex-1 flex items-center shadow-sm">
            <div>
              <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Curator Insight</p>
              <p className="text-[11px] text-gray-600 italic leading-relaxed">"Essential spending increased by 4% due to energy index shift. Non-essential liquidity remains healthy."</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F172A]">Merchant: Swiggy</h4>
                <p className="text-[8px] text-gray-400 font-bold tracking-widest uppercase">Selected Detail</p>
              </div>
            </div>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="flex justify-between mb-8">
            <div>
              <p className="text-[8px] font-bold text-gray-400 tracking-widest uppercase mb-1">Avg Ticket Size</p>
              <h3 className="text-lg font-bold text-[#0F172A]">$24.50</h3>
            </div>
            <div className="text-right">
              <p className="text-[8px] font-bold text-gray-400 tracking-widest uppercase mb-1">Frequency</p>
              <h3 className="text-lg font-bold text-[#0F172A]">12/mo</h3>
            </div>
          </div>

          <div>
            <p className="text-[8px] font-bold text-gray-400 tracking-widest uppercase mb-3">Recent Activity</p>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[11px]">
                <div className="flex items-center text-gray-500"><div className="w-1 h-1 rounded-full bg-gray-300 mr-3"></div>Oct 24, 2023</div>
                <span className="font-bold text-[#0F172A]">-$28.12</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <div className="flex items-center text-gray-500"><div className="w-1 h-1 rounded-full bg-gray-300 mr-3"></div>Oct 21, 2023</div>
                <span className="font-bold text-[#0F172A]">-$19.45</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <div className="flex items-center text-gray-500"><div className="w-1 h-1 rounded-full bg-gray-300 mr-3"></div>Oct 18, 2023</div>
                <span className="font-bold text-[#0F172A]">-$31.20</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-50 mb-8">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4">
          <div>
            <h2 className="text-xs font-bold text-gray-400 mb-1 tracking-widest uppercase">Upcoming Obligations</h2>
            <p className="text-[11px] text-gray-400">Projection for next 30 days based on recurring cycles</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold text-[#991B1B]">-$2,140.00</span>
            <span className="bg-red-50 text-red-700 text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider">Pending</span>
          </div>
        </div>

        <div className="flex overflow-x-auto pb-4 gap-8 md:justify-between hide-scrollbar">
          <div className="min-w-fit flex flex-col">
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1">Nov 02</p>
            <p className="text-[11px] font-bold text-[#0F172A] mb-2">AWS Cloud</p>
            <div className="w-2 h-2 rounded-full bg-[#1E3A8A] mb-2"></div>
            <p className="text-xs font-bold text-[#0F172A] mb-2">$142.00</p>
            <span className="bg-[#F0F5FF] text-[#1E3A8A] text-[7px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider w-fit">SAAS</span>
          </div>
          <div className="min-w-fit flex flex-col">
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1">Nov 05</p>
            <p className="text-[11px] font-bold text-[#0F172A] mb-2">Rent / Lease</p>
            <div className="w-2 h-2 rounded-full bg-[#3B82F6] mb-2"></div>
            <p className="text-xs font-bold text-[#0F172A] mb-2">$1,200.00</p>
            <span className="bg-blue-50 text-blue-600 border border-blue-100 text-[7px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider w-fit">FIXED</span>
          </div>
          <div className="min-w-fit flex flex-col">
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1">Nov 12</p>
            <p className="text-[11px] font-bold text-[#0F172A] mb-2">Gym Member.</p>
            <div className="w-2 h-2 rounded-full bg-gray-300 mb-2"></div>
            <p className="text-xs font-bold text-[#0F172A] mb-2">$65.00</p>
            <span className="bg-[#FFEFEA] text-[#991B1B] text-[7px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider w-fit">HEALTH</span>
          </div>
          <div className="min-w-fit flex flex-col">
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1">Nov 18</p>
            <p className="text-[11px] font-bold text-[#0F172A] mb-2">Netflix Premium</p>
            <div className="w-2 h-2 rounded-full bg-gray-300 mb-2"></div>
            <p className="text-xs font-bold text-[#0F172A] mb-2">$19.99</p>
            <span className="bg-orange-50 text-orange-700 text-[7px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider w-fit">LIFESTYLE</span>
          </div>
          <div className="min-w-fit flex flex-col">
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1">Nov 25</p>
            <p className="text-[11px] font-bold text-[#0F172A] mb-2">Insurance Pr.</p>
            <div className="w-2 h-2 rounded-full bg-gray-300 mb-2"></div>
            <p className="text-xs font-bold text-[#0F172A] mb-2">$412.50</p>
            <span className="bg-[#F0F5FF] text-[#1E3A8A] text-[7px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider w-fit">SAFETY</span>
          </div>
          <div className="min-w-fit flex flex-col opacity-40">
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1">Dec 01</p>
            <p className="text-[11px] font-bold text-gray-400 mb-2">Vehicle Tax</p>
            <div className="w-2 h-2 rounded-full bg-gray-200 mb-2"></div>
            <p className="text-xs font-bold text-gray-400 mb-2">$290.00</p>
            <span className="bg-gray-50 text-gray-400 text-[7px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider w-fit">ANNUAL</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden mb-8">
        <div className="p-6 flex flex-col sm:flex-row justify-between sm:items-center border-b border-gray-50 gap-4">
          <h3 className="text-sm font-bold text-[#0F172A]">Precision Transaction Audit</h3>
          <div className="flex space-x-3">
            <button className="flex items-center justify-between px-3 py-1.5 bg-white border border-gray-200 rounded-md text-[10px] font-bold text-[#0F172A] w-32 shadow-sm">
              All Assets <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>
            <button className="flex items-center justify-between px-3 py-1.5 bg-white border border-gray-200 rounded-md text-[10px] font-bold text-[#0F172A] w-32 shadow-sm">
              Monthly View <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[800px]">
            <thead>
              <tr className="bg-white border-b border-gray-50">
                <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest">Reference</th>
                <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest">Merchant & Category</th>
                <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest text-right">Volume</th>
                <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest text-center">Status</th>
                <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest text-center">Control</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-5 text-xs font-bold text-[#1E3A8A]">#TXN-88210</td>
                <td className="px-6 py-5 flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#F0F5FF] flex items-center justify-center text-[#1E3A8A] shrink-0">
                    <Cloud className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0F172A]">DigitalOcean Holdings</p>
                    <p className="text-[9px] text-gray-500">Subscriptions</p>
                  </div>
                </td>
                <td className="px-6 py-5 text-[11px] font-medium text-gray-600">Oct 28, 2023</td>
                <td className="px-6 py-5 text-xs font-bold text-[#991B1B] text-right">-$48.00</td>
                <td className="px-6 py-5 text-center">
                  <span className="bg-[#3A2218] text-white text-[8px] font-bold px-2 py-1.5 rounded uppercase tracking-widest">Settled</span>
                </td>
                <td className="px-6 py-5 text-center">
                  <button className="text-gray-300 hover:text-[#1E3A8A] transition-colors"><ExternalLink className="w-4 h-4 mx-auto" /></button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-5 text-xs font-bold text-[#1E3A8A]">#TXN-88209</td>
                <td className="px-6 py-5 flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#F0F5FF] flex items-center justify-center text-[#1E3A8A] shrink-0">
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0F172A]">Apple Store Soho</p>
                    <p className="text-[9px] text-gray-500">Electronics / Wants</p>
                  </div>
                </td>
                <td className="px-6 py-5 text-[11px] font-medium text-gray-600">Oct 27, 2023</td>
                <td className="px-6 py-5 text-xs font-bold text-[#991B1B] text-right">-$1,299.00</td>
                <td className="px-6 py-5 text-center">
                  <span className="bg-[#3A2218] text-white text-[8px] font-bold px-2 py-1.5 rounded uppercase tracking-widest">Settled</span>
                </td>
                <td className="px-6 py-5 text-center">
                  <button className="text-gray-300 hover:text-[#1E3A8A] transition-colors"><ExternalLink className="w-4 h-4 mx-auto" /></button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-5 text-xs font-bold text-[#1E3A8A]">#TXN-88208</td>
                <td className="px-6 py-5 flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#F0F5FF] flex items-center justify-center text-[#1E3A8A] shrink-0">
                    <Landmark className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0F172A]">Goldman Sachs Yield</p>
                    <p className="text-[9px] text-gray-500">Dividend Income</p>
                  </div>
                </td>
                <td className="px-6 py-5 text-[11px] font-medium text-gray-600">Oct 26, 2023</td>
                <td className="px-6 py-5 text-xs font-bold text-red-700 text-right">+$214.50</td>
                <td className="px-6 py-5 text-center">
                  <span className="bg-[#F0F5FF] text-[#1E3A8A] text-[8px] font-bold px-2 py-1.5 rounded uppercase tracking-widest">Cleared</span>
                </td>
                <td className="px-6 py-5 text-center">
                  <button className="text-gray-300 hover:text-[#1E3A8A] transition-colors"><ExternalLink className="w-4 h-4 mx-auto" /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-[#F8FAFC] border-t border-gray-50 p-4 text-center">
          <button className="text-[9px] font-bold text-[#1E3A8A] tracking-widest uppercase hover:underline">View Full Archive (142 Transactions)</button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center text-[8px] font-bold text-gray-400 tracking-widest uppercase gap-4 pb-4 px-2">
        <div className="flex space-x-6">
          <span>System Status: Optimal</span>
          <span>Last Sync: 2 Mins Ago</span>
        </div>
        <div className="flex space-x-6 text-center lg:text-right">
          <a href="#" className="hover:text-gray-600">Privacy Protocol</a>
          <a href="#" className="hover:text-gray-600">Compliance Hub</a>
          <span>© 2023 Fiscal Clarity Architecture</span>
        </div>
      </div>

    </div>
  );
};

export default Goals;