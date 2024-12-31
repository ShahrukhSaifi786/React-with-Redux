import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeCart,
} from "../store/Slice/cartSlice";

export default function CartItem({
  id,
  title,
  rating,
  price,
  imageUrl,
  quantity,
}) {
  const dispatch = useDispatch();
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button
          className="px-5 py-2 bg-slate-300"
          onClick={() => {
            dispatch(decreaseQuantity({ id }));
            // dispatch(removeCart({ id }));
          }}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="px-5 py-2 bg-slate-300"
          onClick={() => {
            dispatch(increaseQuantity({ id }));
          }}
        >
          +
        </button>
        <button
          className="ms-3 px-5 py-2 bg-slate-300"
          onClick={() => {
            dispatch(removeCart({ id }));
          }}
        >
          Remove
        </button>
      </div>
      <div className="item-total">${(quantity * price).toFixed(2)}</div>
    </div>
  );
}
