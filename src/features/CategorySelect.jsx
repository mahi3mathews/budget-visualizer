import { Card } from "../components/Card";
import categories from "../constants/categories.json";
export function CategorySelect({ selectedCategory, onChange }) {
  return (
    <div className="category-select">
      {categories.map((category) => (
        <Card
          key={category}
          className={`category-button  ${selectedCategory === category ? "active" : ""}`}
          onClick={() => onChange(category)}
        >
          <img
            src={`/assets/${category.toLowerCase()}-category.svg`}
            className="category-icon"
          />
          <span>{category}</span>
        </Card>
      ))}
    </div>
  );
}
