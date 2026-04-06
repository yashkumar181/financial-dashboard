# 🏛️ Fiscal Clarity | Premium Financial Dashboard

> **The Precision Curator.** A high-end, highly interactive frontend application designed for comprehensive personal wealth, liability, and goal management.

![Fiscal Clarity Banner](https://via.placeholder.com/1200x400/0a0a0a/ffffff?text=Fiscal+Clarity+-+Premium+Financial+Dashboard)

Fiscal Clarity (formerly Shyara) is a modern, responsive Single Page Application (SPA) built with React and Tailwind CSS. Moving beyond standard budgeting apps, it acts as a "Fiscal Command Center," offering surgical oversight over liquid assets, credit liabilities, investment portfolios, and strategic life goals.

## ✨ Key Features & Architecture

### 🧭 Global UI & Experience
* **Premium Dark/Light Mode:** Seamless theme switching featuring a custom `#0a0a0a` pitch-black dark mode and elevated `#121212` cards.
* **Global Command Palette (`Cmd + K`):** A spotlight-style search overlay powered by React Portals, allowing instantaneous navigation across the app and quick-action triggers.
* **Fluid Page Transitions:** Custom CSS keyframe animations wrapper (`<PageTransition />`) ensuring smooth, native-feeling route changes.
* **Responsive Architecture:** Dual-navigation setup featuring a robust desktop sidebar and a sleek mobile slide-out menu with a hamburger toggle.
* **Global State Export:** A one-click administrative tool in the Sidebar to serialize and export the entire React Context state into a `.json` backup file.

### 🎯 Gamified Strategic Goals (Newly Rebuilt)
* **The "Golden State":** When a financial goal reaches 100% funding, the UI dynamically transitions into a premium Gold/Amber theme to celebrate the achievement.
* **Contribution Tracking:** Users can add funds dynamically, with the app generating a timestamped "Past Contributions" ledger for every goal.
* **Priority Tagging:** Assign High, Medium, or Low priorities with color-coded UI badges.

### 🎯 Budget Command Center
* **Unified Spending Oversight:** Combines total monthly budget tracking with a detailed "Cost by Category" progress breakdown.
* **Envelope Budgeting:** Tracks category-specific thresholds (Housing, Leisure, Groceries) with real-time visual progress bars and color-coded warning limits when spending velocity exceeds projections.

### 🏦 Accounts & Liabilities
* **Dynamic Asset Tracking:** Full CRUD capabilities to link both liquid accounts (Bank/Digital Wallets) and Credit Liabilities.
* **Credit Utilization Radials:** Custom SVG radial progress indicators mathematically driven by current due vs. total credit limit.
* **Simulated Reconciliation:** Functional UI states for account syncing and audit logging.

### 📈 Investment Portfolio
* **Holdings Management:** Track Equities, Mutual Funds, Commodities, and Real Estate. Automatically recalculates Total Invested, Current Value, and Portfolio XIRR.
* **Live Filtering:** Search through active holdings or sort by Name, Value, or Total Gain.
* **Automations:** UI to set up SIPs (Systematic Investment Plans) and monitor dividend/rebalance histories.

### 🔄 Subscription Command
* **Monthly Burn Calculator:** Instantly recalculates total recurring costs as services are added or removed.
* **Subscription Audit:** Intelligently flags duplicate charges and highlights unused services to optimize cash flow.

### 🧾 Transaction Ledger
* **Slide-Out Action Sheets:** Uses React Portals to trigger a sleek, right-anchored slide-out sheet for adding new ledger entries.
* **CSV Export:** Client-side generation of `.csv` ledgers for external accounting.

---

## 🛠️ Tech Stack

* **Core:** React 18 (Vite)
* **Routing:** React Router DOM v6
* **Styling:** Tailwind CSS v3 (Utility-first, heavily customized color palette)
* **Icons:** Lucide React (Consistent, stroke-based iconography)
* **State Management:** React Hooks & Context API (`FinanceContext.jsx`)
* **Components:** Custom-built accessible components (Modals, Portals, Command Menus, SVG Charts) without reliance on heavy UI libraries.

---

## 📂 Project Structure

```text
fiscal-clarity/
├── public/                 # Static assets (Favicon)
├── src/
│   ├── components/         # Reusable UI elements
│   │   ├── charts/         # Custom SVG Line/Area charts
│   │   ├── CommandMenu.jsx # Cmd+K Palette
│   │   ├── Header.jsx      # Top navigation, Mobile Toggle, & Theme toggle
│   │   ├── Sidebar.jsx     # Desktop/Mobile routing & Global Export
│   │   └── TransactionSheet.jsx # React Portal slide-out forms
│   ├── context/
│   │   └── FinanceContext.jsx # Global State & Mock Data provider
│   ├── data/
│   │   └── mockData.js     # Initial JSON structures
│   ├── pages/              # Route-level components
│   │   ├── Dashboard.jsx
│   │   ├── Accounts.jsx
│   │   ├── Transactions.jsx
│   │   ├── Subscriptions.jsx
│   │   ├── Investments.jsx
│   │   ├── Budget.jsx      # Budget & Category Tracking
│   │   └── Goals.jsx       # Gamified Goal Funding
│   ├── App.jsx             # Router configuration
│   └── index.css           # Tailwind directives & custom animations
├── package.json
├── tailwind.config.js      # Custom theme definitions
└── vite.config.js
---

## 