import React from 'react'
import { Link } from 'react-router-dom'
import Username from '../features/user/Username'

const Header = () => {
  return (
    <header className='bg-orange-600  tracking-[5px]	uppercase px-4 py-3 flex justify-between'>
        <Link to ='/'>QuickZza</Link>
        <Username/>
    </header>
  )
}

export default Header