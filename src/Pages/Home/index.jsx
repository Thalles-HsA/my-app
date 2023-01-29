import React from 'react';
import styles from "./home.module.scss";

import Cards from '../../componentes/Cards';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';


function Home() {
  return (
     <div className={styles.home}>
      <Header/>
      <Cards />
      <Cards />
      <Footer />
    </div>   
  );
}

export default Home;