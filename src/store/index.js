import { configureStore } from '@reduxjs/toolkit'
import abrirFecharCarrinho from "./reducer/carrinho"

const store = configureStore ({
  reducer: {
    carrinho: abrirFecharCarrinho
  }
});

export default store;
