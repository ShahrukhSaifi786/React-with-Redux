import React from "react";
import { useSelector } from "react-redux";
import WishListItem from "../component/WishListItem";

export default function WishList() {
  const wishList = useSelector((state) => state.wishList);
  return (
    <div className="cart-container">
      <h2>WishList</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="item-price">Remove</div>
        </div>
        {wishList.map(({ id, title, rating, price, imageUrl }) => (
          <WishListItem
            key={id}
            id={id}
            title={title}
            price={price}
            imageUrl={imageUrl}
            rating={rating}
          />
        ))}
      </div>
    </div>
  );
}
