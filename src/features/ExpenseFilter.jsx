import { Pills } from "../components/Pills";

export function ExpenseFilter({ filters, selectedFilter, onFilterChange }) {
  return (
    <div className="expense-filter">
      {filters.map((filter) => (
        <Pills
          key={filter}
          className={`expense-filter-button ${
            selectedFilter === filter ? "active" : ""
          }`}
          onClick={() => onFilterChange(filter)}
        >
          {filter !== "All" && (
            <img
              src={`/assets/${filter.toLowerCase()}-category.svg`}
              className="expense-filter-icon"
            />
          )}
          {filter}
        </Pills>
      ))}
    </div>
  );
}
