import React from 'react'

const AllPurchase = ({ selectedProduct }) => {
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
    <>
      <div className='allpurchase'>
        <p>{selectedProduct.title}</p>
        <p>{convertDollarToRupees(selectedProduct.price)}</p>
      </div>
    </>
  )
}

export default AllPurchase