import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home";
import CartPage from "../Pages/CartPage";
import BookPage from "../Pages/BookPage";
import OrderPage from "../Pages/OrderPage";
import CheckOutPage from "../Pages/CheckoutPage";

// Component defining all the routes for the application
const AllRoutes = () => {
  return (
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
              path="/"
              element={
                  // <PrivateRoute>
                  <Home />
                  // </PrivateRoute>
              }
          />
          <Route
              path="/detail/:id"
              element={
                  // <PrivateRoute>
                  <BookPage />
                  // </PrivateRoute>
              }
          />
          <Route
              path="/cart"
              element={
                  <PrivateRoute>
                      <CartPage />
                  </PrivateRoute>
              }
          />
          <Route
              path="/checkout"
              element={
                  <PrivateRoute>
                      <CheckOutPage />
                  </PrivateRoute>
              }
          />{" "}
          <Route
              path="/order"
              element={
                  <PrivateRoute>
                      <OrderPage />
                  </PrivateRoute>
              }
          />
      </Routes>
  );
};

export default AllRoutes;
