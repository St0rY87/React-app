import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  function toggleAlert() {
    setIsOpenAlert((alert) => !alert);
  }

  return (
    <div>
      {isOpenAlert && <Alert onToggleAlert={toggleAlert}>I'm ALert </Alert>}
      <Button onClick={toggleAlert} color="primary">
        {isOpenAlert ? "Close" : "Open"}
      </Button>
    </div>
  );
}

export default App;
