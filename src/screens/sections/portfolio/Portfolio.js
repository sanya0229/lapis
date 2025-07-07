import React from 'react';

import styles from './Portfolio.module.scss';

import sliderImg from '../../../assets/images/slider-img.png';
import arrowRightIcon from '../../../assets/icons/arrow-right-icon.png';
import arrowLeftIcon from '../../../assets/icons/arrow-left-icon.png';

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolio__container}>
        <div className={styles.portfolio__header}>
          <h1 className={styles.portfolio__header_title}>портфолио</h1>
          <p className={styles.portfolio__header_text}>
            Мы разработали десятки проектов
            <br />
            в самых разных сферах — от e-commerce
            <br />и логистики до образования и финтеха.
          </p>
        </div>
        <div className={styles.portfolio__slider_container}>
          <div className={styles.portfolio__slider_wrapper}>
            <h3 className={styles.portfolio__slider_wrapper_title}>Мессенджер Телетаск</h3>
            <img src={sliderImg} alt="" className={styles.slider__img} />
          </div>
          <div className={styles.portfolio__slider_controls}>
            <img src={arrowLeftIcon} alt="arrow left icon" />
            <div className={styles.portfolio__slider_controls_track}>
              <div className={styles.track__point}></div>
            </div>
            <img src={arrowRightIcon} alt="arrow right icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
