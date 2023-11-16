import React from 'react'
import { CartItem } from '../../typesModels'
import { formatCurrency } from '../../utils/helpers'

interface OrderItemProps {
item:CartItem,
isLoadingIngredients:boolean,
ingredients:string[]
}

  
const OrderItem: React.FC<OrderItemProps> = ({item,isLoadingIngredients, ingredients}) => {
  const {name,quantity,totalPrice} = item;
  return (
    <li>
    <div>
      <p>
        <span>{quantity}&times;</span> {name}
      </p>
      <p>{formatCurrency(totalPrice)}</p>
    </div>
  </li>
  )
}

export default OrderItem