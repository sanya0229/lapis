import React, { useEffect, useRef } from 'react';

import styles from './Testimonials.module.scss';
import TestimonialCard from './components/testimonialCard/TestimonialCard';

import userLogo from '../../../assets/images/user/user-img.png';

const Testimonials = () => {
  const contentRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const content = contentRef.current;

    const onMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX - content.offsetLeft;
      scrollLeft.current = content.scrollLeft;
      content.classList.add(styles.dragging);
    };

    const onMouseLeave = () => {
      isDragging.current = false;
      content.classList.remove(styles.dragging);
    };

    const onMouseUp = () => {
      isDragging.current = false;
      content.classList.remove(styles.dragging);
    };

    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - content.offsetLeft;
      const walk = x - startX.current;
      content.scrollLeft = scrollLeft.current - walk;
    };

    content?.addEventListener('mousedown', onMouseDown);
    content?.addEventListener('mouseleave', onMouseLeave);
    content?.addEventListener('mouseup', onMouseUp);
    content?.addEventListener('mousemove', onMouseMove);

    return () => {
      content.removeEventListener('mousedown', onMouseDown);
      content.removeEventListener('mouseleave', onMouseLeave);
      content.removeEventListener('mouseup', onMouseUp);
      content.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials__container}>
        <div className={styles.testimonials__container_header}>
          <h2 className={styles.testimonials__container_header_title}>Отзывы клиентов</h2>
        </div>
        <div ref={contentRef} className={styles.testimonials__content}>
          {[...Array(4)].map((_, i) => (
            <TestimonialCard
              key={i}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
