import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../API/url';
import Product from '../component/Product';
import Sidebar from '../Layout/Sidebar';
import { useSelector } from 'react-redux';

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const filterPrice = useSelector(state => state.cart.filterPrice);

  useEffect(() => {
    axios.get(baseUrl)
      .then(data => {
        setAllProducts(data.data.products)
      })
      .catch(error => console.log(error))
  }, [])


  return (
    <div className='home-container'>
      <Sidebar />
      <div className='common products'>
        <div className="container">
          <ul className='products-list'>
            {
              allProducts.filter((product) => {
                return (
                  Math.floor(product.price * 79.87) <= filterPrice
                )
              }).map((product) => {
                return (
                  <Product key={product.id} {...product} />
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Products