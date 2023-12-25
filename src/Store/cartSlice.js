import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart(state, action) {
      const existingProduct = state.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalPrice =
          existingProduct.price * existingProduct.quantity;
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
    },
    deleteCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    incrementCart(state, action) {
      const product = state.find((product) => product.id === action.payload.id);
      if (product) {
        product.quantity += 1;
        product.totalPrice = product.price * product.quantity;
      }
    },
    decrementCart(state, action) {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity -= 1;
        product.totalPrice -= product.price;

        if (product.quantity < 0) {
          product.quantity = 0;
        }

        if (product.totalPrice < 0) {
          product.totalPrice = 0;
        }
      }
    },
  },
});

export const { addCart, deleteCart, incrementCart, decrementCart } =
  cartSlice.actions;
export default cartSlice.reducer;
