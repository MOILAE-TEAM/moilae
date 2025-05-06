import { create } from 'zustand';

const useSortStore = create((set) => ({
  sortType: 'latest', // 'latest', 'popular', 'open'
  setSortType: (type) => set({ sortType: type }),
}));

export default useSortStore; 