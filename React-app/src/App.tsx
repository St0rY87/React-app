import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import Like from "./components/Like/Like";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  function toggleAlert() {
    setAlertVisibility((alert) => !alert);
  }

  const items = ["Moscow", "New-York", "Detroit", "Majorka"];

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
      {/* <ListGroup
        items={items}
        heading="List"
        onSelectItem={(item) => console.log(item)}
      />
      <Button onClick={() => console.log("hello")} color={"primary"}>
        Hello
      </Button> */}
      <Like onClick={() => console.log("click")} />
    </div>
  );
}

export default App;
