import React from "react";
import categories from "../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className="mb-3">
      <select
        onChange={(e) => {
          onSelectCategory(e.target.value);
        }}
        className="form-select"
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={crypto.randomUUID()} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
