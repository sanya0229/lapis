import React from 'react';

import arrow from '../../assets/icons/svg/arrow.svg';
import styles from './Button.module.scss';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={styles[`button__${className}`] || styles['button__primary']}
      type="button"
    >
      {className === 'primary' ? (
        <>
          {children}
          <img className={styles.button__primary_arrow_svg} src={arrow} alt="arrow" />
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
