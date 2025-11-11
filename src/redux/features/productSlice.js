import { createSlice } from '@reduxjs/toolkit';
import { libros } from '@/array/productos';




const INITIAL_STATE = {
  productos: libros,
  // totalProductos: TotalLibros
};

export const ProductSlice = createSlice({
  name: 'Productos',
  initialState: INITIAL_STATE,
  reducers: {},
  // getProducts: state => state
});

// export const { getProducts } = ProductSlice.actions

export default ProductSlice.reducer;
