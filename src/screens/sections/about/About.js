import React from 'react';

import styles from './About.module.scss';
import FactCard from './components/factCard/FactCard';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__header}>
          <h2 className={styles.about__header_title}>о нас</h2>
        </div>
        <div className={styles.about__facts}>
          <FactCard title="6+" text="лет на рынке" />
          <FactCard title="30+" text="проектов" />
          <FactCard title="10" text="человек в команде" />
          <FactCard
            title="98%"
            text={
              <>
                клиентов остаются <br /> на поддержке
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default About;
