import React from 'react'
import Button from '../../ui/Button'
import { useAppDispatch } from '../../store/hooks'
import { deleteItem } from '../../store/cartSlice'
interface DeleteItemProps{
  id:number
}


const DeleteItem:React.FC<DeleteItemProps>= ({id}) => {
  const  dispatch = useAppDispatch();


  return (
    <Button type='round' onClick={()=>dispatch(deleteItem(id))}>
      Delete
    </Button>
  )
}

export default DeleteItem