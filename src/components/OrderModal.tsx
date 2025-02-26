import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useProductsCart } from '@components/store/useProductsCart';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '@components/lib/firebase';

const OrderModal = ({ onClose }: { onClose: () => void }) => {
  const [phoneInput, setPhoneInput] = useState('');
  const [name, setName] = useState('');
  const productCart = useProductsCart((state) => state.productsCart);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phoneInput || productCart.length === 0) {
      alert('Заповніть всі поля та додайте товари!');
      return;
    }

    try {
      await addDoc(collection(db, 'orders'), {
        name,
        phone: phoneInput,
        products: productCart,
        createdAt: Timestamp.now(),
        status: 'Новий',
      });

      alert('Замовлення успішно оформлено!');
      onClose();
    } catch (error) {
      console.error('Помилка при відправці замовлення:', error);
      alert('Помилка при оформленні. Спробуйте ще раз.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full relative">
        <AiOutlineClose
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer"
        />
        <h2 className="text-xl font-semibold mb-4 text-black">
          Оформлення замовлення
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6 text-black"
        >
          <input
            type="text"
            placeholder="Ваше ім’я"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="px-3 py-3 border border-gray-500 rounded-xl outline-0"
          />
          <input
            type="tel"
            placeholder="Номер телефону"
            value={phoneInput}
            onChange={(e) => setPhoneInput(e.target.value)}
            required
            className="px-3 py-3 border border-gray-500 rounded-xl outline-0"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-yellow-500 text-white text-lg rounded-2xl px-3 py-3 w-full"
            >
              Підтвердити
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
