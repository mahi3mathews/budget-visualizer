import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Card } from "../components/Card";

export function IncomeCard({ income, setIncome }) {
  const [isEdit, setIsEdit] = useState(false);
  const [changedIncome, setChangedIncome] = useState(income);

  const handleChange = (value) => {
    // Check if the value is a valid number
    if (isNaN(value)) return;
    setChangedIncome(value);
  };

  // Save the input value and exit edit mode
  const handleInputSave = () => {
    setIncome(changedIncome);
    setIsEdit(false);
  };

  return (
    <Card className="income-card">
      <h2>Monthly Income</h2>
      <h3>${income.toFixed(2)}</h3>

      {isEdit ? (
        <div className="edit-income">
          <Input
            type="number"
            value={changedIncome}
            onChange={(e) => handleChange(parseFloat(e.target.value))}
            placeholder="Enter your monthly income"
          />
          <Button theme="primary" onClick={() => handleInputSave()}>
            Save
          </Button>
          {/* TDL: Add a cancel button */}
        </div>
      ) : (
        <Button theme="secondary" onClick={() => setIsEdit(true)}>
          Edit
        </Button>
      )}
    </Card>
  );
}
