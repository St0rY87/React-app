import { ListGroup } from "./components/ListGroup";

function App() {
  let items = [
    "Detroit",
    "Majorka",
    "San-Francisko",
    "Moscow",
    "Saint-Petersburg",
  ];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
