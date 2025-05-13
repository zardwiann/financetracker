
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/login/login';
import NoPage from './component/nopage/nopage';
import Sidebar from './component/sidebar/sidebar';
import BudgetManagement from './component/budgetManagement/budgetmanagement';
import Dashboard from './component/dashboard/dashboard';
import IncomeManagement from './component/IncomeManagement/income';
import ExpenseManagement from './component/ExpenseManagement/expense';
import Transaction from './component/transaction/transaction';
import ScheduledTransaction from './component/transaction/scheduletransaction';
import Profile from './component/setting/profile';
export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route index element={<Login />} />
        <Route path="/dashboard" element={<Sidebar />}>
          <Route  index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="budget" element={<BudgetManagement />} />
          <Route path="income" element={<IncomeManagement />} />
          <Route path="expense" element={<ExpenseManagement />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="scheduletransaction" element={<ScheduledTransaction />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NoPage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
     
    </BrowserRouter >
  );
}


