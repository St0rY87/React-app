import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  function handleSelection(index: number) {
    setSelectedIndex(index);
  }

  return (
    <>
      <h1>{heading}</h1>

      {!items.length && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "active list-group-item"
                : "list-group-item"
            }
            key={crypto.randomUUID()}
            onClick={() => {
              handleSelection(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export { ListGroup };
