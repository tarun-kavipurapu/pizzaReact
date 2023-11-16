import React from 'react'
import { Menu } from '../../typesModels'
import { formatCurrency } from '../../utils/helpers'

import { useAppSelector, useAppDispatch } from './../../store/hooks'
import { addItem } from './../../store/cartSlice'
import  {CartItem} from './../../typesModels';
interface MenuItemProps {
  pizza: Menu
}


const MenueItem: React.FC<MenuItemProps> = ({pizza}) => {
  const dispatch = useAppDispatch();
  const cart:CartItem[] = useAppSelector((state)=>state.cart);

  const {id, name , unitPrice,imageUrl,ingredients,soldOut} = pizza;
  console.log(cart);
  return (
   
<li>
  <div className="pizza-card">
    <div className="pizza-card__image">
      <img src={imageUrl} alt={name} />
    </div>
    <div className="pizza-card__info">
      <h2>{name}</h2>
      <p>{ingredients.join(', ')}</p>
      {soldOut ? <p className="soldout">Sold out</p>: <p>{formatCurrency(unitPrice)}</p>}
      <button onClick={()=>dispatch(addItem)}>Add to cart</button>
    </div>
  </div>
</li>
  )
}

export default MenueItem