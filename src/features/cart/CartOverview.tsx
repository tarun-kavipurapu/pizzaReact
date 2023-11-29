import { Link } from "react-router-dom";
import { useAppDispatch,useAppSelector } from "../../store/hooks";
import { CartItem } from "../../typesModels";

function CartOverview() {

  const cart: CartItem[] = useAppSelector((state) => state.cart.cart);

  const totalPriceArray = cart.map(pizza => pizza.totalPrice);
  const totalPrice = totalPriceArray.reduce((sum, price) => sum + price, 0);


  return (
    <div className="bg-stone-800 text-slate-300 uppercase flex tems-center justify-between px-4 py-3">
      <p>
        <span> {cart.length || ' '} Pizzas </span>
        <span className="mx-2">{totalPrice+"€"}</span>
      </p>
      <Link to={'/cart'}>Open Cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
