import React from "react";
import { CartItem } from "../../typesModels";
const isValidIndianPhone = (str: string) =>
  /^(?:(?:(?:\+|0{0,2})91\s*[-]?\s*|[0]?)?[6789]\d{9})$/.test(str);

type fakeCart = CartItem[];

const fakeCart: fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

 const CreateOrder = () => {
  // const [withPriority, setWithPriority] = useState(false);
  return (
    <div>
      <h2>Ready to Order Lets! go</h2>

      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" placeholder="Enter your phone" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" placeholder="Enter your address" />
        </div>
        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
      </form>
    </div>
  );
};

export default CreateOrder;
