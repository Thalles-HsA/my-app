import React from 'react';
import CardCarrinho from '../../componentes/CardCarrinho';
import Cards from '../../componentes/Cards';
import Header from '../../componentes/Header';
import styles from "./home.module.scss";

function Home() {
  return (

    <>
      <Header />
      <main className={styles.cards}>
        <CardCarrinho />

      </main>
    </>
  );
}

export default Home;