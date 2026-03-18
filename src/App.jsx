import { useState } from "react";
import "./App.css";
import { ExpenseForm } from "./features/ExpenseForm";
import { IncomeCard } from "./features/IncomeCard";
import { ExpenseList } from "./features/ExpenseList";

function App() {
  // Local state for income and expenses
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState([]);
  const [editExpense, setEditExpense] = useState(null);
  const handleDelete = (id) => {
    setExpense((prev) => prev.filter((e) => e.id !== id));
  };

  const handleEdit = (id) => {
    setEditExpense(`${id}`);
  };

  return (
    <div className="App">
      <div className="header">
        <h2>
          Budget <span className="header-colored">Visualizer</span>
        </h2>
      </div>
      <div className="app-content">
        <div className="c-l">
          <IncomeCard income={income} setIncome={setIncome} />
          {/* <BudgetGraph income={income} expense={expense} /> */}
          <ExpenseForm
            expense={expense}
            setExpense={setExpense}
            editExpense={editExpense}
            setEditExpense={setEditExpense}
          />
        </div>
        <div className="c-r">
          <ExpenseList
            expense={expense}
            disableActions={editExpense !== null}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
