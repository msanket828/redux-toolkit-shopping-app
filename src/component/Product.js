import React from 'react'

const Product = (props) => {
  // console.log(props);
  const { images, price, category } = props;

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
          <h2 className='product_price'>Price: <span>₹ {convertDollarToRupees(price)}</span></h2>
          <p className='product_category'>{category.name}</p>
        </div>
      </div>
    </li>
  )
}

export default Product