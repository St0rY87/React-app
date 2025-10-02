import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup/ListGroup";

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
      <ListGroup
        items={items}
        heading="List"
        onSelectItem={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
