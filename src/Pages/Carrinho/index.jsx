//React
import React from 'react';

//Interno
import CardCarrinho from '../../components/CardCarrinho';
import styles from "./carrinho.module.scss";

//Icons
import { RiCloseLine } from 'react-icons/ri';

function Carrinho() {

  return (
    <div className={styles.carrinho__container}>
      <div className={styles.carrinho__titulo}>
        <h2>Carrinho <br /> de compra</h2>
        <RiCloseLine style={{cursor: 'pointer'}}/>
      </div>

      <CardCarrinho />

      <div className={styles.carrinho__totalbotao}>
        <div className={styles.carrinho__total}>
          <p>Total:</p>
          <p>R$ 399,99</p>
        </div>
        <button className={styles.carrinho__botao}>
          Finalizar Compra
        </button>
      </div>
    </div>

  );
}

export default Carrinho;