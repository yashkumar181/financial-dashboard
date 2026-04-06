# 🏛️ FinServe | Premium Financial Dashboard

> **FinServe ** A high-end, highly interactive frontend application designed for personal wealth, liability and goal management.

FinServe is a modern, responsive Single Page Web Application built with React and Tailwind CSS. Moving beyond standard budgeting apps, it acts as a "Fiscal Command Center" offering oversight over liquid assets, credit liabilities, investment portfolios, and strategic life goals.

## ✨ Key Features & Architecture

### 🧭 Global UI & Experience
* **Premium Dark/Light Mode:** Seamless theme switching featuring a custom pitch-black dark mode and elevated cards.
* **Global Command Palette (`Cmd + K`):** A spotlight-style search overlay powered by React Portals, allowing instantaneous navigation across the app and quick-action triggers.
* **Responsive Architecture:** Dual-navigation setup featuring a robust desktop sidebar and a sleek mobile slide-out menu with a hamburger toggle.
* **Global State Export:** A one-click administrative tool in the Sidebar to serialize and export the entire React Context state into a `.csv` backup file.

### 🎯 Gamified Strategic Goals (Newly Rebuilt)
* **The "Golden State":** When a financial goal reaches 100% funding, the UI dynamically transitions into a premium Gold/Amber theme to celebrate the achievement.
* **Contribution Tracking:** Users can add funds dynamically, with the app generating a timestamped "Past Contributions" ledger for every goal.
* **Priority Tagging:** Assign High, Medium, or Low priorities with color-coded UI badges.

### 🎯 Budget Command Center
* **Unified Spending Oversight:** Combines total monthly budget tracking with a detailed "Cost by Category" progress breakdown.
* **Budgeting:** Tracks category-specific thresholds (Housing, Leisure, Groceries) with real-time visual progress bars and color-coded warning limits when spending velocity exceeds projections.

### 🏦 Accounts & Liabilities
* **Dynamic Asset Tracking:** Full CRUD capabilities to link both liquid accounts (Bank/Digital Wallets) and Credit Liabilities.
* **Reconciliation:** Functional UI states for account syncing and audit logging.

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

* **Core:** React
* **Routing:** React Router DOM
* **Styling:** Tailwind CSS v3 (Utility-first, heavily customized color palette)
* **Icons:** Lucide React (Consistent, stroke-based iconography)
* **State Management:** React Hooks & Context API (`FinanceContext.jsx`)
* **Components:** Custom-built accessible components (Modals, Portals, Command Menus, SVG Charts) without reliance on heavy UI libraries.

---

## 📂 Project Structure

```text
fiscal-clarity/
├── public/                        # Static assets (Favicon)
├── src/
│   ├── components/                # Reusable UI elements
│   │   ├── charts/                # Custom SVG Line/Area charts
│   │   ├── CommandMenu.jsx        # Cmd+K Palette
│   │   ├── Header.jsx             # Top navigation, Mobile Toggle, & Theme toggle
│   │   ├── Sidebar.jsx            # Desktop/Mobile routing & Global Export
│   │   └── TransactionSheet.jsx   # React Portal slide-out forms
│   ├── context/
│   │   └── FinanceContext.jsx     # Global State & Mock Data provider
│   ├── data/
│   │   └── mockData.js            # Initial JSON structures
│   ├── pages/                     # Route-level components
│   │   ├── Dashboard.jsx
│   │   ├── Accounts.jsx
│   │   ├── Transactions.jsx
│   │   ├── Subscriptions.jsx
│   │   ├── Investments.jsx
│   │   ├── Budget.jsx             # Budget & Category Tracking
│   │   └── Goals.jsx              # Gamified Goal Funding
│   ├── App.jsx                    # Router configuration
│   └── index.css                  # Tailwind directives & custom animations
├── package.json
├── tailwind.config.js             # Custom theme definitions
└── vite.config.js
```

## 🚀 Getting Started
* **Prerequisites** * Make sure you have Node.js (v16+) and npm installed on your machine.

* **Installation** *
1. * **Clone the repository:** *
```bash
git clone [https://github.com/yashkumar181/financial-dashboard.git](https://github.com/yashkumar181/financial-dashboard.git)
cd finance-dashboard
```

2. * **Install dependencies:** *
```bash
npm install
```

3. * **Start the development server:** *
```bash
npm run dev
```

4. * **Open your browser:** *
Navigate to http://localhost:5173 to view the dashboard.

## 💡 Usage Highlights
* **Trigger the Command Menu:** * Press <kbd>Cmd</kbd> + <kbd>K</kbd> (Mac) or <kbd>Ctrl</kbd> + <kbd>K</kbd> (Windows) anywhere in the app to search pages or trigger actions.

* **Export Data:** * Navigate to the Transactions, Subscriptions, or Investments page to download specific .csv ledgers, or use the "Export Data" button in the Sidebar (Admin mode only) to dump the entire global state to CSV.

* **Fund a Goal:** * Go to the Goals page, click "Add Funds" on an active goal, and watch the UI react. If you reach 100%, enjoy the Golden state transition!

---
Designed & Developed by [Yash Kumar/ @yashkumar181]. Built for the modern architect of personal finance.