import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { addDrag } from '../fetures/cartSlice';

const Sidebar = () => {
  const dispatch=useDispatch();
  const [filterPrice, setFilterPrice] = useState(0);  
  return (
    <div className='sidebar'>
      <div className="container">
        <div className="form-group">
          {/* <input type="range" min="0" max="1000000" className='slider' onChange={handleDrag} /> */}

        </div>
      </div>
    </div>
  )
}

export default Sidebar