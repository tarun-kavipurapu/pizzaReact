import React from "react";
import { Menu } from "../../typesModels";
import { formatCurrency } from "../../utils/helpers";

import { useAppSelector, useAppDispatch } from "./../../store/hooks";
import { addItem } from "./../../store/cartSlice";
import { getCurrentQuantityById } from "./../../store/cartSlice";
import { CartItem } from "./../../typesModels";
import Button from "../../ui/Button";
import UpdateQuantity from "../order/UpdateQuantity";
import DeleteItem from "../order/DeleteItem";

interface MenuItemProps {
  pizza: Menu;
}


const MenueItem: React.FC<MenuItemProps> = ({ pizza }) => {
  const dispatch = useAppDispatch();
  const cart: CartItem[] = useAppSelector((state) => state.cart.cart);
  
  const { id, name, unitPrice, imageUrl, ingredients, soldOut } = pizza;
  
  const handleAddTocart=()=>{
    const item={
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice:unitPrice*1,
    }
    dispatch(addItem(item));
  }

  const itemQuantity: number = useAppSelector(getCurrentQuantityById(id));

  const isIncart = itemQuantity > 0;
  console.log(cart);

  return (
    <li className="flex gap-4 py-2 mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-stone-800 dark:border-stone-700">
      <img
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
        src={imageUrl}
        alt="product image"
      />
      <div className="flex flex-col justify-between w-full">
        <h5
          className={`text-xl font-medium tracking-tight text-stone-900 dark:text-white mb-2 ${
            soldOut ? "line-through" : ""
          }`}
        >
          {name}
          {soldOut}
        </h5>
        <div className="flex justify-between items-center">
          <div className="text-xl text-gray-900 dark:text-white">
            {formatCurrency(unitPrice)}
          </div>

          {isIncart && (
            <div>
              <UpdateQuantity id = {id} itemQuantity={itemQuantity}/>
              <DeleteItem id={id} />
            </div>
          )}
          {!isIncart && !soldOut && <Button type="round" onClick={handleAddTocart}>Add to cart</Button>}
        </div>
      </div>
    </li>
  );
};

export default MenueItem;
