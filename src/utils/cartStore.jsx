import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find(
        (item) => item.product.id === product.id
      );
      if (existingProduct) {
        const updatedCart = state.cart.map((item) => {
          if (item.product.id === product.id) {
            return { product: item.product, quantity: item.quantity + 1 };
          }
          return item;
        });
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      } else {
        const updatedCart = [...state.cart, { product, quantity: 1 }];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }
    }),
  removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.cart.filter(
        (item) => item.product.id !== productId
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
  updateQuantity: (productId, quantity) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
}));

export default useCartStore;
