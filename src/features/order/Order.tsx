import React from "react";
import { CustomerOrder } from "../../typesModels";
import { calcMinutesLeft, formatDate, formatCurrency } from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";
import { useLoaderData, useParams } from "react-router-dom";
import { LoaderFunction,Params } from "react-router-dom";

// import { CustomerOrder } from "../../typesModels";

export interface ApiResponse {
  status: string;
  data: CustomerOrder;
}
const Order = () => {
  const apiResponse = useLoaderData() as ApiResponse;
  const { data: order } = apiResponse || { status: '', data: [] };
 //add status and remove position
  const {
    id,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
    position,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div>
      <div>
        <h2>Status</h2>

        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
};

interface LoaderParams {
  // Define the structure of your params object here
  // For example, if it's an object with an id property:
  orderId: string;
}


// const {orderId} = useParams();
export const loader: LoaderFunction = async ({params}: { params: Params;}) => {
  const order = await getOrder(params!.orderId!);
  return order;
};


export default Order;
