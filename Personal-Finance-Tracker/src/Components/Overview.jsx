export default function Overview({ incomes, expenses, savingsGoal }) {
    const totalIncome = incomes.reduce((sum, i) => sum + i.amount, 0);
    const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
    const netBalance = totalIncome - totalExpenses;
  
    const progress = savingsGoal > 0 ? Math.min((netBalance / savingsGoal) * 100, 100) : 0;
  
    return (
      <section className="overview card">
        <h3>Financial Overview</h3>
        <p>Total Income: ${totalIncome.toFixed(2)}</p>
        <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
        <p>Net Balance: ${netBalance.toFixed(2)}</p>
        {savingsGoal > 0 && (
          <>
            <p>Savings Goal: ${savingsGoal.toFixed(2)}</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
            <p>Progress: {progress.toFixed(2)}%</p>
          </>
        )}
      </section>
    );
  }
  