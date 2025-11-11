import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

import categoryReducer from './features/categorySlice';
import productReducer from './features/productSlice';
import shoppingCartReducer from './features/cart/cartSlice';
import menuReducer from './features/menuSlice';

const rootReducer = combineReducers({
  categorias: categoryReducer,
  productos: productReducer,
  cart: shoppingCartReducer,
  menu: menuReducer,
});

const PersistConfig = {
  key: 'root',
  storage,
  whitelist: ['categorias', 'productos', 'cart'], // Estados que serán persistidos
};

const persistedReducer = persistReducer(PersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // Ignorar estas acciones
      },
    }),
});

export const persistor = persistStore(store);
