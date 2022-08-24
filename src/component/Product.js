import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../fetures/cartSlice';

const Product = (props) => {
  const dispatch = useDispatch();
  const selectedProducts = useSelector((state) => state.cart.cartList);
  const { id, images, price, category, rating, title } = props;

  /* -------------- conversion of dollar to rupees + comma logic -------------- */
  const convertDollarToRupees = (dollar) => {
    var x = Math.floor(dollar * 79.87);
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers !== '') {
      lastThree = ',' + lastThree;
    }
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  }

  return (
    <li className='product-wrapper'>
      <div className='product-card'>
        <figure className='product_img'>
          <img src={images[0]} alt="" />
        </figure>
        <div className='product-detail'>
          <h2 className='product_title'>{title}</h2>
          <p className='product_category'>{category}</p>
          <h2 className='product_price'>Price: <span>₹ {convertDollarToRupees(price)}</span></h2>
          <span className='product_rating'>{rating.toFixed(1)}</span>
        </div>
        {
          selectedProducts && selectedProducts.find((selectedProduct) => selectedProduct.id === id) ?
            <button className='secondary-btn'
              onClick={() => dispatch(removeFromCart(props))}>Remove From Cart</button>
            :
            <button className='primary-btn'
              onClick={() => dispatch(addToCart(props))}>Add To Cart</button>
        }
      </div>
    </li>
  )
}

export default Product