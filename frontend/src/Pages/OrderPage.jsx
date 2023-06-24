import React from "react";
import Order_Content from "../Components/Order_Content";
import { useSelector } from "react-redux";
import Empty from "../Components/Empty";


const OrderPage = () => {
  const { allOrder } = useSelector((store) => store.order);

  if (allOrder.length < 1) return <Empty name={"order"} />;
  return <Order_Content orders={allOrder} />;
};

export default OrderPage;
