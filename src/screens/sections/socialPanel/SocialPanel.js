import React from 'react';

import styles from './SocialPanel.module.scss';
import SocialCard from './components/socialCard/SocialCard';

import phoneIcon from '../../../assets/icons/social-media-icons/phone-icon.png';
import telegramIcon from '../../../assets/icons/social-media-icons/telegram-icon.png';
import mailIcon from '../../../assets/icons/social-media-icons/mail-icon.png';
import whatsappIcon from '../../../assets/icons/social-media-icons/whatsapp-icon.png';
import linkedinIcon from '../../../assets/icons/social-media-icons/linkedin-icon.png';

const SocialPanel = () => {
  return (
    <div className={styles.social}>
      <div className={styles.social__container}>
        <SocialCard text="Позвонить" imgSrc={phoneIcon} imgAlt="phone icon" numText="t.me/lapis" />

        <SocialCard
          text="Telegram"
          imgSrc={telegramIcon}
          imgAlt="telegram icon"
          numText="t.me/lapis"
        />
        <SocialCard text="Почта" imgSrc={mailIcon} imgAlt="mail icon" numText="hello@lapis.com" />
        <SocialCard
          text="WhatsApp"
          imgSrc={whatsappIcon}
          imgAlt="whatsapp icon"
          numText="+374 123 456 87 90"
        />
        <SocialCard
          text="LinkedIn"
          imgSrc={linkedinIcon}
          imgAlt="linkedin icon"
          numText="@lapisservices"
        />
      </div>
    </div>
  );
};

export default SocialPanel;
