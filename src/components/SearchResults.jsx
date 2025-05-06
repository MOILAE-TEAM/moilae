import React from 'react';
import styles from './SearchResults.module.css';
import Post from './Post';
import useSearchStore from '../store/useSearchStore';

const SearchResults = () => {
    const { searchQuery, searchResults } = useSearchStore();

    return (
        <div className={styles.container}>
            <h2 className={styles.searchTitle}>'{searchQuery}' 검색결과</h2>
            <div className={styles.resultsWrapper}>
                {searchResults.length > 0 ? (
                    searchResults.map((result, index) => (
                        <Post
                            key={index}
                            title={result.title}
                            description={result.description}
                            tag={result.tag}
                            isPopular={result.isPopular}
                        />
                    ))
                ) : (
                    <p className={styles.noResults}>검색 결과가 없습니다.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResults; 