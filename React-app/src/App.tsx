import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Groceries" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Entertainment" },
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
      <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1 }])} />
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList expenses={visibleExpenses} onDelete={deleteItem} />
      
    </div>
  );
}

export default App;
