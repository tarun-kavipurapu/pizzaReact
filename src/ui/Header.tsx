import React from 'react'
import { Link } from 'react-router-dom'
import Username from '../features/user/Username'

const Header = () => {
  return (
    <header>
        <Link to ='/'>My Pizza Shop</Link>
        <Username/>
    </header>
  )
}

export default Header