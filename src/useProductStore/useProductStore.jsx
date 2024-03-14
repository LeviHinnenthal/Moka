import create from 'zustand';

const useProductStore = create((set) => ({
  addedProduct: false,
  setAddedProduct: (value) => set({ addedProduct: value }),
}));

export default useProductStore;
