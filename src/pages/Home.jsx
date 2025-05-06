import React, { useState, useMemo, useEffect } from 'react';
import Post from '../components/Post';
import styles from './Home.module.css';
import Banner from '../components/Banner';
import { useCategory } from '../context/CategoryContext';
import useSortStore from '../store/sortStore';
import useSearchStore from '../store/useSearchStore';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { selectedCategory } = useCategory();
  const [currentPage, setCurrentPage] = useState(1);
  const { sortType, setSortType } = useSortStore();
  const { searchResults, searchQuery } = useSearchStore();
  const itemsPerPage = 12;
  const navigate = useNavigate();
  
  // 선택된 카테고리가 있으면 해당 카테고리의 데이터만 필터링하고 정렬
  const filteredData = useMemo(() => {
    let filtered = selectedCategory
      ? searchResults.filter(item => item.category === selectedCategory)
      : searchResults;

    // 정렬 로직
    switch (sortType) {
      case 'popular':
        filtered = [...filtered].sort((a, b) => {
          // 먼저 마감 상태로 정렬 (마감된 게시물이 뒤로)
          if (a.isClosed !== b.isClosed) {
            return a.isClosed ? 1 : -1;
          }
          // 그 다음 인기 여부로 정렬
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
        });
        break;
      case 'open':
        filtered = [...filtered].sort((a, b) => (a.isClosed ? 1 : 0) - (b.isClosed ? 1 : 0));
        break;
      case 'latest':
      default:
        filtered = [...filtered].sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
        break;
    }

    return filtered;
  }, [selectedCategory, sortType, searchResults]);

  // useMemo를 사용하여 페이지네이션 계산을 최적화
  const { currentItems, totalPages } = useMemo(() => {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
    const currentItems = filteredData.slice(startIndex, endIndex);
    
    return { currentItems, totalPages };
  }, [currentPage, itemsPerPage, filteredData]);

  // 카테고리가 변경될 때 페이지를 1로 리셋
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    const maxVisiblePages = 3;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className={styles.pagination}>
        <button 
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          &lt;&lt;
        </button>
        <button 
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={currentPage === number ? styles.active : ''}
          >
            {number}
          </button>
        ))}
        <button 
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
        <button 
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          &gt;&gt;
        </button>
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      <Banner />
      <section>
        <div className={styles.navWrapper}>
          <h2 className={styles.title}>
            {searchQuery 
              ? `'${searchQuery}' 검색결과`
              : selectedCategory 
                ? `${selectedCategory} 모일 모아보기` 
                : '모든 스터디 모아보기'
            }
          </h2>
          <ul>
            <li 
              onClick={() => setSortType('latest')}
              className={sortType === 'latest' ? styles.active : ''}
            >
              최신순
            </li>
            <li 
              onClick={() => setSortType('popular')}
              className={sortType === 'popular' ? styles.active : ''}
            >
              인기순
            </li>
            <li 
              onClick={() => setSortType('open')}
              className={sortType === 'open' ? styles.active : ''}
            >
              마감안된순
            </li>
          </ul>
        </div>
        <ul className={styles.listWrapper}>
          {currentItems.map((study, index) => (
            <li 
              className={`${styles.list} ${study.isClosed ? styles.closed : ''}`} 
              key={`${study.id}-${index}`}
              onClick={() => {
                if (study.isClosed) {
                  alert('이 스터디는 마감되었습니다.');
                  return;
                }
                navigate(`/post/${study.id}`);
              }}
            >
              <Post 
                id={study.id}
                title={study.title}
                description={study.description}
                tag={study.category}
                isPopular={study.isPopular}
                isClosed={study.isClosed}
                semiTitle = {study.semiTitle}
              />
            </li>
          ))}
        </ul>
        {renderPagination()}
      </section>
    </div>
  );
};

export default Home;
