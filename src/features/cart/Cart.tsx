import { Link } from "react-router-dom";
import { useAppSelector,useAppDispatch } from "../../store/hooks";

import { CartItem } from "../../typesModels";

import Button from "../../ui/Button";
import { CartItems, EmptyCart } from "..";
import { clearCart } from "../../store/cartSlice";

function Cart() {
  const cart: CartItem[] = useAppSelector((state) => state.cart.cart);
  const username = useAppSelector((state)=>state.user.username);
  const dispatch = useAppDispatch();
  return (
    <div className="px-4 py-3">

      <Link  to="/menu">
    <Button  type="small">&larr; Back to menu</Button>
      </Link>

    <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

    <ul className="mt-3 divide-y divide-stone-200 border-b">
      {cart.length!==0?cart.map((item) => (
        <CartItems item={item} key={item.pizzaId} />
      )):<EmptyCart/>}
    </ul>

    <div className="mt-6 space-x-2">
      <Button to="/order/new" type="primary">
        Order pizzas
      </Button>

      <Button type="secondary" onClick={()=>dispatch(clearCart())}>Clear cart</Button>
    </div>
  </div>
  );
}

export default Cart;
