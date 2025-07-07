import React from 'react';

import styles from './Testimonials.module.scss';
import TestimonialCard from './components/testimonialCard/TestimonialCard';

import userLogo from '../../../assets/images/user/user-img.png';

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <div className={styles.testimonials__container}>
        <div className={styles.testimonials__container_header}>
          <h2 className={styles.testimonials__container_header_title}>Отзывы клиентов</h2>
        </div>
        <div className={styles.testimonials__content}>
          <TestimonialCard
            text={
              <>
                Заказывала лендинг. Очень довольна качеством и
                <br />
                сроками разработки. Лендинг полностью
                <br />
                соответствует требованиям, и я с уверенностью
                <br />
                могу рекомендовать эту компанию друзьям
              </>
            }
            imgSrc={userLogo}
            imgAlt="user logo"
            name="Андрея."
          />
          <TestimonialCard
            text={
              <>
                Заказывала лендинг. Очень довольна качеством и
                <br />
                сроками разработки. Лендинг полностью
                <br />
                соответствует требованиям, и я с уверенностью
                <br />
                могу рекомендовать эту компанию друзьям
              </>
            }
            imgSrc={userLogo}
            imgAlt="user logo"
            name="Андрея."
          />
          <TestimonialCard
            text={
              <>
                Заказывала лендинг. Очень довольна качеством и
                <br />
                сроками разработки. Лендинг полностью
                <br />
                соответствует требованиям, и я с уверенностью
                <br />
                могу рекомендовать эту компанию друзьям
              </>
            }
            imgSrc={userLogo}
            imgAlt="user logo"
            name="Андрея."
          />
          <TestimonialCard
            text={
              <>
                Заказывала лендинг. Очень довольна качеством и
                <br />
                сроками разработки. Лендинг полностью
                <br />
                соответствует требованиям, и я с уверенностью
                <br />
                могу рекомендовать эту компанию друзьям
              </>
            }
            imgSrc={userLogo}
            imgAlt="user logo"
            name="Андрея."
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
