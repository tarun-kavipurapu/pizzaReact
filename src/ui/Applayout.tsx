import React from 'react'
import Header from './Header'
import { CartOverview } from '../features'
import { Outlet,useNavigation } from 'react-router-dom'
import Loader from './Loader'
const Applayout = () => {
    const navigation = useNavigation();
    const isLoading  = navigation.state==='loading';
    console.log(navigation);
    console.log(isLoading);
  return (
    <div>

        <Header/>
    {isLoading && <Loader/>}

        <main>
        <Outlet/>
        </main>
        <CartOverview/>

    </div>
  )
}

export default Applayout