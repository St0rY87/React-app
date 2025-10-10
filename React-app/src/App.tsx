import { useState } from "react";
import Form from "./components/Form";
import "./index.css";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const deleteItem = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList expenses={visibleExpenses} onDelete={deleteItem} />
    </div>
  );
}

export default App;
