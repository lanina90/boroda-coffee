import React from 'react';
import ProductForm from '@components/components/admin/ProductForm/ProductForm';

const Page = () => {
  return (
    <div className={'flex flex-col px-7 py-6 gap-4 flex-grow'}>
      <h1 className={'font-semibold text-2xl'}>Додавання нового товару</h1>
      <ProductForm />
    </div>
  );
};

export default Page;
