import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

const connect = () => console.log("connecting");
const disconnect = () => console.log("disconnecting");

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  // const [expenses, setExpenses] = useState([
  //   { id: 1, description: "aaa", amount: 10, category: "Utilities" },
  //   { id: 2, description: "bbb", amount: 10, category: "Groceries" },
  //   { id: 3, description: "ccc", amount: 10, category: "Utilities" },
  //   { id: 4, description: "ddd", amount: 10, category: "Entertainment" },
  // ]);

  // const [selectedCategory, setSelectedCategory] = useState("");

  // const deleteItem = (id: number) => {
  //   setExpenses(expenses.filter((expense) => expense.id !== id));
  // };

  // const visibleExpenses = selectedCategory
  //   ? expenses.filter((expense) => expense.category === selectedCategory)
  //   : expenses;

  useEffect(() => {
    connect();

    return () => disconnect();
  });
  // const [category, setCategory] = useState("");
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
        {/* <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1 }])} />
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList expenses={visibleExpenses} onDelete={deleteItem} />
       */}
        {/* <select onChange={e => setCategory( e.target.value)} className="form-select">
                <option value=""></option>
                <option value="Clothing">Clothing</option>
                <option value="Household">Household</option>
            </select> */}
        {/* <ProductList category={category} /> */}
      </ul>
    </>
  );
}

export default App;
