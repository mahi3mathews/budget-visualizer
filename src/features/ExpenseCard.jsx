import { Button } from "../components/Button";
import { Card } from "../components/Card";

export function ExpenseCard({ expense, onEdit, onDelete }) {
  const { name, amount, date, id, category } = expense;
  return (
    <Card className="expense-card" key={id}>
      <div className="expense-details">
        <div className="expense-category">
          <img
            src={`/assets/${category.toLowerCase()}-category.svg`}
            className="category-icon"
          />
        </div>
        <div className="expense-info">
          <p className="expense-name">{name}</p>

          <span>{date.toLocaleDateString()}</span>
        </div>
      </div>
      <div className="expense-card-right">
        <div>
          <p>${amount.toFixed(2)}</p>
        </div>
        <div className="expense-actions">
          <Button theme="transparent" onClick={() => onEdit(id)}>
            <img src="/assets/edit.svg" className="edit-icon" />
          </Button>
          <Button theme="transparent" onClick={() => onDelete(id)}>
            <img src="/assets/delete.svg" className="delete-icon" color="red" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
