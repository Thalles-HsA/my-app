import React from 'react';
import CardCarrinho from '../../componentes/CardCarrinho';
import styles from "./carrinho.module.scss";

import { RiCloseLine } from 'react-icons/ri';

function Carrinho() {
  return (
    <div className={styles.carrinho__container}>
      <div className={styles.carrinho__titulo}>
        <h2>Carrinho <br/> de compra</h2>
        <RiCloseLine />
      </div>
      <CardCarrinho />
      <CardCarrinho />
    </div>

  );
}

export default Carrinho;