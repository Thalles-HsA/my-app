import React from 'react';
import styles from "./header.module.scss"

//icons
import { FaCartArrowDown } from 'react-icons/fa';

function Header() {
  return (

    <div className={styles.header__container}>

      <div className={styles.titulo}>
        <h1>MKS</h1>
        <h2>Sistemas</h2>
      </div>
        
      <div className={styles.carrinho__container}>
        <FaCartArrowDown className={styles.carrinho}/>
        <p>0</p>
      </div>
    </div>
  );
}

export default Header;