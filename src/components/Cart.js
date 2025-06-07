import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

export default function Cart() {
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div className="text-center m-10 font-bold mt-5">
      <h1> Cart</h1>
      <div>
        {cartItem.length>0 && (
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
        <ItemList data={cartItem} />
        {cartItem.length === 0 && (
          <h1>Your cart is empty add item to the card</h1>
        )}
      </div>
    </div>
  );
}
