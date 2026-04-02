# Finance Dashboard UI

A responsive and interactive Finance Dashboard built using React.
This project demonstrates frontend development skills including component design, state management, data visualization, and user interaction handling.

The dashboard allows users to view financial summaries, manage transactions, and gain insights into spending patterns through charts and analytics.

# Live Demo
 https://finance-dashboard-cyan-six.vercel.app

# Live Features
Dashboard overview with financial summary cards
Spending breakdown visualization using charts
Transaction management (Add, Edit, Delete)
Search and filtering functionality
Role-based UI (Viewer and Admin)
Insights section with financial analytics
Export transactions to CSV
Local storage persistence
Responsive layout for different screen sizes

# Tech Stack

Frontend Framework:
React
JavaScript (ES6)

Styling:

Tailwind CSS

Charts:

Recharts

State Management:

React Context API
useState
useEffect

Data Handling:

Local Storage

Development Tool:

Vite

# Project Structure

finance-dashboard/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SummaryCards.jsx
│   │   ├── Charts.jsx
│   │   ├── Transactions.jsx
│   │   └── Insights.jsx
│   │
│   ├── context/
│   │   └── AppContext.jsx
│   │
│   ├── data/
│   │   └── transactions.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md

# Installation and Setup

Clone the repository:

git clone  https://github.com/yashu1714/finance-dashboard.git

Navigate to project directory:

cd finance-dashboard

Install dependencies:

npm install

Start development server:

npm run dev

Open in browser:

http://localhost:5173

# Core Functionalities
1. Dashboard Overview

Displays key financial metrics:

Total Balance
Total Income
Total Expenses

These values update automatically based on transactions.

2. Charts and Visualizations

Two types of visualizations are implemented:

Spending Breakdown

Pie chart showing:

Food
Shopping
Transport
Balance Trend

Line chart showing balance changes across months.

3. Transactions Management

Users can:

Add new transactions
Edit existing transactions
Delete transactions
Search transactions by category

Transaction details include:

Date
Amount
Category
Type (Income / Expense)
4. Role-Based UI

Two user roles are simulated:

Viewer:

Can view dashboard and transactions

Admin:

Can add transactions
Can edit transactions
Can delete transactions

Role can be switched using a dropdown in the header.

5. Insights Section

Provides quick financial analysis:

Highest spending category
Total income
Total expenses
Total number of transactions

6. Data Persistence

Transactions are stored using:  "localStorage"

This ensures data remains available after page refresh.

# Design Decisions

Component-Based Architecture:

The application is divided into reusable components to improve maintainability and scalability.

Context API for State Management:

Used to manage:

Transactions
User role
Search filtering

Local Storage:

Implemented to simulate persistent data without backend integration.

Responsive Layout:

Tailwind CSS grid system ensures compatibility across:

Desktop
Tablet
Mobile
# Assumptions
Data is static and stored locally
No backend or authentication is required
Role-based access is simulated on the frontend

# Future Improvements
Backend API integration
Authentication and authorization
Advanced filtering and sorting
Pagination
Dark mode toggle
Data visualization enhancements

# Author
Name: N Yaswanth
Role: Frontend Developer (Fresher)
