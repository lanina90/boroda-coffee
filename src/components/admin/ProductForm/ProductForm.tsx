'use client';

import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc, addDoc, collection } from 'firebase/firestore';
import { db } from '@components/lib/firebase';
import { uploadToCloudinary } from '@components/lib/uploadToCloudinary';
import CustomInput from '@components/components/admin/ProductForm/CustomInput';
import VariationsInput from '@components/components/admin/ProductForm/VariationsInput';
import ProductCard from '@components/components/Products/ProductCard';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface FormData {
  name: string;
  roasting: string;
  taste: string;
  composition: string;
  options: Record<string, number>;
  image: string;
}

const ProductForm = ({ id }: { id?: string }) => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    roasting: '',
    taste: '',
    composition: '',
    options: {},
    image: '',
  });

  const [file, setFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(
    formData.image || null
  );

  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);

    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewImage(objectUrl);
    }
  };

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const docRef = doc(db, 'products', id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setFormData(docSnap.data() as typeof formData);
          } else {
            console.error('Document does not exist');
          }
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };

      fetchData();
    }
  }, [id]);

  useEffect(() => {
    setPreviewImage(formData.image || null);
  }, [formData.image]);

  useEffect(() => {
    return () => {
      if (previewImage && previewImage.startsWith('blob:')) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = formData.image;

      if (file) {
        imageUrl = await uploadToCloudinary(file);
        console.log('imageUrl resp', imageUrl);
      }

      const product = { ...formData, image: imageUrl };
      console.log('product', product);

      if (id) {
        const docRef = doc(db, 'products', id);
        const updateDocresp = await updateDoc(docRef, product);

        console.log('updateDocresp', updateDocresp);

      } else {
        await addDoc(collection(db, 'products'), product);

        const addDocresp = await addDoc(collection(db, 'products'), product);
        console.log('addDocresp', addDocresp);
      }

      alert(`Успіх! Йдемо зараз на сторінку дашборду!`);

      setTimeout(() => router.push('/admin/products'), 2000);
    } catch (error) {
      console.error('Error saving product:', error);
      alert(`Помилка: ${error instanceof Error ? error.message : error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={'flex gap-6 w-full'}>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-4 bg-white shadow-lg rounded h-auto flex-shrink-0"
      >
        <CustomInput
          label={'Назва'}
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <CustomInput
          label={'Тип обсмаження'}
          type="text"
          name="roasting"
          id="roasting"
          value={formData.roasting}
          onChange={handleInputChange}
          required
        />

        <div className={'flex flex-col gap-2'}>
          <label htmlFor="taste">Післясмак</label>
          <textarea
            name="taste"
            id="taste"
            value={formData.taste}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className={'flex flex-col gap-2'}>
          <label htmlFor="composition">Склад</label>
          <textarea
            name="composition"
            id="composition"
            value={formData.composition}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <VariationsInput
          options={formData.options}
          onChange={(updatedOptions) => {
            setFormData((prev) => ({
              ...prev,
              options: updatedOptions,
            }));
          }}
        />

        <div className={'flex flex-col gap-2'}>
          <label htmlFor="image">Картинка</label>
          <input
            type="file"
            id="image"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
          />
          <Image
            src={previewImage || formData.image || '/placeholder.jpg'}
            alt="Product"
            width={200}
            height={250}
            className="mt-2"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {loading ? 'Saving...' : id ? 'Update Product' : 'Add Product'}
        </button>
      </form>
      <div className={'w-full flex-grow flex justify-center items-center'}>
        <ProductCard
          isDisable
          product={{
            id: formData.name,
            name: formData.name,
            options: formData.options,
            composition: formData.composition,
            taste: formData.taste,
            roasting: formData.roasting,
            image: previewImage,
          }}
        />
      </div>
    </div>
  );
};

export default ProductForm;
