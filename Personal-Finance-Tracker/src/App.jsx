import { useState } from 'react';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import IncomeForm from './components/IncomeForm';
import ExpenseForm from './Components/ExpenseForm';
import SavingsGoalForm from './components/SavingsGoalForm';
import Overview from './Components/Overview';
import CategorySummary from './Components/CategorySummary';
import './App.css';

function App() {
  // State for income and expense entries, and savings goal
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [savingsGoal, setSavingsGoal] = useState(0);

  // Add income entry
  const addIncome = (income) => {
    setIncomes([...incomes, income]);
  };

  // Add expense entry
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  // Delete income entry by id
  const deleteIncome = (id) => {
    setIncomes(incomes.filter((item) => item.id !== id));
  };

  // Delete expense entry by id
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Dashboard
          incomes={incomes}
          expenses={expenses}
          deleteIncome={deleteIncome}
          deleteExpense={deleteExpense}
        />
        <div className="forms-overview">
          <IncomeForm addIncome={addIncome} />
          <ExpenseForm addExpense={addExpense} />
          <SavingsGoalForm setSavingsGoal={setSavingsGoal} />
          <Overview
            incomes={incomes}
            expenses={expenses}
            savingsGoal={savingsGoal}
          />
          <CategorySummary incomes={incomes} expenses={expenses} />
        </div>
      </div>
    </div>
  );
}

export default App;
