import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    removeProducts: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    addProducts: (state, action) => {
      const existingProduct = state.products.find(
        (item) => item._id === action.payload._id
      );

      if (existingProduct) {
        // If product already exists, concatenate quantities
        existingProduct.quantity += action.payload.quantity;
      } else {
        // If it's a new product, add to the cart
        state.products.push(action.payload);
      }

      // Update total quantity of products in the cart and the total price
      state.quantity += action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;
    },

    incrementQuantity: (state, action) => {
      const product = state.products.find(
        (item) => item._id === action.payload
      );
      if (product) {
        product.quantity += 1;
        state.total += product.price;
      }
    },

    decrementQuantity: (state, action) => {
      const product = state.products.find(
        (item) => item._id === action.payload
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.total -= product.price;
      }
    },
  },
});

export const {
  addProducts,
  incrementQuantity,
  decrementQuantity,
  removeProducts,
} = cartSlice.actions;
export default cartSlice.reducer;
