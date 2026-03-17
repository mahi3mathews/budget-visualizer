import { Button } from "../components/Button";

export function ExpenseCard({ expense, onEdit, onDelete }) {
  const { name, amount, date, id } = expense;
  return (
    <div className="expense-card" key={id}>
      <div className="expense-details">
        <h3>{name}</h3>
        <p>${amount.toFixed(2)}</p>
        <span>{date.toLocaleDateString()}</span>
      </div>
      <div className="expense-actions">
        <Button theme="secondary" onClick={() => onEdit(id)}>
          Edit
        </Button>
        <Button theme="danger" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}
