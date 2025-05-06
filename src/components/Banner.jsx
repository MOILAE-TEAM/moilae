import React from 'react';
import styles from './Banner.module.css';
import ad from '../assets/ad.png';

const Banner = ({ onClick }) => {
  return (
     <article>
        <a href="https://www.naver.com" target="_blank" rel="noopener noreferrer" onClick={onClick}>
          <img className={styles.fireIcon} src={ad} alt="광고배너" />
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
