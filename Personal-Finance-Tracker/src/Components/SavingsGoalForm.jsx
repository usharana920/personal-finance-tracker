import { useState } from 'react';

export default function SavingsGoalForm({ setSavingsGoal }) {
  const [goal, setGoal] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!goal || isNaN(goal) || Number(goal) <= 0) {
      setError('Please enter a valid savings goal');
      return;
    }
    setSavingsGoal(parseFloat(goal));
    setGoal('');
    setError('');
  };

  return (
    <form className="form card" onSubmit={handleSubmit}>
      <h3>Set Savings Goal</h3>
      {error && <p className="error">{error}</p>}
      <input
        type="number"
        placeholder="Savings Goal Amount"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <button type="submit">Set Goal</button>
    </form>
  );
}
