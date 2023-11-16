export interface Menu {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];  // corrected spelling
  soldOut: boolean;      // corrected spelling
}
export interface CartItem {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}
export interface CustomerOrder {
  id: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: CartItem[];
  position: string;
  orderPrice: number;
  priorityPrice: number;
}