import React from "react";
import { useSelector } from "react-redux";
import Product from "../component/Product";
export default function Home() {
  const productsList = useSelector((state) => state.products.list);
  const isLoading = useSelector((state) => state.products.loading);
  const isError = useSelector((state) => state.products.error);
  return isLoading ? (
    (isError && (
      <h1 className="text-2xl text-center font-semibold">{isError}</h1>
    )) || (
      <div className="products-container">
        {productsList.map(({ id, title, rating, price, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            rating={rating.rate}
            price={price}
            imageUrl={image}
          />
        ))}
      </div>
    )
  ) : (
    <h1 className="text2xl text-center font-semibold">Loading ...</h1>
  );
}
