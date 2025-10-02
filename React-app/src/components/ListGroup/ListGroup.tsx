import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  color: tomato;
  font-size: 18px;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

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

      <List>
        {items.map((item, index) => (
          <ListItem
            key={crypto.randomUUID()}
            active={index === selectedIndex}
            onClick={() => {
              handleSelection(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
