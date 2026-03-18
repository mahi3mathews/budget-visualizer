import { ExpenseCard } from "./ExpenseCard";

export function ExpenseList({ expense, onDelete, onEdit, disableActions }) {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>

      {expense.map((e) => (
        <ExpenseCard
          expense={e}
          onEdit={onEdit}
          onDelete={onDelete}
          disableActions={disableActions}
        />
      ))}
    </div>
  );
}
