export default function Dashboard({ incomes, expenses, deleteIncome, deleteExpense }) {
    return (
      <section className="dashboard">
        <div className="income-list card">
          <h2>Income</h2>
          {incomes.length === 0 && <p>No income entries yet.</p>}
          <ul>
            {incomes.map(({ id, description, amount, category }) => (
              <li key={id}>
                ({category}): ${amount.toFixed(2)}{' '}
                <button onClick={() => deleteIncome(id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="expense-list card">
          <h2>Expenses</h2>
          {expenses.length === 0 && <p>No expense entries yet.</p>}
          <ul>
            {expenses.map(({ id, description, amount, category }) => (
              <li key={id}>
               ({category}): ${amount.toFixed(2)}{' '}
                <button onClick={() => deleteExpense(id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  