import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './PostDetailPage.module.css';
import useSearchStore from '../store/useSearchStore';
import Banner from '../components/Banner';

const PostDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { searchResults } = useSearchStore();
  
  const post = searchResults.find(item => item.id === parseInt(id));

  if (!post) {
    return (
      <div className={styles.wrapper}>
        <Banner />
        <div className={styles.container}>
          <h2>게시물을 찾을 수 없습니다.</h2>
          <button onClick={() => navigate('/')}>홈으로 돌아가기</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Banner />
      <div className={styles.container}>
        <div className={styles.header}>
          <button className={styles.backButton} onClick={() => navigate('/')}>
            ← 돌아가기
          </button>
          <h1>{post.title}</h1>
          <p className={styles.description}>{post.semiTitle}</p>
          <div className={styles.metaInfo}>
            <span className={styles.category}>{post.category}</span>
            {post.isPopular && <span className={styles.popular}>인기스터디</span>}
            {post.isClosed && <span className={styles.closed}>마감</span>}
          </div>
        </div>
        
        <div className={styles.content}>
          <p className={styles.description}>{post.description}</p>
          
          
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <h3>모집 인원</h3>
              <p>{post.currentMembers} / {post.maxMembers}명</p>
            </div>
            <div className={styles.detailItem}>
              <h3>사용 플랫폼</h3>
              <p>{post.platform || ''}</p>
            </div>
            <div className={styles.detailItem}>
              <h3>시작일</h3>
              <p>{post.startDate}</p>
            </div>
            <div className={styles.detailItem}>
              <h3>종료일</h3>
              <p>{post.endDate}</p>
            </div>
            <div className={styles.detailItem}>
              <h3>장소</h3>
              <p>{post.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage; 