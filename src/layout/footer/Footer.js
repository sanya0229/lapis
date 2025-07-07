import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>© 2025, Lapis Services</p>
      <a href="#" className={styles.footer__link}>
        Политика обработки персональных данных
      </a>
    </footer>
  );
};

export default Footer;
