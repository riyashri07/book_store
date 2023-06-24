import React from "react";
import ListContent from "../Components/ListContent";
import {  useSelector } from "react-redux";
import Loading from "../Components/Loading";
import Empty from "../Components/Empty";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartData } = useSelector((store) => store.cart);
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/checkout");
  };

  if (!cartData) return <Loading />;
  if (cartData.length < 1) return <Empty name={"cart"} />;

  return <ListContent cartItems={cartData} handleOrder={handleOrder} />;
};

export default CartPage;
