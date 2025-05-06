import React from 'react';
import styles from './Post.module.css';
import fireIcon from '../assets/fireicon.svg';

const Post = ({ title, description, tag, isPopular }) => {
  return (
    <div className={styles.card}>
      <div className={styles.titleWrapper}>
        <h3>{title}</h3>
        {isPopular && (
          <>
            <img className={styles.fireIcon} src={fireIcon} alt="인기 아이콘" width={44} height={44} />
            <div className={styles.popularIcon}>인기스터디</div>
          </>
        )}
      </div>
      <p className={styles.des}>{description}</p>
      <div className={styles.tag}>{tag}</div>
    </div>
  );
};

export default Post;
