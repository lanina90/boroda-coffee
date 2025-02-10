'use client';

import React from 'react';
import Image from 'next/image';
import { MdDeleteOutline, MdModeEdit } from 'react-icons/md';
import { useRouter } from 'next/navigation';

import { IProduct } from '@components/types/IProduct';

const ProductsList = ({ products }: { products: IProduct[] }) => {
  const router = useRouter();
  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className={
            'p-1 flex items-center justify-between border border-black rounded-xl px-2 py-2'
          }
        >
          <div className={'flex gap-1 items-center'}>
            {product?.image && (
              <Image
                src={product?.image ?? ''}
                width={20}
                height={20}
                alt={product.name}
              />
            )}
            <div>{product.name}</div>
          </div>
          <div className={'flex gap-1 items-center'}>
            <MdModeEdit
              size={20}
              className={'cursor-pointer'}
              onClick={() => router.push(`/admin/products/${product.id}`)}
            />
            <MdDeleteOutline size={20} className={'cursor-pointer'} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductsList;
