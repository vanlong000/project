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
        console.log(state.cart,action);
        return { cart: [...state.cart, action.payload] };
      } else { 
          // let newtem = state.cart
          // const existingItem = newtem.findIndex(item => item.id === action.payload.id);
          // if (newtem[existingItem].quantyti === undefined) {
          //   newtem[existingItem].quantyti = 2;
          // } else {
          //   newtem[existingItem].quantyti += 1;
          // }
          return state
        }
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