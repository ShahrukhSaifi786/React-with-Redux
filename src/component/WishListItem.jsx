import React from "react";
import { useDispatch } from "react-redux";
import { removeToWishList } from "../store/Slice/wishListSlice";

export default function WishListItem({
  id,
  title,
  rating,
  price,
  imageUrl,
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
        <button className="px-5 py-2 bg-slate-300" onClick={() => {
          dispatch(removeToWishList({id}))
        }}>
          Remove
        </button>
      </div>
    </div>
  );
}
