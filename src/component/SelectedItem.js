import React from "react";
import { useDispatch } from "react-redux";
import { convertDollarToRupees } from "../common/currency";
import { removeFromCart } from "../fetures/cartSlice";

const SelectedItem = ({ selectedProduct }) => {
  const dispatch = useDispatch();
  return (
    <div className="selected-item">
      <figure>
        <img src={selectedProduct.images[0]} alt="" className="img-fluid" />
      </figure>
      <div className="mr-2">
        <h2>{selectedProduct.title}</h2>
        <h1>Price: ₹ {convertDollarToRupees(selectedProduct.price)}</h1>
      </div>
      <button
        className="secondary-btn ml-auto"
        onClick={() => dispatch(removeFromCart(selectedProduct))}
      >
        Remove
      </button>
    </div>
  );
};

export default SelectedItem;
