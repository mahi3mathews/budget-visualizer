import { ExpenseCard } from "./ExpenseCard";

export function ExpenseList({ expense }) {
  return (
    <div className="expense-list">
      {expense.map((e) => (
        <ExpenseCard expense={e} />
      ))}
    </div>
  );
}
