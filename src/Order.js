import React from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = React.useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <li>
      {props.orderType}: {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;
