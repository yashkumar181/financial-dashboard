import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useFinance } from '../context/FinanceContext';

const AddTransactionModal = ({ isOpen, onClose }) => {
  const { transactions, setTransactions } = useFinance();
  const [merchant, setMerchant] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Personal');
  const [type, setType] = useState('negative');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dynamically assign icon and colors based on category selection
    let iconStr = 'ShoppingCart';
    let iconBg = 'bg-blue-50';
    let iconColor = 'text-blue-500';

    if (category === 'Leisure') { iconStr = 'Tv'; iconBg = 'bg-gray-100'; iconColor = 'text-gray-800'; }
    if (category === 'Travel') { iconStr = 'Home'; iconBg = 'bg-red-50'; iconColor = 'text-red-500'; }

    // Construct the new transaction object
    const newTx = {
      id: Date.now(), // Generate a unique ID
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      merchant: merchant,
      desc: 'Manual Entry',
      icon: iconStr,
      iconBg: iconBg,
      iconColor: iconColor,
      catMain: category,
      catSub: 'General',
      source: 'Manual Entry',
      sourceLast: '0000',
      sourceIcon: 'CreditCard',
      amount: `${type === 'negative' ? '-' : '+'}$${parseFloat(amount).toFixed(2)}`,
      amountType: type,
      tag1: { label: 'NEW', active: true, color: 'bg-green-100 text-green-700' },
      tag2: null,
      status: 'Cleared'
    };

    // Push new transaction to the top of the context array
    setTransactions([newTx, ...transactions]);
    
    // Reset and close
    setMerchant('');
    setAmount('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
        
        <div className="flex justify-between items-center p-6 border-b border-gray-50">
          <h2 className="text-lg font-bold text-[#0F172A]">Add New Transaction</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Merchant Name</label>
            <input 
              type="text" 
              required
              value={merchant}
              onChange={(e) => setMerchant(e.target.value)}
              className="w-full px-4 py-3 bg-[#F4F7FA] border border-transparent focus:border-[#0A3D8B] rounded-lg text-sm font-semibold text-[#0F172A] outline-none transition-colors"
              placeholder="e.g. Starbucks"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Amount ($)</label>
              <input 
                type="number" 
                required
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 bg-[#F4F7FA] border border-transparent focus:border-[#0A3D8B] rounded-lg text-sm font-semibold text-[#0F172A] outline-none transition-colors"
                placeholder="0.00"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Type</label>
              <select 
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-4 py-3 bg-[#F4F7FA] border border-transparent focus:border-[#0A3D8B] rounded-lg text-sm font-semibold text-[#0F172A] outline-none transition-colors appearance-none"
              >
                <option value="negative">Expense</option>
                <option value="positive">Income</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Category</label>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 bg-[#F4F7FA] border border-transparent focus:border-[#0A3D8B] rounded-lg text-sm font-semibold text-[#0F172A] outline-none transition-colors appearance-none"
            >
              <option value="Personal">Personal</option>
              <option value="Leisure">Leisure</option>
              <option value="Travel">Travel</option>
            </select>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full bg-[#0A3D8B] text-white font-bold text-sm py-3 rounded-lg hover:bg-[#082f6b] transition-colors shadow-md"
            >
              Save Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionModal;