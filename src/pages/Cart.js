import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AllPurchase from '../component/AllPurchase';
import SelectedItem from '../component/SelectedItem';
import { removeFromCart } from '../fetures/cartSlice';

const Cart = () => {
  const selectedProducts = useSelector((state) => state.cart.cartList);
  const[total,setTotal]=useState(0);
  useEffect(()=> {
    setTotal(selectedProducts.reduce((acc, cur) => {
      return acc + cur.price
    }, 0))
  },[selectedProducts]);
  
  
  const convertDollarToRupees = (dollar) => {
    var x = Math.floor(dollar * 80);
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers !== '') {
      lastThree = ',' + lastThree;
    }
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  }

  return (
    <div className='cart'>
      <div className="container">
        <div className='selected-items'>
          {
            selectedProducts.map((selectedProduct) => {
              return (
                <SelectedItem key={selectedProduct.id} selectedProduct={selectedProduct} 
                 />
              )
            })
          }
        </div>
        <div className='total-summary'>
          <h2>Total Summary</h2>
          <hr />
          {
            selectedProducts.map((selectedProduct) => {
              return (
                <AllPurchase key={selectedProduct.id} selectedProduct={selectedProduct} />
              )
            })
          }
          <hr />
          <div className='allpurchase'>
            <p className='font-weight-bold'>Grand Total</p>
            <p className='font-weight-bold'>{convertDollarToRupees(total)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart