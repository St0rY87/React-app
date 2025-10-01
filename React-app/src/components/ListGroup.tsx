import { MouseEvent } from "react";

function ListGroup() {
  let items = [
    "Detroit",
    "Majorka",
    "San-Francisko",
    "Moscow",
    "Saint-Petersburg",
  ];

  const handleClick = (e: MouseEvent) => console.log(e);

  return (
    <>
      <h1>List group</h1>

      {!items.length && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={crypto.randomUUID()}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export { ListGroup };
