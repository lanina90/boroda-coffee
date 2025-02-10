'use client';

import React, { useState } from 'react';
import ProductsList from '@components/components/admin/ProductsList/ProductsList';
import ProductsListHeadig from '@components/components/admin/ProductsList/ProductsListHeadig';
import { IProduct } from '@components/types/IProduct';
import { deleteDoc } from '@firebase/firestore';
import { doc } from 'firebase/firestore';
import { db } from '@components/lib/firebase';

const ProductsListClient = ({ products }: { products: IProduct[] }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const onProductDelete = async (id: string) => {
    if (window.confirm('Ти впевнена, що хочешь видалити цей товар?')) {
      try {
        const docRef = doc(db, 'products', id);
        await deleteDoc(docRef);
        alert('Товар успішно видалено');
        setFilteredProducts((prev) =>
          prev.filter((product) => product.id !== id)
        );
      } catch (error) {
        console.error('Щось пішло не так:', error);
        alert(
          `Щось пішло не так: ${error instanceof Error ? error.message : error}`
        );
      }
    }
  };

  return (
    <div className={'p-5 flex flex-col gap-2 w-full max-w-screen-lg'}>
      <ProductsListHeadig
        products={products}
        onSearchHandler={(products) => setFilteredProducts(products)}
      />
      <ProductsList
        products={filteredProducts}
        onProductDelete={onProductDelete}
      />
    </div>
  );
};

export default ProductsListClient;
