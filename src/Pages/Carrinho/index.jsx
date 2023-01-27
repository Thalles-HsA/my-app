import React from 'react';
import CardCarrinho from '../../componentes/CardCarrinho';
import styles from "./home.module.scss";

function Home() {
  return (

    <>
      <main className={styles.cards}>
        <CardCarrinho />

      </main>
    </>
  );
}

export default Home;