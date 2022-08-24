import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { addDrag } from '../fetures/cartSlice';

const Sidebar = () => {
  const dispatch=useDispatch();
  const [filterPrice, setFilterPrice] = useState(0);
  const handleDrag = (e) => {
    var x = e.target.value;
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers !== '') {
      lastThree = ',' + lastThree;
    }
    setFilterPrice(otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree);
    dispatch(addDrag(filterPrice.toString().split(',').join('')))
  }
  return (
    <div className='sidebar'>
      <div className="container">
        <div className="form-group">
          <div className='d-flex align-items-center justify-content-between'>
            <label htmlFor="" className='label-v1'>Filter by Price</label>
            <h3 className='filterprice'>₹ {filterPrice}</h3>
          </div>
          <input type="range" min="0" max="1000000" className='slider' onChange={handleDrag} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar