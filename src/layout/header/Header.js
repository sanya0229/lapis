import React from 'react';
import styles from './Header.module.scss';

import logo from '../../assets/icons/logo-icon.png';

const Header = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo_area}>
          <a href="/" onClick={scrollToTop}>
            <img src={logo} alt="logo" className={styles.logo} />
          </a>
        </div>
        <nav className={styles.header__navigation}>
          <ul className={styles.header__nav_list}>
            <li className={styles.header__nav_link}>Решения</li>
            <li className={styles.header__nav_link}>О нас</li>
            <li className={styles.header__nav_link}>Преимущества</li>
            <li className={styles.header__nav_link}>Портфолио</li>
            <li className={styles.header__nav_link}>Отзывы</li>
            <li className={styles.header__nav_link}>Контакты</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
