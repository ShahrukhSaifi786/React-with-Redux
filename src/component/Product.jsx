import { useDispatch } from "react-redux";
import { addCart } from "../store/Slice/cartSlice";
import { addToWishList } from "../store/Slice/wishListSlice";

export default function Product({ id, title, rating, price, imageUrl }) {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <div className="product-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{+rating} ★ ★ ★ ★</p>
        <p className="price">{price}</p>
      </div>
      <div className="cta-container mt-auto">
        <button
          className="px-3 py-2 bg-blue-600 text-white"
          onClick={() => {
            dispatch(addCart({ id, title, rating, price, imageUrl }));
          }}
        >
          Add to Cart
        </button>
        <button
          className="px-3 py-2 bg-red-600 text-white"
          onClick={() => {
            dispatch(addToWishList({ id, title, rating, price, imageUrl }));
          }}
        >
          Favorite
        </button>
      </div>
    </div>
  );
}
