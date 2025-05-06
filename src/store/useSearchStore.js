import { create } from 'zustand';
import { studyData } from '../data/studyData';

// 최신순으로 정렬된 초기 데이터
const sortedData = [...studyData].sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

const useSearchStore = create((set) => ({
  searchQuery: '',
  searchResults: sortedData, // 최신순으로 정렬된 데이터를 초기값으로 설정
  setSearchQuery: (query) => {
    if (!query.trim()) {
      // 검색어가 비어있으면 전체 데이터를 최신순으로 정렬하여 반환
      set({ 
        searchQuery: '',
        searchResults: sortedData
      });
      return;
    }

    // 검색어로 필터링
    const results = studyData.filter(item => {
      const searchLower = query.toLowerCase().trim();
      const titleMatch = item.title.toLowerCase().includes(searchLower);
      const descMatch = item.description.toLowerCase().includes(searchLower);
      const categoryMatch = item.category.toLowerCase().includes(searchLower);
      
      return titleMatch || descMatch || categoryMatch;
    }).sort((a, b) => new Date(b.startDate) - new Date(a.startDate)); // 최신순 정렬
    
    set({ 
      searchQuery: query,
      searchResults: results
    });
  },
  resetSearch: () => {
    set({
      searchQuery: '',
      searchResults: sortedData
    });
  }
}));

export default useSearchStore; 