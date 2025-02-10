'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IProduct } from '@components/types/IProduct';
import { useProductsCart } from '@components/store/useProductsCart';

const ProductCard = ({
  product,
  isDisable,
}: {
  isDisable?: boolean;
  product: IProduct;
}) => {
  const { id, name, options, composition, taste, roasting, image } = product;
  const addProduct = useProductsCart((state) => state.addProduct);
  const [isHovered, setIsHovered] = useState(false);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>(() =>
    Object.fromEntries(Object.keys(options || {}).map((key) => [key, 0]))
  );

  const handleQuantityChange = (weight: string, quantity: number) => {
    setQuantities((prev) => ({ ...prev, [weight]: quantity }));
  };

  const handleAddToCart = () => {
    Object.entries(quantities).forEach(([weight, quantity]) => {
      if (quantity > 0) {
        addProduct({
          id,
          name,
          weight,
          price: options[weight],
          quantity,
        });
      }
    });
  };

  return (
    <div className="max-w-[300px] mx-auto p-4 text-center">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full flex justify-center items-center"
      >
        <div
          className={
            ' flex flex-col gap-2 w-[200px] h-[285px] relative overflow-hidden'
          }
        >
          <Image
            src={image ?? '/placeholder.jpg'}
            alt="Coffee Bag"
            width={200}
            height={250}
          />
          <div
            className={`text-left absolute flex flex-col items-center justify-center p-3 gap-2 w-[200px] h-[285px] bg-black bg-opacity-85 text-white
          transform transition-transform duration-700  ${isHovered ? 'translate-y-0 opacity-1' : 'translate-y-full opacity-0'}`}
          >
            <p>
              <span className={'font-medium text-sm'}>Склад</span>:{' '}
              <span className={'uppercase text-xs'}>{composition}</span>
            </p>
            <p>
              <span className={'font-medium text-sm'}>Післясмак</span>:{' '}
              <span className={'uppercase text-xs'}>{taste}</span>
            </p>
            <p>
              <span className={'font-medium text-sm'}>Тип обсмаження</span>:{' '}
              <span className={'uppercase text-xs'}>{roasting}</span>
            </p>
          </div>
        </div>
      </div>
      <h3 className="mt-4 text-sm leading-none text-gray-500 uppercase">
        {name}
      </h3>
      <div className="mt-4">
        {Object.entries(options).map(([weight, price]) => (
          <div
            key={weight}
            className="flex items-center justify-between gap-4 my-2"
          >
            <span className="text-xs">
              {weight}г -{' '}
              <span className={'font-semibold'}>{price}грн/уп.</span>
            </span>
            <div className="flex items-center border rounded px-2">
              <button
                onClick={() =>
                  handleQuantityChange(
                    weight,
                    Math.max(quantities[weight] - 1, 0)
                  )
                }
                className="text-xs font-bold text-black hover:text-gray-700 focus:outline-none"
              >
                -
              </button>
              <span className="mx-5 text-xs font-semibold">
                {quantities[weight]}
              </span>
              <button
                onClick={() =>
                  handleQuantityChange(weight, quantities[weight] + 1)
                }
                className="text-xs font-bold text-black hover:text-gray-700 focus:outline-none"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        disabled={isDisable}
        onClick={handleAddToCart}
        className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400 disabled:opacity-50 disabled:pointer-events-none"
      >
        Додати до кошика
      </button>
    </div>
  );
};

export default ProductCard;
