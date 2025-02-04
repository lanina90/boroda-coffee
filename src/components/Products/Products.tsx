import React from 'react';
import { IoSearch } from 'react-icons/io5';
import ProductCard from '@components/components/Products/ProductCard';
import { IProduct } from '@components/types/IProduct';

const Products = ({ products }: { products: IProduct[] }) => {
  return (
    <div className={'px-7 py-5 flex flex-col gap-6'} id={'shop'}>
      <div className={'flex justify-between items-center'}>
        <h1 className={'text-2xl font-bold'}>Кава</h1>
        <div className="flex items-center w-full max-w-xs rounded-full px-4 py-2 shadow-md">
          <IoSearch size={20} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Знайди свій смак..."
            className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
          />
        </div>
      </div>
      <div className={'grid grid-cols-3 gap-4'}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
