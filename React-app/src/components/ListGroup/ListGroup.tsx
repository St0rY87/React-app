import { useState } from "react";
import styled from "styled-components";
import { BsFillCalendar3Fill } from "react-icons/bs";
const List = styled.ul`
  list-style: none;
  color: tomato;
  font-size: 18px;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  display: flex;
  justify-items: center;
  align-items: center;
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

  const Button = styled.button`
    background-color: tomato;
    color: #fff;
  `;

  return (
    <>
      <h1>{heading}</h1>
      <Button>Button</Button>
      {/* {!items.length && <p>No item found</p>}

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
            <BsFillCalendar3Fill
              color="green"
              style={{ marginRight: "10px" }}
            />
            {item}
          </ListItem>
        ))}
      </List> */}
    </>
  );
}

export default ListGroup;
