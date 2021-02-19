import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

// The function below is called a thunk and allows us to perform async logic.
// code can then be executed and other actions can be dispatched
export const addToCartAsync = (product) => (dispatch) => {
  setTimeout(() => {
    dispatch(addToCart(product));
  }, 1000);
};

export const getCartItems = (state) => state.cart.items;
export const getCartItemsCount = (state) => state.cart.items.length;
export const getCartItemsTotalPrice = (state) => {
  return state.cart.items.reduce((a, b) => a + b.price, 0);
};

export default cartSlice.reducer;
