'use client';

import React, { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import ProductCard from '@components/components/Products/ProductCard';
import { IProduct } from '@components/types/IProduct';

const Products = ({ products }: { products: IProduct[] }) => {
  const [filetredProducts, setFiletredProducts] = useState<IProduct[]>(
    products ?? []
  );
  const [searchVal, setSearchVal] = useState('');

  useEffect(() => {
    if (searchVal && searchVal.length >= 2) {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchVal.toLowerCase())
      );
      setFiletredProducts(filteredProducts);
    } else {
      setFiletredProducts(products);
    }
  }, [searchVal]);

  return (
    <div className={'px-7 py-5 flex flex-col gap-6'} id={'shop'}>
      <div className={'flex justify-end items-center w-full'}>
        {/*<h1 className={'text-2xl font-bold'}>Кава</h1>*/}
        <div className="flex items-center w-full max-w-xs rounded-full px-4 py-2 shadow-md">
          <IoSearch size={20} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Знайди свій смак..."
            className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </div>
      </div>
      <div className={'grid grid-cols-3 gap-4'}>
        {filetredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
