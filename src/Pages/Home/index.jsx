import React from 'react';
import styles from "./home.module.scss";

import Cards from '../../components/Cards';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Cards />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;