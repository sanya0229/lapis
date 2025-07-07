import React from 'react';

import styles from './Input.module.scss';
import arrow from '../../assets/icons/svg/arrow.svg';

const Input = ({ inputType, inputName, placeholder, className }) => {
  return (
    <input
      type={inputType}
      placeholder={placeholder}
      name={inputName}
      className={styles[`input__${className}`] || styles['input__primary']}
    />
  );
};

export default Input;
