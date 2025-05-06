import { useState } from 'react';
import { studyData } from '../data/studyData';
import { useCategory } from '../context/CategoryContext';
import styles from './CategoryNav.module.css';

const CategoryNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setSelectedCategory } = useCategory();
  
  const categories = [...new Set(studyData.map(item => item.category))];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  const handleAllClick = () => {
    setSelectedCategory(null);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navButtons}>
        <div 
          className={styles.trigger}
          onClick={handleAllClick}
        >
          전체보기
        </div>
        <div 
          className={styles.trigger}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          카테고리
          {isOpen && (
            <div className={styles.dropdown}>
              {categories.map((category) => (
                <div 
                  key={category} 
                  className={styles.item}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav; 