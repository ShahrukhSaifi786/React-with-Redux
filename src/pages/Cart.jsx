import React from "react";
import CartItem from "../component/CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cartItem);
  const totalSum = cartItems
    .reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0)
    .toFixed(2);
  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartItems.map(({ id, title, rating, price, imageUrl, quantity }) => (
          <CartItem
            key={id}
            id={id}
            title={title}
            price={price}
            quantity={quantity}
            imageUrl={imageUrl}
            rating={rating}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">{totalSum}</div>
        </div>
      </div>
    </div>
  );
}
