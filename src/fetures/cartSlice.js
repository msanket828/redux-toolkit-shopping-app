import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  filterPrice:0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartList.push(action.payload);
    },
    removeFromCart: (state,action)=> {    
      state.cartList=state.cartList.filter((state)=> state.id !== action.payload.id);
    },   
  }
})
export const { addToCart, removeFromCart }=cartSlice.actions
export default cartSlice.reducer;