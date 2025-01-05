import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { MdFavoriteBorder } from "react-icons/md";
import axios from "axios";
import {
  fetchAllProduct,
  isError,
  isLoading,
} from "../store/Slice/productSlice";

export default function Header() {
  const dispatch = useDispatch();
  const fetchedData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      dispatch(isLoading(true));
      dispatch(fetchAllProduct(res.data));
    } catch (error) {
      dispatch(isError("Something went wrong"));
    }
  };
  useEffect(() => {
    fetchedData();
  }, []);
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
