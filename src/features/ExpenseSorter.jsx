import { Pills } from "../components/Pills";

export function ExpenseSorter({ selectedSort, onSort, sortList }) {
  return (
    <div className="expense-sorter">
      {sortList.map((item) => (
        <Pills
          key={item}
          className={`expense-sorter-button ${
            selectedSort === item ? "active" : ""
          }`}
          variant="transparent"
          onClick={() => onSort(item)}
        >
          {item}
        </Pills>
      ))}
    </div>
  );
}
