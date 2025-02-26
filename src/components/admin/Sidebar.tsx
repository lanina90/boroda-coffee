import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div
      className={
        'min-w-[150px] max-w-[250px] w-full border border-l-black p-5 flex flex-col gap-3 items-center justify-start'
      }
    >
      <Link
        href="/admin/orders"
        className={
          'border border-black rounded-xl w-full shadow-2xl px-3 py-2 hover:bg-black hover:text-white'
        }
      >
        Замовлення
      </Link>
      <Link
        href="/admin/products"
        className={
          'border border-black rounded-xl w-full shadow-2xl px-3 py-2 hover:bg-black hover:text-white'
        }
      >
        Ассортимент
      </Link>
    </div>
  );
};

export default Sidebar;
