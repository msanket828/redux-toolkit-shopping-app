import React from "react";
import { convertDollarToRupees } from "../common/currency";

const AllPurchase = ({ selectedProduct }) => {
  return (
    <>
      <div className="allpurchase">
        <p>{selectedProduct.title}</p>
        <p>{convertDollarToRupees(selectedProduct.price)}</p>
      </div>
    </>
  );
};

export default AllPurchase;
