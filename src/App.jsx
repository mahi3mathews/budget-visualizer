import { useState } from "react";
import "./App.css";
import { AddExpense } from "./features/AddExpense";
import { IncomeCard } from "./features/IncomeCard";
import { ExpenseList } from "./features/ExpenseList";

function App() {
  // Local state for income and expenses
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState([]);

  return (
    <div className="App">
      <div className="header">
        <h1>
          Budget <span className="header-colored">Visualizer</span>
        </h1>
      </div>
      <div className="app-content">
        <div className="c-l">
          <IncomeCard income={income} setIncome={setIncome} />
          {/* <BudgetGraph income={income} expense={expense} /> */}
          <AddExpense expense={expense} setExpense={setExpense} />
        </div>
        <div className="c-r">
          <ExpenseList expense={expense} />
        </div>
      </div>
    </div>
  );
}

export default App;
