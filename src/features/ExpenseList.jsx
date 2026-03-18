import { ExpenseCard } from "./ExpenseCard";

export function ExpenseList({ expense, onDelete, onEdit, disableActions }) {
  return (
    <div className="expense-list">
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
