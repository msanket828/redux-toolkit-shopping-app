import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../API/url';
import Product from '../component/Product';

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get(baseUrl)
      .then(data =>  setAllProducts(data.data.slice(0,100)))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className='common products'>
      <div className="container">
        <ul className='products-list'>
          {
            allProducts.map((product) => {
              return (
                <Product key={product.id} {...product} />
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Products