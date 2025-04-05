import React from 'react';
import Post from '../components/Post';
import styles from './Home.module.css';
const Home = ({ children, onClick }) => {

    const studyList = Array(10).fill(0).map((_, i) => i + 1); // [1, 2, ..., 10] 
  return (
    <section>  
        <h2 className={styles.title}>모든 스터디 모아보기</h2>
        <ul>
        {studyList.map((num) => (
            <Post className={styles.list} key={num} />
      ))}
        </ul>
    </section>
  );
};

export default Home;
