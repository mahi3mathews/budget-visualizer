import { useEffect, useState } from "react";
import { ExpenseCard } from "./ExpenseCard";
import { ExpenseFilter } from "./ExpenseFilter";
import { ExpenseSorter } from "./ExpenseSorter";

export function ExpenseList({
  expense,
  onDelete,
  onEdit,
  disableActions,
  filteredExpenses,
  setFilteredExpenses,
}) {
  const expenseFilters = [
    "All",
    ...new Set(expense.map((item) => item.category)),
  ];
  const sortList = ["Recent", "Highest"];

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Recent");

  useEffect(() => {
    setFilteredExpenses(
      expense.filter(
        (e) => selectedFilter === "All" || e.category === selectedFilter,
      ),
    );
  }, [selectedFilter, expense]);

  useEffect(() => {
    setFilteredExpenses([
      ...expense.sort((a, b) => {
        if (selectedSort === "Recent") {
          return b.date - a.date;
        } else {
          return b.amount - a.amount;
        }
      }),
    ]);
  }, [selectedSort, expense]);

  return (
    <div className="expense-list">
      <div className="expense-list-header">
        <h2>Expenses</h2>
        <ExpenseSorter
          sortList={sortList}
          onSort={setSelectedSort}
          selectedSort={selectedSort}
        />
      </div>

      <ExpenseFilter
        filters={expenseFilters}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />

      {filteredExpenses.map((e) => (
        <ExpenseCard
          expense={e}
          onEdit={onEdit}
          onDelete={onDelete}
          disableActions={disableActions}
        />
      ))}

      {filteredExpenses.length === 0 && (
        <div className="no-expenses">
          <p>💰</p>
          <b>Your wallet is full!</b>
          <p>Add an expense to get started!</p>
        </div>
      )}
    </div>
  );
}
