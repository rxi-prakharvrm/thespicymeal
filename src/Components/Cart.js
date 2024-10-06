import React, { useContext } from "react";
import { MyContext } from "./MyContext";

const Cart = () => {
  const { cartItems } = useContext(MyContext);
  return <h1 className="cart">{cartItems.length}</h1>;
};

export default Cart;
