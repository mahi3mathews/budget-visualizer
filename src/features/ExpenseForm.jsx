import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Card } from "../components/Card";
import { CategorySelect } from "./CategorySelect";
import { useEffect, useState } from "react";

export function ExpenseForm({
  expense,
  setExpense,
  editExpense,
  setEditExpense,
}) {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    category: "",
  });

  useEffect(() => {
    if (editExpense) {
      setFormData(expense[editExpense]);
    }
  }, [editExpense, expense]);

  // Handles form submission to add a new expense
  const handleSubmit = (e) => {
    e.preventDefault();
    // Setting id as length of expense array, can be changed to uuid or timestamp
    const expenseData = {
      date: new Date(),
      id: editExpense ?? expense.length,
      ...formData,
    };
    // Basic validation to check if all fields are filled
    if (
      formData.name === "" ||
      formData.amount === "" ||
      formData.category === ""
    ) {
      setError("Please fill all the fields");
      return;
    }
    if (editExpense) {
      setExpense((prev) =>
        prev.map((e) => (e.id === parseInt(editExpense) ? expenseData : e)),
      );
    } else setExpense((prev) => [...prev, expenseData]);

    // Reset the add expense form
    setFormData({ name: "", amount: "", category: "" });
    setError("");
    setEditExpense(null);
  };

  const handleChange = (value, field) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className={`add-expense ${editExpense ? "edit" : ""}`}>
      <form onSubmit={handleSubmit}>
        <div className="add-expense-inputs">
          <div className="add-expense-field">
            <span className="expense-form-label"> Name</span>
            <Input
              type="text"
              name="name"
              placeholder="e.g Netflix"
              required
              onChange={(e) => handleChange(e?.target?.value, "name")}
              value={formData.name}
            />
          </div>
          <div className="add-expense-field">
            <span className="expense-form-label"> Amount</span>
            <Input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              required
              onChange={(e) =>
                handleChange(parseFloat(e?.target?.value), "amount")
              }
              value={formData.amount}
            />
          </div>
        </div>
        <div className="add-expense-category">
          <label> Category</label>
          <CategorySelect
            selectedCategory={formData.category}
            onChange={(category) => handleChange(category, "category")}
          />
        </div>
        <Button type="submit" theme="primary" error={error}>
          {editExpense ? "Save" : "+ Add Expense"}
        </Button>
      </form>
    </Card>
  );
}
