import React from 'react'
import { Link, useActionData, useLoaderData } from 'react-router-dom'
import { getMenu } from '../../services/apiRestaurant'
import MenuItem  from './MenuItem'
import { Menu as MenuType } from '../../typesModels'
export interface ApiResponse {
  status: string;
  data: MenuType[];
}


const Menu = () => {
  const apiResponse = useLoaderData() as ApiResponse;
  const { data: menu } = apiResponse || { status: '', data: [] };
  // console.log(menu);
  return (
    <div className='content-start'>
      {
        menu.map((item)=>{  
          return(
            <MenuItem key={item.id} pizza={item}/>
          )
        })
      }

    </div>
  )
}

export const loader=async ()=>{
  const menu = await getMenu();
  return menu;
}

export default Menu