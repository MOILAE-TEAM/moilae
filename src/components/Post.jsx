import React from 'react';
import styles from './Post.module.css';
import fireIcon from '../assets/fireicon.svg';
const Post = ({ children, onClick }) => {
  return (
    <li>
        <div className={styles.titleWrapper} >
            <h3>주 3회 이상 운동하기 습관 챌린지</h3>
            <img  className={styles.fireIcon } src={fireIcon} alt="인기 아이콘" width={44} height={44} />
            <div className={styles.popularIcon}>인기스터디</div>
        </div>
        <p>헬스 ㅇ 러닝 ㅇ 운동종목 상관 ㄴㄴ</p>
        <div className={styles.tag}>손캠형</div>
    </li>
  );
};

export default Post;
