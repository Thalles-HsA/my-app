import React from 'react';
import styles from "./header.module.scss"
import Carrinho from '../../Pages/Carrinho';

//icons
import { FaCartArrowDown } from 'react-icons/fa';


import { mudarCarrinho } from '../../store/reducer/carrinho';
import { useDispatch } from "react-redux"

function Header() {

  const dispatch = useDispatch();

  function resolverCarrinho(){
   dispatch(mudarCarrinho(false))
  }
  return (

    <div className={styles.header__container}>

      <div className={styles.titulo}>
        <h1>MKS</h1>
        <h2>Sistemas</h2>
      </div>
    
      <div className={styles.contador__container}>
        <FaCartArrowDown onClick={resolverCarrinho}/>
        <p>0</p>
      </div>
      
    </div>
  );
}

export default Header;