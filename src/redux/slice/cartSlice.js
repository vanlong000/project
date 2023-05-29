import { createSlice } from "@reduxjs/toolkit";
import produce from 'immer';
const initialState = {
    cart: [],
    load: false,
  };
  const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart: (state = initialState, action) => {
        const itemFind = state.cart.find((p) => p._id === action.payload._id);
  
        if (!itemFind) {
          return { cart: [...state.cart, action.payload] };
        } else return state;
      },
      deleteCart: (state = initialState, action) => {
        const newListCart = state.cart;
        const objIndex = newListCart.findIndex(
          (obj) => obj.id === action.payload.id
        );
  
        newListCart.splice(objIndex, 1);
  
    
      },
      buyItem: (state = initialState, action) => {
        const itemFind = state.buy.find((p) => p.id === action.payload.id);
  
        if (!itemFind) {
          return { buy: [...state.cart, action.payload] };
        } else return state;
      },
    },
  });
export const { addToCart,deleteCart } = cartSlice.actions;
export default cartSlice.reducer;