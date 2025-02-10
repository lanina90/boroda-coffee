import React from 'react';
import ProductForm from '@components/components/admin/ProductForm/ProductForm';

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div className={'flex flex-col px-7 py-6 gap-4 flex-grow'}>
      <h1 className={'font-semibold text-2xl'}>Редагування товару</h1>
      <ProductForm id={params.id} />
    </div>
  );
};

export default Page;
