import React from 'react';
import styles from './Main.module.scss';

import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';

import Hero from '../sections/hero/Hero';
import Solutions from '../sections/solutions/Solutions';
import About from '../sections/about/About';
import Advantages from '../sections/advantages/Advantages';

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Solutions />
        <About />
        <Advantages />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
