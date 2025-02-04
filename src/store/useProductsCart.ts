import { create } from 'zustand/react';

interface Product {
  id: string;
  name: string;
  weight: string;
  price: number;
  quantity: number;
}

interface CartState {
  productsCart: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
}

export const useProductsCart = create<CartState>((set) => ({
  productsCart: [],
  addProduct: (product) =>
    set((state) => ({
      productsCart: [...state.productsCart, product],
    })),
  removeProduct: (id) =>
    set((state) => ({
      productsCart: state.productsCart.filter((product) => product.id !== id),
    })),
}));
