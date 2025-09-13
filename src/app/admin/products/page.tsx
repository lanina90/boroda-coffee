import React from 'react';
import { fetchProducts } from '@components/utils/fetchProducts';
import ProductsListClient from '@components/pages/admin/ProductsListClient';
export const revalidate = 0;

const Page = async () => {
  const products = await fetchProducts();

  return <ProductsListClient products={products ?? []} />;
};

export default Page;
