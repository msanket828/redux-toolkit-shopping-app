import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../API/url";
import Product from "../component/Product";
import Sidebar from "../Layout/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../fetures/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const [allProducts, setAllProducts] = useState([]);
  const filterPrice = useSelector((state) => state.cart.filterPrice);

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((data) => {
        setAllProducts(data.data.products);
        dispatch(getAllProducts(data.data.products));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="home-container">
      <div className="container">
        <Sidebar />
        <div className="common products">
          <ul className="products-list">
            {allProducts.map((product) => {
              return <Product key={product.id} {...product} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
