import { createSlice } from '@reduxjs/toolkit';
import { categorias } from '@/array/categorias';




const INITIAL_STATE = {
  categorias: categorias,
  selectedCategory: null,
};

export const categoriesSlice = createSlice({
  name: 'categorias',
  initialState: INITIAL_STATE,
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory =
        action.payload !== state.selectedCategory ? action.payload : null;
    },

    // getCategories: (state) => state,
  },
});

export const { selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
