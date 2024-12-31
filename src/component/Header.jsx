import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import { useSelector } from "react-redux";
import { MdFavoriteBorder } from "react-icons/md";

export default function Header() {
  const storeState = useSelector((state) => state);
  const { cartItem, wishList } = storeState;
  return (
    <header className="pt-6 pb-3">
      <div className="header-contents">
        <h1 className="text-2xl font-semibold">
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">
            {cartItem.reduce((acc, item) => {
              return acc + item.quantity;
            }, 0)}
          </div>
        </Link>
        <Link className="cart-icon" to="/favorite">
          <MdFavoriteBorder size={30} />
          <div className="cart-items-count">{wishList.length}</div>
        </Link>
      </div>
    </header>
  );
}
