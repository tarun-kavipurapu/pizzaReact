import React from 'react'
import { useAppSelector } from './../../store/hooks'
const Username = () => {
    const username = useAppSelector((state)=>state.user.username);
  return (
    <div>{username}</div>
  )
}

export default Username