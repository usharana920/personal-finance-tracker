export default function CategorySummary({ incomes, expenses }) {
  // Summarize incomes by category
  const incomeSummary = incomes.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.amount;
    return acc;
  }, {});

  // Summarize expenses by category
  const expenseSummary = expenses.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.amount;
    return acc;
  }, {});

  return (
    <section className="category-summary card">
      <h3>Category Summary</h3>
      <div>
        <h4>Income</h4>
        {Object.keys(incomeSummary).length === 0 && <p>No income entries yet.</p>}
        <ul>
          {Object.entries(incomeSummary).map(([category, amount]) => (
            <li key={category}>
              {category}: ${amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Expenses</h4>
        {Object.keys(expenseSummary).length === 0 && <p>No expense entries yet.</p>}
        <ul>
          {Object.entries(expenseSummary).map(([category, amount]) => (
            <li key={category}>
              {category}: ${amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
