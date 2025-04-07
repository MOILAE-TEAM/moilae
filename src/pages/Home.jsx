import React from 'react';
import Post from '../components/Post';
import styles from './Home.module.css';
import Banner from '../components/Banner';
const Home = ({ children, onClick }) => {

  const studyList = Array(10).fill(0).map((_, i) => i + 1); // [1, 2, ..., 10] 
  return (
    <div className={styles.wrapper}>

      <Banner />
      <section>
        <div className={styles.navWrapper}>
          <h2 className={styles.title}>모든 스터디 모아보기</h2>
          <ul>
            <li>최신순</li>
            <li>인기순</li>
            <li>마감안된순</li>
          </ul>
        </div>
        <ul className={styles.listWrapper}>
          {studyList.map((num) => (
            <li className={styles.list} key={num}>
              <Post />
            </li>
          ))}
        </ul>

      </section>
    </div>
  );
};

export default Home;
