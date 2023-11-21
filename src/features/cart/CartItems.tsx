import React from "react";
import { CartItem } from "../../typesModels";
import { formatCurrency } from "../../utils/helpers";

interface CartItemProps {
  item:CartItem
}
const CartItems: React.FC<CartItemProps> = ({ item }) => {
  const { name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity} &times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
};

export default CartItems;


