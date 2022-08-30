import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../fetures/cartSlice';

const SelectedItem = ({ selectedProduct }) => {
  const dispatch=useDispatch();
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
    <div className='selected-item'>
      <figure>
        <img src={selectedProduct.images[0]} alt="" className='img-fluid' />
      </figure>
      <div className='mr-2'>
        <h2>{selectedProduct.title}</h2>
        <h1>Price: ₹ {convertDollarToRupees(selectedProduct.price)}</h1>
      </div>
      <button className='secondary-btn ml-auto' onClick={()=>dispatch(removeFromCart(selectedProduct))}>Remove</button>
    </div>
  )
}

export default SelectedItem