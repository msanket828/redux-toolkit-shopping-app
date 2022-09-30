import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadAllProducts: [],
  categories:[],
  selectedCategory:'',
  cartList: [],
  filterPrice: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.loadAllProducts = action.payload
      state.categories=([...new Map(state.loadAllProducts.map((m) => [m.category, m.category])).values()])
    },
    addToCart: (state, action) => {
      state.cartList.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartList = state.cartList.filter((state) => state.id !== action.payload.id);
    },
    onlyShowSelectedCategory: (state,action)=> {
      state.selectedCategory=action.payload;
    }
  }
})
export const { addToCart, removeFromCart, getAllProducts, onlyShowSelectedCategory } = cartSlice.actions
export default cartSlice.reducer;