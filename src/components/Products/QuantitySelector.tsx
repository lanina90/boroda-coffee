'use client';

import React, { useState } from 'react';
import { FaShoppingBasket } from 'react-icons/fa';

const QuantitySelector = ({
  initialQuantity = 0,
  onAddToCart,
}: {
  initialQuantity?: number;
  onAddToCart: (quantity: number) => void;
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-3">
      <div className="flex items-center border-2 border-black rounded-md px-2 py-[3px]">
        <button
          onClick={handleDecrease}
          className="text-xs font-bold text-black hover:text-gray-700 focus:outline-none"
        >
          -
        </button>
        <span className="mx-5 text-xs font-semibold">{quantity}</span>
        <button
          onClick={handleIncrease}
          className="text-xs font-bold text-black hover:text-gray-700 focus:outline-none"
        >
          +
        </button>
      </div>

      <button
        onClick={() => onAddToCart(quantity)}
        className="bg-yellow-500 p-1 hover:bg-yellow-400 transition"
      >
        <FaShoppingBasket className="text-white" size={20} />
      </button>
    </div>
  );
};

export default QuantitySelector;
