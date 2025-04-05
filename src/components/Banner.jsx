import React from 'react';
import styles from './Banner.module.css';
import ad from '../assets/ad.svg';
const Banner = ({ children, onClick }) => {
  return (
     <article>
     
        <img  className={styles.fireIcon} src={ad} alt="광고배너" />
        <div className={styles.buttonWrapper}>
            <p>내가 찾는 스터디가 없다면?</p>
            <button>스터디 만들기</button>
        </div>
    </article>
  );
};

export default Banner;
