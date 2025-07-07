import React from 'react';

import styles from './Request.module.scss';

import adminImg from '../../../assets/images/user/admin-img.png';
import Input from '../../../ui-kit/input/Input';
import Button from '../../../ui-kit/button/Button';

const Request = () => {
  return (
    <div className={styles.request}>
      <div className={styles.request__container}>
        <div className={styles.request__container_content}>
          <div className={styles.contact__invite}>
            <h2 className={styles.contact__invite_title}>
              Появились вопросы
              <br />
              или хотите обсудить
              <br />
              проект?
            </h2>
            <div className={styles.admin__info}>
              <div className={styles.admin__info_img_container}>
                <img src={adminImg} alt="" className={styles.admin__info_img} />
              </div>
              <div className={styles.admin__info_text_container}>
                <div className={styles.admin__info_text_container_content}>
                  <h4 className={styles.content__title}>Привет, я Эльвира 👋</h4>
                  <p className={styles.content__subtitle}>Администратор Lapis Services.</p>
                  <p className={styles.content__text}>
                    Если у вас есть проект или идея — заполните форму, и я помогу
                    <br />
                    найти подходящее решение для вашего бизнеса.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.request__form}>
            <div className={styles.request__form_primary}>
              <Input type="text" placeholder="Ваше имя" name="text" className="primary" />
              <Input type="text" placeholder="Ваше имя" name="text" className="primary" />
              <Input type="text" placeholder="Ваше имя" name="text" className="primary" />
            </div>
            <div className={styles.request__form_secondary}>
              <Input
                type="text"
                placeholder="Опишите коротко, какой проект вас интересует"
                name="text"
                className="secondary"
              />
              <Button className="primary_large">Оставить заявку</Button>
              <a href="/" className={styles.request__form_text}>
                Отправляя заявку, вы соглашаетесь на{' '}
                <span className={styles.text_highlight}>обработку персональных данных</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
