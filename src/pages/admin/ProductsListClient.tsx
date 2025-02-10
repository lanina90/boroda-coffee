'use client';

import React, { useState } from 'react';
import ProductsList from '@components/components/admin/ProductsList/ProductsList';
import ProductsListHeadig from '@components/components/admin/ProductsList/ProductsListHeadig';
import { IProduct } from '@components/types/IProduct';

const ProductsListClient = ({ products }: { products: IProduct[] }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div className={'p-5 flex flex-col gap-2 w-full max-w-screen-lg'}>
      <ProductsListHeadig
        products={products}
        onSearchHandler={(products) => setFilteredProducts(products)}
      />
      <ProductsList products={filteredProducts} />
    </div>
  );
};

export default ProductsListClient;
