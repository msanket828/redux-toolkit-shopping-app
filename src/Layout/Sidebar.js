import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { onlyShowSelectedCategory } from '../fetures/cartSlice';

const Sidebar = () => {
  const dispatch=useDispatch();
  const categories = useSelector(state => state.cart.categories);
  const handleDrag = (event) => {
    dispatch(onlyShowSelectedCategory(event.target.value))
  }
  return (
    <div className='sidebar'>
      <div className="container">
        <div className="form-group">
          {
            categories.map(category => {
              return (
                <div className="form-group" key={category}>
                  <input type="radio" onChange={handleDrag}
                    value={category} id={category + 'Id'} name="productCategory" />
                  <label htmlFor={category + 'Id'}>{category}</label>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar