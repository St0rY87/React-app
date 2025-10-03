import React from "react";

interface Props {
  cartItems: string[];
  onClearCart: () => void;
}

const Cart = ({ cartItems, onClearCart }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={crypto.randomUUID()}>{item}</li>
        ))}
      </ul>

      <button onClick={onClearCart}>clear</button>
    </>
  );
};

export default Cart;
