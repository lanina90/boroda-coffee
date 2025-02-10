'use client';

import React, { useEffect, useState } from 'react';
import { IProduct } from '@components/types/IProduct';
import { BiPlus } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import { IoSearch } from 'react-icons/io5';

const ProductsListHeadig = ({
  onSearchHandler,
  products,
}: {
  products: IProduct[];
  onSearchHandler: (products: IProduct[]) => void;
}) => {
  const [searchVal, setSearchVal] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (searchVal && searchVal.length >= 2) {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchVal.toLowerCase())
      );
      onSearchHandler(filteredProducts);
    } else {
      onSearchHandler(products);
    }
  }, [searchVal]);

  return (
    <div className={'flex items-center justify-between py-4'}>
      <div className="flex items-center w-full max-w-xs rounded-full px-4 py-2 shadow-md">
        <IoSearch size={20} className="text-gray-500 mr-2" />
        <input
          type="text"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          placeholder="Пошук товару..."
          className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
        />
      </div>
      <button
        className={
          'flex items-center gap-2 rounded-2xl bg-amber-500 px-4 py-2 text-white'
        }
        onClick={() => router.push('/admin/products/add-new')}
      >
        Додати кавусю
        <BiPlus />
      </button>
    </div>
  );
};

export default ProductsListHeadig;
