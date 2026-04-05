import React, { useState } from 'react';
import { Wallet, CreditCard, PiggyBank, TrendingUp, Home, GraduationCap, Plus, Laptop, ShoppingCart, Tv } from 'lucide-react';
import { useFinance } from '../context/FinanceContext';

const iconMap = { Laptop, Home, ShoppingCart, Tv, CreditCard };

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('monthly');
  const { transactions } = useFinance();
  const [chartTimeframe, setChartTimeframe] = useState('monthly');
  const [hoverPoint, setHoverPoint] = useState(null);

  const merchants = [
    { id: 1, initial: 'A', name: 'Amazon Web Services', sub: 'ENTERPRISE CLOUD', amount: '$1,842.10', freq: 'Monthly Bill', bg: 'bg-blue-100 dark:bg-gray-800', text: 'text-blue-600 dark:text-gray-300' },
    { id: 2, initial: 'T', name: 'Tesla Supercharger', sub: 'TRANSIT', amount: '$412.50', freq: '12 Transactions', bg: 'bg-indigo-100 dark:bg-gray-800', text: 'text-indigo-600 dark:text-gray-300' },
    { id: 3, initial: 'W', name: 'Whole Foods Market', sub: 'PROVISIONING', amount: '$942.00', freq: '8 Transactions', bg: 'bg-blue-100 dark:bg-gray-800', text: 'text-blue-600 dark:text-gray-300' },
  ];

  const chartData = {
    daily: [{ label: 'Mon', income: 450, expense: 320 }, { label: 'Tue', income: 420, expense: 410 }, { label: 'Wed', income: 510, expense: 290 }, { label: 'Thu', income: 480, expense: 380 }, { label: 'Fri', income: 600, expense: 520 }, { label: 'Sat', income: 300, expense: 650 }, { label: 'Sun', income: 250, expense: 400 }],
    weekly: [{ label: 'Wk 1', income: 4200, expense: 3100 }, { label: 'Wk 2', income: 4500, expense: 3800 }, { label: 'Wk 3', income: 4100, expense: 2900 }, { label: 'Wk 4', income: 5600, expense: 4200 }],
    monthly: [{ label: 'Jan', income: 18400, expense: 12300 }, { label: 'Feb', income: 18400, expense: 14000 }, { label: 'Mar', income: 19200, expense: 13100 }, { label: 'Apr', income: 18400, expense: 11500 }, { label: 'May', income: 21000, expense: 15200 }, { label: 'Jun', income: 18400, expense: 10400 }]
  };

  const activeChartData = chartData[chartTimeframe];
  const maxVal = Math.max(...activeChartData.map(d => Math.max(d.income, d.expense))) * 1.1; 
  const svgWidth = 600;
  const svgHeight = 200;
  const xMap = (idx) => (idx / (activeChartData.length - 1)) * svgWidth;
  const yMap = (val) => svgHeight - (val / maxVal) * svgHeight;
  const pointsIncome = activeChartData.map((d, i) => `${xMap(i)},${yMap(d.income)}`).join(' ');
  const pointsExpense = activeChartData.map((d, i) => `${xMap(i)},${yMap(d.expense)}`).join(' ');

  return (
    <div className="p-4 md:p-10 relative">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A] dark:text-gray-200 mb-1">Portfolio Synopsis</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Metric oversight for the current fiscal quarter</p>
        </div>
        <div className="bg-white dark:bg-[#1E1E1E] rounded-lg p-1 flex shadow-sm border border-gray-100 dark:border-white/5 overflow-x-auto">
          {['monthly', 'quarterly', 'annual'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`capitalize whitespace-nowrap px-4 py-2 text-xs font-semibold rounded-md ${activeTab === tab ? 'bg-[#F4F7FA] dark:bg-[#2A2A2A] text-[#0A3D8B] dark:text-gray-200' : 'text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}>{tab}</button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-2xl shadow-sm border border-gray-50 dark:border-white/5">
          <div className="flex justify-between items-start mb-8">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-gray-300 shrink-0"><Wallet className="w-5 h-5" /></div>
            <span className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold px-2 py-1 rounded-full">+12.4%</span>
          </div>
          <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 tracking-wider mb-1 uppercase">Net Worth</p>
          <h3 className="text-2xl font-bold text-[#0F172A] dark:text-gray-200 mb-4">$2,482,910.42</h3>
          <div className="w-16 h-1 bg-[#0A3D8B] dark:bg-gray-400 rounded-full"></div>
        </div>

        <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-2xl shadow-sm border border-gray-50 dark:border-white/5">
          <div className="flex justify-between items-start mb-8">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-gray-300 shrink-0"><CreditCard className="w-5 h-5" /></div>
            <span className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold px-2 py-1 rounded-full">+4.2%</span>
          </div>
          <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 tracking-wider mb-1 uppercase">Monthly Cash Flow</p>
          <h3 className="text-2xl font-bold text-[#0F172A] dark:text-gray-200 mb-2">$14,290.00</h3>
          <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase">Efficiency: <span className="text-emerald-500">A-</span></p>
        </div>

        <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-2xl shadow-sm border border-gray-50 dark:border-white/5">
          <div className="flex justify-between items-start mb-8">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-gray-300 shrink-0"><PiggyBank className="w-5 h-5" /></div>
            <span className="bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-[10px] font-bold px-2 py-1 rounded-full">-1.8%</span>
          </div>
          <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 tracking-wider mb-1 uppercase">Discretionary Surplus</p>
          <h3 className="text-2xl font-bold text-[#0F172A] dark:text-gray-200 mb-2">$3,104.50</h3>
          <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500">Remaining cycle: 8 days</p>
        </div>

        <div className="bg-[#0A3D8B] dark:bg-gray-800 p-6 rounded-2xl shadow-md text-white border dark:border-white/5">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-8 shrink-0"><TrendingUp className="w-5 h-5 text-white" /></div>
          <p className="text-[10px] font-bold text-blue-200 dark:text-gray-400 tracking-wider mb-1 uppercase">Savings Rate</p>
          <h3 className="text-4xl font-bold mb-4">42.5%</h3>
          <p className="text-[9px] font-semibold text-blue-200 dark:text-gray-400 uppercase tracking-wide">Outperforming index by 12%</p>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 mb-8">
        <div className="w-full xl:w-2/3 space-y-6">
          <div className="bg-white dark:bg-[#1E1E1E] p-6 md:p-8 rounded-2xl shadow-sm border border-gray-50 dark:border-white/5 flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
              <h3 className="text-[#0F172A] dark:text-gray-200 font-semibold text-base">Fiscal Velocity</h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
                <div className="bg-[#F4F7FA] dark:bg-[#121212] rounded-lg p-1 flex w-full sm:w-auto border dark:border-white/5">
                  {['daily', 'weekly', 'monthly'].map(tf => (
                    <button key={tf} onClick={() => setChartTimeframe(tf)} className={`flex-1 sm:flex-none px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-md transition-colors ${chartTimeframe === tf ? 'bg-white dark:bg-[#2A2A2A] text-[#0A3D8B] dark:text-gray-200 shadow-sm' : 'text-gray-400 dark:text-gray-500'}`}>{tf}</button>
                  ))}
                </div>
                <div className="flex items-center space-x-4 text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-[#0A3D8B] dark:bg-gray-400 mr-2"></div>INCOME</div>
                  <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 mr-2"></div>EXPENSES</div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full relative min-h-[220px]" onMouseLeave={() => setHoverPoint(null)}>
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full overflow-visible" preserveAspectRatio="none">
                {[0, 1, 2, 3].map(i => <line key={i} x1="0" y1={(i * svgHeight) / 3} x2={svgWidth} y2={(i * svgHeight) / 3} stroke="currentColor" className="text-gray-100 dark:text-white/5" strokeWidth="1" />)}
                <polyline points={pointsIncome} fill="none" stroke="currentColor" className="text-[#0A3D8B] dark:text-gray-400" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points={pointsExpense} fill="none" stroke="currentColor" className="text-gray-300 dark:text-gray-600" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                {activeChartData.map((d, i) => (
                  <g key={i}>
                    <circle cx={xMap(i)} cy={yMap(d.income)} r="4" fill="currentColor" className="text-[#0A3D8B] dark:text-gray-400" />
                    <circle cx={xMap(i)} cy={yMap(d.expense)} r="4" fill="currentColor" className="text-gray-400 dark:text-gray-600" />
                  </g>
                ))}
                {activeChartData.map((d, i) => {
                  const widthPerZone = svgWidth / Math.max(1, activeChartData.length - 1);
                  return <rect key={i} x={xMap(i) - widthPerZone / 2} y="0" width={widthPerZone} height={svgHeight} fill="transparent" className="cursor-crosshair" onMouseEnter={() => setHoverPoint({ index: i, ...d, x: xMap(i), yInc: yMap(d.income), yExp: yMap(d.expense) })} />;
                })}
                {hoverPoint && (
                  <>
                    <line x1={hoverPoint.x} y1="0" x2={hoverPoint.x} y2={svgHeight} stroke="currentColor" className="text-[#0A3D8B] dark:text-gray-500" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" pointerEvents="none" />
                    <circle cx={hoverPoint.x} cy={hoverPoint.yInc} r="6" fill="currentColor" className="text-white dark:text-[#1E1E1E] stroke-[#0A3D8B] dark:stroke-gray-400" strokeWidth="3" pointerEvents="none" />
                    <circle cx={hoverPoint.x} cy={hoverPoint.yExp} r="6" fill="currentColor" className="text-white dark:text-[#1E1E1E] stroke-gray-400 dark:stroke-gray-600" strokeWidth="3" pointerEvents="none" />
                  </>
                )}
              </svg>
              <div className="absolute left-0 right-0 bottom-[-30px] flex justify-between px-[2%]">
                {activeChartData.map((d, i) => (
                  <span key={i} className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest transform -translate-x-1/2" style={{ position: 'absolute', left: `${(xMap(i) / svgWidth) * 100}%` }}>{d.label}</span>
                ))}
              </div>
              {hoverPoint && (
                <div className="absolute bg-[#0F172A] dark:bg-[#121212] text-white p-3 rounded-xl shadow-2xl text-xs z-10 pointer-events-none transition-all duration-100 ease-out min-w-[120px] border dark:border-white/10" style={{ left: `${(hoverPoint.x / svgWidth) * 100}%`, top: `${Math.min(hoverPoint.yInc, hoverPoint.yExp) - 15}px`, transform: `translate(${hoverPoint.index === 0 ? '0%' : hoverPoint.index === activeChartData.length - 1 ? '-100%' : '-50%'}, -100%)` }}>
                  <p className="font-bold mb-2 border-b border-gray-700 dark:border-gray-800 pb-2 text-[10px] uppercase tracking-widest text-gray-300 dark:text-gray-400">{hoverPoint.label}</p>
                  <div className="flex items-center justify-between space-x-4 mb-2"><span className="flex items-center text-blue-300 dark:text-gray-400"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-gray-400 mr-2"></div>Income</span><span className="font-bold text-sm">${hoverPoint.income.toLocaleString()}</span></div>
                  <div className="flex items-center justify-between space-x-4"><span className="flex items-center text-gray-400"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></div>Expense</span><span className="font-bold text-sm">${hoverPoint.expense.toLocaleString()}</span></div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white dark:bg-[#1E1E1E] p-6 md:p-8 rounded-2xl shadow-sm border border-gray-50 dark:border-white/5">
            <h3 className="text-[#0F172A] dark:text-gray-200 font-semibold text-base mb-1">Allocation Waterfall</h3>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-8">Distinction between fixed liabilities and variable lifestyle spend</p>
            
            <div className="mb-8">
              <div className="flex justify-between text-xs font-bold mb-3 uppercase tracking-wide">
                <span className="text-[#0F172A] dark:text-gray-200">Total Inflow</span>
                <span className="text-[#0F172A] dark:text-gray-200">$18,400</span>
              </div>
              <div className="w-full h-3 bg-gray-100 dark:bg-[#121212] rounded-full overflow-hidden">
                <div className="h-full bg-[#0A3D8B] dark:bg-gray-400 w-full rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div>
                <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">Committed</div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase">(Mortgage, Utils)</span>
                  <span className="text-sm font-bold text-[#0F172A] dark:text-gray-200">$8,200</span>
                </div>
                <div className="w-full h-2 bg-gray-100 dark:bg-[#121212] rounded-full overflow-hidden"><div className="h-full bg-gray-600 dark:bg-gray-600 w-3/4 rounded-full"></div></div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">Discretionary</div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase">(Travel, Dining)</span>
                  <span className="text-sm font-bold text-[#0F172A] dark:text-gray-200">$3,104</span>
                </div>
                <div className="w-full h-2 bg-gray-100 dark:bg-[#121212] rounded-full overflow-hidden"><div className="h-full bg-orange-500 w-1/3 rounded-full"></div></div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">Residual Surplus</div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] text-gray-400 uppercase">&nbsp;</span>
                  <span className="text-sm font-bold text-[#0F172A] dark:text-gray-200">$6,096</span>
                </div>
                <div className="w-full h-2 bg-gray-100 dark:bg-[#121212] rounded-full overflow-hidden"><div className="h-full bg-[#0A3D8B] dark:bg-gray-400 w-1/2 rounded-full"></div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-1/3 space-y-6">
          <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-2xl shadow-sm border border-gray-50 dark:border-white/5">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#0F172A] dark:text-gray-200 font-semibold text-base">Strategic Goals</h3>
              <button className="w-6 h-6 rounded-full bg-[#0A3D8B] dark:bg-gray-700 text-white flex items-center justify-center shrink-0"><Plus className="w-4 h-4" /></button>
            </div>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center"><Home className="w-4 h-4 text-rose-600 dark:text-gray-400 mr-3 shrink-0" /><span className="text-sm font-bold text-[#0F172A] dark:text-gray-200">Modernist Retreat</span></div>
                <span className="text-sm font-bold text-gray-500 dark:text-gray-400">82%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 dark:bg-[#121212] rounded-full overflow-hidden mb-2"><div className="h-full bg-rose-600 dark:bg-gray-500 w-[82%] rounded-full"></div></div>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 font-semibold">$164,000 of $200,000</p>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center"><GraduationCap className="w-4 h-4 text-[#0A3D8B] dark:text-gray-400 mr-3 shrink-0" /><span className="text-sm font-bold text-[#0F172A] dark:text-gray-200">Education Fund</span></div>
                <span className="text-sm font-bold text-gray-500 dark:text-gray-400">34%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 dark:bg-[#121212] rounded-full overflow-hidden mb-2"><div className="h-full bg-[#0A3D8B] dark:bg-gray-500 w-[34%] rounded-full"></div></div>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 font-semibold">$42,500 of $125,000</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-2xl shadow-sm border border-gray-50 dark:border-white/5">
            <h3 className="text-[#0F172A] dark:text-gray-200 font-semibold text-base mb-6">Primary Merchants</h3>
            <div className="space-y-6">
              {merchants.map((merchant) => (
                <div key={merchant.id} className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full ${merchant.bg} ${merchant.text} flex items-center justify-center font-bold text-sm shrink-0`}>{merchant.initial}</div>
                    <div>
                      <p className="text-sm font-bold text-[#0F172A] dark:text-gray-200">{merchant.name}</p>
                      <p className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{merchant.sub}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-[#0F172A] dark:text-gray-200">{merchant.amount}</p>
                    <p className="text-[9px] font-bold text-gray-400 dark:text-gray-500">{merchant.freq}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm border border-gray-50 dark:border-white/5 overflow-hidden">
        <div className="p-4 md:p-6 flex flex-col sm:flex-row justify-between sm:items-center border-b border-gray-50 dark:border-white/5 gap-4">
          <h3 className="text-[#0F172A] dark:text-gray-200 font-semibold text-base">Recent Transactional History</h3>
          <button className="text-xs font-bold text-[#0A3D8B] dark:text-gray-400 hover:underline">View All</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[700px]">
            <thead>
              <tr className="bg-[#F8FAFC] dark:bg-[#121212] border-b border-gray-100 dark:border-white/5">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Entity</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-white/5">
              {transactions.slice(0, 3).map((tx) => {
                const Icon = iconMap[tx.icon] || ShoppingCart;
                return (
                  <tr key={tx.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-xs text-gray-500 dark:text-gray-400 font-medium">{tx.date}</td>
                    <td className="px-6 py-4 flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded ${tx.iconBg.replace('bg-', 'bg-').concat(' dark:opacity-80 dark:bg-gray-800')} ${tx.iconColor} dark:text-gray-300 flex items-center justify-center shrink-0`}><Icon className="w-4 h-4" /></div>
                      <span className="text-sm font-bold text-[#0F172A] dark:text-gray-200">{tx.merchant}</span>
                    </td>
                    <td className="px-6 py-4"><span className="px-2 py-1 bg-gray-100 dark:bg-[#121212] text-gray-600 dark:text-gray-400 text-[9px] font-bold rounded uppercase">{tx.catMain}</span></td>
                    <td className="px-6 py-4"><span className={`text-sm font-bold ${tx.amountType === 'positive' ? 'text-emerald-600 dark:text-emerald-400' : 'text-[#0F172A] dark:text-gray-200'}`}>{tx.amount}</span></td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-[10px] font-bold rounded-full border ${tx.status === 'Cleared' ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800/50' : 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 border-orange-100 dark:border-orange-800/50'}`}>{tx.status}</span>
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