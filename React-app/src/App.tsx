import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("Hello")} color="primary">
        Click me
      </Button>
    </div>
  );
}

export default App;
