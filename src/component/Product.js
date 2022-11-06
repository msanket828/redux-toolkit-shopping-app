import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../fetures/cartSlice";
import { convertDollarToRupees } from "../common/currency";

const Product = (props) => {
  const dispatch = useDispatch();
  const selectedProducts = useSelector((state) => state.cart.cartList);
  const { id, images, price, category, rating, title } = props;

  return (
    <li className="product-wrapper">
      <div className="product-card">
        <figure className="product_img">
          <img src={images[0]} alt="" />
        </figure>
        <div className="product-detail">
          <h2 className="product_title">{title}</h2>
          <p className="product_category">{category}</p>
          <h2 className="product_price">
            Price: <span>₹ {convertDollarToRupees(price)}</span>
          </h2>
          <span className="product_rating">{rating.toFixed(1)}</span>
        </div>
        {selectedProducts &&
        selectedProducts.find(
          (selectedProduct) => selectedProduct.id === id
        ) ? (
          <button
            className="secondary-btn"
            onClick={() => dispatch(removeFromCart(props))}
          >
            Remove From Cart
          </button>
        ) : (
          <button
            className="primary-btn"
            onClick={() => dispatch(addToCart(props))}
          >
            Add To Cart
          </button>
        )}
      </div>
    </li>
  );
};

export default Product;
