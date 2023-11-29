import React from 'react'
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { decreaseItemQuantity, increaseItemQuantity } from '../../store/cartSlice';
import { CartItem } from '../../typesModels';
import { getCurrentQuantityById } from '../../store/cartSlice';
import Button from '../../ui/Button';

interface UpdateQuantityProps{
id:number,
itemQuantity:number
}


const UpdateQuantity: React.FC<UpdateQuantityProps> = ({id,itemQuantity}) => {
  const dispatch = useAppDispatch();

    return (
        <div className="flex items-center">
          <Button  type="round" onClick={()=>dispatch(decreaseItemQuantity(id))} >
            -
          </Button>
          <span className="px-4">{itemQuantity}</span>
          <Button type="round" onClick={()=>dispatch(increaseItemQuantity(id))} >
            +
          </Button>
        </div>
      );
}

export default UpdateQuantity