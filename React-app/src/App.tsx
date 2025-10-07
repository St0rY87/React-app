import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import Like from "./components/Like/Like";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  // const [alertVisible, setAlertVisibility] = useState(false);
  // function toggleAlert() {
  //   setAlertVisibility((alert) => !alert);
  // }
  // const items = ["Moscow", "New-York", "Detroit", "Majorka"];

  // const [tags, setTags] = useState(["happy", "cheerful", "something"]);

  // //update

  // setTags([...tags, "confident"]);

  // //remove

  // setTags(tags.filter((tag) => tag !== "something"));

  // //update

  // setTags(tags.map((tag) => (tag === "something" ? "happiness" : tag)));

  // const [costumer, setCostumer] = useState({
  //   name: "Jhon",
  //   address: {
  //     city: "Majorka",
  //     zipCode: 2351,
  //   },
  // });

  // function handleCustomer(city: string) {
  //   setCostumer({
  //     ...costumer,
  //     address: {
  //       ...costumer.address,
  //       city: city,
  //     },
  //   });
  //   console.log(costumer);
  // }

  // const [bugs, setBugs] = useState([
  //   { id: 1, title: "bug 1", fixed: false },
  //   { id: 2, title: "bug 2", fixed: false },
  // ]);

  // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  // function clearCart() {
  //   setCartItems([]);
  // }

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = (topping: string) => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, topping] });
    console.log(pizza);
  };

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 1", quantity: 1 },
    ],
  });

  const handleClick2 = (id: number) => {
    setCart({
      ...cart,
      items: cart.items.map(
        (item: { id: number; title: string; quantity: number }) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  console.log(cart);
  return (
    // <div>
    //   {alertVisible && (
    //     <Alert onClose={() => setAlertVisibility(false)}>I'm ALert </Alert>
    //   )}
    //   <Button onClick={toggleAlert} color="primary">
    //     {alertVisible ? "Close" : "Open"}
    //   </Button>
    // </div>
    <div>
      <button onClick={() => handleClick(" caramel")}>{pizza.toppings}</button>
      <button onClick={() => handleClick2(2)}>add quantity</button>
      {/* <button onClick={() => handleClick("Jora")}>{game.player.name}</button> */}
      {/* <button onClick={() => handleCustomer("Majorka2")}>Hello</button> */}
      {/* <ListGroup
        items={items}
        heading="List"
        onSelectItem={(item) => console.log(item)}
      />
      <Button onClick={() => console.log("hello")} color={"primary"}>
        Hello
      </Button> */}
      {/* <Like onClick={() => console.log("click")} /> */}

      {/* <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClearCart={clearCart} /> */}
    </div>
  );
}

export default App;
