import React, { useState, useMemo, useEffect } from 'react';
import Post from '../components/Post';
import styles from './Home.module.css';
import Banner from '../components/Banner';
import { studyData } from '../data/studyData';
import { useCategory } from '../context/CategoryContext';

const Home = () => {
  const { selectedCategory } = useCategory();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  
  // 선택된 카테고리가 있으면 해당 카테고리의 데이터만 필터링
  const filteredData = useMemo(() => {
    const filtered = selectedCategory
      ? studyData.filter(item => item.category === selectedCategory)
      : studyData;
    console.log('Filtered Data Length:', filtered.length);
    return filtered;
  }, [selectedCategory]);

  // useMemo를 사용하여 페이지네이션 계산을 최적화
  const { currentItems, totalPages } = useMemo(() => {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
    const currentItems = filteredData.slice(startIndex, endIndex);
    
    console.log('Total Pages:', totalPages);
    console.log('Current Page:', currentPage);
    console.log('Current Items Length:', currentItems.length);
    
    return { currentItems, totalPages };
  }, [currentPage, itemsPerPage, filteredData]);

  // 카테고리가 변경될 때 첫 페이지로 이동
  useEffect(() => {
    console.log('Category Changed:', selectedCategory);
    setCurrentPage(1);
  }, [selectedCategory]);

  const handlePageChange = (pageNumber) => {
    console.log('Page Changed to:', pageNumber);
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    console.log('Rendering Pagination, Total Pages:', totalPages);
    
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
            {selectedCategory ? `${selectedCategory} 모일 모아보기` : '모든 스터디 모아보기'}
          </h2>
          <ul>
            <li>최신순</li>
            <li>인기순</li>
            <li>마감안된순</li>
          </ul>
        </div>
        <ul className={styles.listWrapper}>
          {currentItems.map((study, index) => (
            <li className={styles.list} key={`${study.id}-${index}`}>
              <Post 
                title={study.title}
                description={study.description}
                tag={study.category}
                isPopular={study.isPopular}
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
