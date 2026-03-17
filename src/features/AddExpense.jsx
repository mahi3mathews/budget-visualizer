import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Card } from "../components/Card";
import { CategorySelect } from "./CategorySelect";
import { useState } from "react";

export function AddExpense({ expense, setExpense }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState("");
  // Handles form submission to add a new expense
  const handleSubmit = (e) => {
    console.log("handle submit called", e.target);
    e.preventDefault();
    const formData = new FormData(e.target);

    // Setting id as length of expense array, can be changed to uuid or timestamp
    const expenseData = {
      name: formData.get("name"),
      amount: parseFloat(formData.get("amount")),
      date: new Date(),
      id: expense.length,
      category: selectedCategory || "Uncategorized",
    };
    if (
      formData.get("name") === "" ||
      formData.get("amount") === "" ||
      !selectedCategory
    )
      setError("Please fill all the fields");

    setExpense((prev) => [...prev, expenseData]);
    e.target.reset();
  };

  return (
    <Card className="add-expense">
      <form onSubmit={handleSubmit}>
        <div className="add-expense-inputs">
          <div className="add-expense-field">
            <label> Expense name</label>
            <Input type="text" name="name" placeholder="e.g Netflix" required />
          </div>
          <div className="add-expense-field">
            <label> Amount</label>
            <Input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              required
            />
          </div>
        </div>
        <div className="add-expense-category">
          <label> Category</label>
          <CategorySelect
            selectedCategory={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>
        <Button type="submit" theme="primary" error={error}>
          + Add Expense
        </Button>
      </form>
    </Card>
  );
}
