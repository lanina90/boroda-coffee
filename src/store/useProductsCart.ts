import { create } from 'zustand/react';
import { IOrderProduct } from '@components/types/IOrderProduct';

interface CartState {
  productsCart: IOrderProduct[];
  addProduct: (product: IOrderProduct) => void;
  removeProduct: (id: string, weight: string) => void;
  increaseQuantity: (id: string, weight: string) => void;
  decreaseQuantity: (id: string, weight: string) => void;
}

export const useProductsCart = create<CartState>((set) => ({
  productsCart: [],
  addProduct: (product) =>
    set((state) => {
      const existingProductIndex = state.productsCart.findIndex(
        (p) => p.id === product.id && p.weight === product.weight
      );

      if (existingProductIndex >= 0) {
        const existingProduct = state.productsCart[existingProductIndex];

        if (product.quantity === 0) {
          return state;
        }

        const updatedProducts = [...state.productsCart];
        updatedProducts[existingProductIndex] = {
          ...existingProduct,
          quantity: product.quantity,
        };
        return { productsCart: updatedProducts };
      }

      return { productsCart: [...state.productsCart, product] };
    }),

  removeProduct: (id, weight) =>
    set((state) => ({
      productsCart: state.productsCart.filter(
        (product) => !(product.id === id && product.weight === weight)
      ),
    })),

  increaseQuantity: (id, weight) =>
    set((state) => ({
      productsCart: state.productsCart.map((product) =>
        product.id === id && product.weight === weight
          ? { ...product, quantity: product.quantity + 1 }
          : product
      ),
    })),

  decreaseQuantity: (id, weight) =>
    set((state) => ({
      productsCart: state.productsCart
        .map((product) =>
          product.id === id && product.weight === weight
            ? { ...product, quantity: Math.max(product.quantity - 1, 0) }
            : product
        )
        .filter((product) => product.quantity > 0),
    })),
}));
