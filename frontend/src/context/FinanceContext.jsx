import React, { createContext, useContext, useState } from 'react';
import { CreditCard, Laptop, Home, ShoppingCart, Tv, Landmark as BankIcon, CreditCard as CardIcon } from 'lucide-react';

// Create the context
const FinanceContext = createContext();

// Create a custom hook so we can easily use this data in any file
export const useFinance = () => useContext(FinanceContext);

export const FinanceProvider = ({ children }) => {
  // 1. Global Role State (Admin vs Viewer)
  const [role, setRole] = useState('Admin');

  // 2. Global Transactions Data
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: 'Oct 24, 2023',
      time: '09:42 AM',
      merchant: 'Apple Store Soho',
      desc: 'Electronic Purchase',
      icon: Laptop,
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-800',
      catMain: 'Leisure',
      catSub: 'Electronics',
      source: 'Amex Gold',
      sourceLast: '1004',
      sourceIcon: CreditCard,
      amount: '-$1,299.00',
      amountType: 'negative',
      tag1: { label: 'ESSENTIAL', active: true, color: 'bg-[#FFEFEA] text-[#991B1B]' },
      tag2: { label: 'WANT', active: false, color: 'text-gray-300' },
      status: 'Cleared'
    },
    {
      id: 2,
      date: 'Oct 22, 2023',
      time: '02:15 PM',
      merchant: 'Airbnb Refund',
      desc: 'Travel Credit',
      icon: Home,
      iconBg: 'bg-red-50',
      iconColor: 'text-red-500',
      catMain: 'Travel',
      catSub: 'Lodging',
      source: 'Chase Sapphire',
      sourceLast: '4291',
      sourceIcon: CreditCard,
      amount: '+$452.20',
      amountType: 'positive',
      subAmount: 'REFUND PROCESSED',
      tag1: { label: 'NON-ESSENTIAL', active: false, color: 'text-gray-300' },
      tag2: null,
      status: 'Cleared'
    },
    {
      id: 3,
      date: 'Oct 21, 2023',
      time: '11:00 AM',
      merchant: 'Whole Foods Market',
      desc: 'Groceries',
      icon: ShoppingCart,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-500',
      catMain: 'Personal',
      catSub: 'Food',
      source: 'Amex Gold',
      sourceLast: '1004',
      sourceIcon: CreditCard,
      amount: '-$84.12',
      amountType: 'negative',
      tag1: { label: 'ESSENTIAL', active: true, color: 'bg-[#FFEFEA] text-[#991B1B]' },
      tag2: { label: 'WANT', active: false, color: 'text-gray-300' },
      status: 'Pending'
    }
  ]);

  return (
    <FinanceContext.Provider value={{ role, setRole, transactions, setTransactions }}>
      {children}
    </FinanceContext.Provider>
  );
};