import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css';
import ad from '../assets/ad.png';
import adMobile from '../assets/ad_mobile.png';

const Banner = ({ onClick }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
     <article>
        <a href="https://band-trapezoid-89a.notion.site/1-1ebd2ed346f180f592d0ef8938cddc8e" target="_blank" rel="noopener noreferrer" onClick={onClick}>
          <img className={styles.fireIcon} src={isMobile ? adMobile : ad} alt="광고배너" />
        </a>
        <div className={styles.buttonWrapper}>
            <p className={styles.question}>내가 찾는 스터디가 없다면?</p>
            <a href="https://walla.my/survey/ikykdUun43CzkEyIQ7gt" target="_blank" rel="noopener noreferrer">
              <button>스터디 만들기</button>
            </a>
        </div>
    </article>
  );
};

export default Banner;
