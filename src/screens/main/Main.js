import React from 'react';
import styles from './Main.module.scss';

import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';

import Hero from '../sections/hero/Hero';
import Solutions from '../sections/solutions/Solutions';
import About from '../sections/about/About';
import Advantages from '../sections/advantages/Advantages';
import PromoBanner from '../sections/promoBanner/PromoBanner';
import Portfolio from '../sections/portfolio/Portfolio';
import Testimonials from '../sections/testimonials/Testimonials';
import Request from '../sections/request/Request';
import SocialPanel from '../sections/socialPanel/SocialPanel';
import CostInfo from '../sections/costInfo/CostInfo';

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <Header />

        <Hero />
        <Solutions />
        <About />
        <Advantages />
        <PromoBanner />
        <Portfolio />
        <Testimonials />
        <Request />
        <SocialPanel />
        <CostInfo />
        <Footer />
      </main>
    </div>
  );
};

export default Main;
