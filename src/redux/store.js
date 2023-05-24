import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "./slice/cartSlice";
import thunkMiddleware from 'redux-thunk';
const store = configureStore({
  reducer: {
    carts: cartsReducer,
    middleware: [thunkMiddleware],
  },
});
export default store;