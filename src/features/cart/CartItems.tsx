import React from "react";
import { CartItem } from "../../typesModels";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import DeleteItem from "../order/DeleteItem";
interface CartItemProps {
  item:CartItem,
}
const CartItems: React.FC<CartItemProps> = ({ item }) => {
  const { pizzaId ,name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
    <p className="mb-1 sm:mb-0">
      {quantity}&times; {name}
    </p>
    <div className="flex items-center justify-between sm:gap-6">
      <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
      
       <DeleteItem id={pizzaId}/>
    </div>
  </li>
  ); 
};

export default CartItems;


