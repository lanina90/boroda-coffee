import React from 'react';
import ProductForm from '@components/components/admin/ProductForm/ProductForm';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div className={'flex flex-col px-7 py-6 gap-4 flex-grow'}>
      <h1 className={'font-semibold text-2xl'}>Редагування товару</h1>
      <ProductForm id={id} />
    </div>
  );
}
