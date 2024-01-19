import React from "react";
import { useCart } from "../context/CartProvider";

const Product = ({ id, title, price, img }) => {
  const { addItemToCart } = useCart();

  function handleAdd() {
    const newCartItem = {
      id: id,
      title: title,
      price: price,
      img: img,
      quantity: 1,
    };
    addItemToCart(newCartItem)
  }

  return (
    <div
      style={{ padding: "1rem", margin: "1rem", border: "1px solid #343434" }}
    >
      <p>{id}</p>
      <img src={img} alt="title" height={200} />
      <p>{title}</p>
      <p>{price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
};

export default Product;
