import React, { useState } from 'react';

const LineChart = ({ data }) => {
  const [hoverPoint, setHoverPoint] = useState(null);

  const maxVal = Math.max(...data.map(d => Math.max(d.income, d.expense))) * 1.1; 
  const svgWidth = 600;
  const svgHeight = 200;
  const xMap = (idx) => (idx / (data.length - 1)) * svgWidth;
  const yMap = (val) => svgHeight - (val / maxVal) * svgHeight;
  const pointsIncome = data.map((d, i) => `${xMap(i)},${yMap(d.income)}`).join(' ');
  const pointsExpense = data.map((d, i) => `${xMap(i)},${yMap(d.expense)}`).join(' ');

  return (
    <div className="flex-1 w-full relative min-h-[220px]" onMouseLeave={() => setHoverPoint(null)}>
      <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full overflow-visible" preserveAspectRatio="none">
        {[0, 1, 2, 3].map(i => <line key={i} x1="0" y1={(i * svgHeight) / 3} x2={svgWidth} y2={(i * svgHeight) / 3} stroke="currentColor" className="text-gray-100 dark:text-white/5" strokeWidth="1" />)}
        <polyline points={pointsIncome} fill="none" stroke="currentColor" className="text-[#0A3D8B] dark:text-gray-400" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points={pointsExpense} fill="none" stroke="currentColor" className="text-gray-300 dark:text-gray-600" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        
        {data.map((d, i) => (
          <g key={i}>
            <circle cx={xMap(i)} cy={yMap(d.income)} r="4" fill="currentColor" className="text-[#0A3D8B] dark:text-gray-400" />
            <circle cx={xMap(i)} cy={yMap(d.expense)} r="4" fill="currentColor" className="text-gray-400 dark:text-gray-600" />
          </g>
        ))}
        
        {data.map((d, i) => {
          const widthPerZone = svgWidth / Math.max(1, data.length - 1);
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
        {data.map((d, i) => (
          <span key={i} className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest transform -translate-x-1/2" style={{ position: 'absolute', left: `${(xMap(i) / svgWidth) * 100}%` }}>{d.label}</span>
        ))}
      </div>
      {hoverPoint && (
        <div className="absolute bg-[#0F172A] dark:bg-[#121212] text-white p-3 rounded-xl shadow-2xl text-xs z-10 pointer-events-none transition-all duration-100 ease-out min-w-[120px] border dark:border-white/10" style={{ left: `${(hoverPoint.x / svgWidth) * 100}%`, top: `${Math.min(hoverPoint.yInc, hoverPoint.yExp) - 15}px`, transform: `translate(${hoverPoint.index === 0 ? '0%' : hoverPoint.index === data.length - 1 ? '-100%' : '-50%'}, -100%)` }}>
          <p className="font-bold mb-2 border-b border-gray-700 dark:border-gray-800 pb-2 text-[10px] uppercase tracking-widest text-gray-300 dark:text-gray-400">{hoverPoint.label}</p>
          <div className="flex items-center justify-between space-x-4 mb-2"><span className="flex items-center text-blue-300 dark:text-gray-400"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-gray-400 mr-2"></div>Income</span><span className="font-bold text-sm">${hoverPoint.income.toLocaleString()}</span></div>
          <div className="flex items-center justify-between space-x-4"><span className="flex items-center text-gray-400"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></div>Expense</span><span className="font-bold text-sm">${hoverPoint.expense.toLocaleString()}</span></div>
        </div>
      )}
    </div>
  );
};

export default LineChart;