import { createSlice } from '@reduxjs/toolkit'
import Carrinho from '../../Pages/Carrinho';

const abrirFecharCarrinho = createSlice({
  name: 'ativo',
  initialState: false,
  reducers: {
      mudarCarrinho: (state) => {
         console.log(state)
      } 
  },
})

export const { mudarCarrinho } = abrirFecharCarrinho.actions;

export default abrirFecharCarrinho.reducer