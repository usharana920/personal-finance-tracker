import { useState } from 'react';

export default function ExpenseForm({ addExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [error, setError] = useState('');

  const categories = ['Food', 'Transport', 'Entertainment', 'Bills', 'Other'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || isNaN(amount) || Number(amount) <= 0) {
      setError('Please enter valid description and amount');
      return;
    }
    addExpense({
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category,
    });
    setDescription('');
    setAmount('');
    setCategory('Food');
    setError('');
  };

  return (
    <form className="form card" onSubmit={handleSubmit}>
      <h3>Add Expense</h3>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
}
