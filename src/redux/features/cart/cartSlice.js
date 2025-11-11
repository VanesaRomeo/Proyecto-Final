import { createSlice } from '@reduxjs/toolkit';
import { addProductToCart, removeProductFromCart } from './cartSeconds';



const INITIAL_STATE = {
  itemsInCart: [],
  isCartHidden: true,
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: INITIAL_STATE,
  reducers: {
    addItem: (state, action) => {
      return {
        ...state,
        itemsInCart: addProductToCart(state.itemsInCart, action.payload),
      };
    },
    removeItem: (state, action) => {
      return {
        ...state,
        itemsInCart: removeProductFromCart(state.itemsInCart, action.payload),
      };
    },
    emptyCart: (state) => {
      return {
        ...state,
        itemsInCart: [],
      };
    },
    toggleCartVisibility: (state) => {
      return {
        ...state,
        isCartHidden: !state.isCartHidden,
      };
    },
  },
});

export const { addItem, removeItem, emptyCart, toggleCartVisibility } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;