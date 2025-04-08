import { create } from 'zustand';

const useCreatePostStore = create((set) => ({
  title: '',
  category: '',
  description: '',
  type: '',
  setField: (field, value) => set((state) => ({ ...state, [field]: value })),
}));

export default useCreatePostStore;