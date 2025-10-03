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

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Jhon",
    },
  });

  const handleClick = (name: string) => {
    setGame({ ...game, player: { ...game.player, name } });
  };

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
      <button onClick={() => handleClick("Jora")}>{game.player.name}</button>
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
