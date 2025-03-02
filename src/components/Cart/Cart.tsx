import React from 'react';
import { useProductsCart } from '@components/store/useProductsCart';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';

const Cart = ({
  onCartClose,
  onSubmit,
}: {
  onSubmit: () => void;
  onCartClose: () => void;
}) => {
  const productCart = useProductsCart((state) => state.productsCart);
  const increaseQuantity = useProductsCart((state) => state.increaseQuantity);
  const decreaseQuantity = useProductsCart((state) => state.decreaseQuantity);

  return (
    <>
      <div
        className={
          'absolute w-full max-w-xl top-0 right-0 h-[100vh] bg-white text-black rounded-l-2xl p-4 flex flex-col gap-3 z-50'
        }
      >
        <div className={'flex justify-between items-center'}>
          <h2 className={'text-2xl font-semibold'}>Корзина</h2>
          <IoMdClose
            size={24}
            onClick={onCartClose}
            className={'cursor-pointer'}
          />
        </div>
        <div className={'h-[1px] w-full bg-gray-200 my-2'} />
        <div className={'flex-grow text-black flex flex-col gap-4'}>
          {productCart.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className={'flex items-center justify-between'}
            >
              <div className={'flex items-center gap-3'}>
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="object-cover rounded-md"
                  />
                )}
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.weight}г</p>
                </div>
              </div>
              <div className={'flex items-center gap-3'}>
                <div className="flex items-center border rounded px-2">
                  <button
                    onClick={() => decreaseQuantity(item.id, item.weight)}
                    className="text-xs font-bold text-black hover:text-gray-700 focus:outline-none"
                  >
                    -
                  </button>
                  <span className="mx-5 text-xs font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(item.id, item.weight)}
                    className="text-xs font-bold text-black hover:text-gray-700 focus:outline-none"
                  >
                    +
                  </button>
                </div>
                <div className="text-sm font-semibold">
                  {item.price * item.quantity} грн.
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={'flex justify-between items-center font-bold text-xl'}>
          <p>Сума</p>
          <p>
            {productCart.reduce(
              (acc, item) => acc + item.quantity * item.price,
              0
            )}{' '}
            грн
          </p>
        </div>
        <div>
          <button
            className={
              'bg-yellow-500 text-white text-lg rounded-2xl px-3 py-3 w-full'
            }
            onClick={() => {
              onSubmit();
              onCartClose();
            }}
          >
            Оформити замовлення
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
