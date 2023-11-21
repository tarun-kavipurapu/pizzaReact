import axios from "axios";
const API_URL = "https://react-fast-pizza-api.onrender.com/api";
import { CustomerOrder,Menu,CartItem } from "../typesModels";
export async function getMenu(): Promise<Menu | null> {
  try {
    const response = await axios.get(`${API_URL}/menu`);
    if (response.status === 200) {
      const data: Menu = response.data; // Replace with the actual structure of the menu
      return data;
    }
    return null;
  } catch (error) {
    console.error('Error fetching menu:', error);
    return null;
  }
}

export async function getOrder(id:string): Promise<CustomerOrder | null> {
try {   
const response = await axios.get(`${API_URL}/order/${id}`);
 if (response.status === 200) {
   const data: CustomerOrder = response.data; // Replace with the actual structure of the menu
   return data;
 }
 return null;
} catch (error) {
    console.error("Error fetching menu:", error);
    return null;
}
}

//?TODO here i just set response data as type any i have to change it after wards 
export async function createOrder(newOrder:CustomerOrder): Promise<any | null> {
try {
  const response = await axios.post(`${API_URL}/order`,newOrder);
  if (response.status === 200) {
    const data: any = response.data; // Replace with the actual structure of the menu
    return data;
  }
  return null;
} catch (error) {
  console.error("Error fetching menu:", error);
  return null;
}
}

export async function updateOrder(id: string, updateObj:CustomerOrder ): Promise<void> {
  try {
    const response = await axios.patch(`${API_URL}/order/${id}`, updateObj, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      throw new Error();
    }
  } catch (error) {
    throw new Error('Failed updating your order');
  }
}



