'use client';

import React, { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { db } from '@components/lib/firebase';
import { IOrderProduct } from '@components/types/IOrderProduct';
import { collection, doc, getDocs, updateDoc } from '@firebase/firestore';

const statusColors: Record<string, string> = {
  Новий: 'bg-gray-200 text-gray-800',
  'В обробці': 'bg-yellow-300 text-gray-800',
  Виконано: 'bg-green-300 text-gray-800',
  Скасовано: 'bg-red-300 text-gray-800',
};

interface IOrders {
  id: string;
  name: string;
  phone: string;
  status: string;
  products: IOrderProduct[];
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
}

const Page = () => {
  const [searchVal, setSearchVal] = useState('');
  const [orders, setOrders] = useState<IOrders[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<IOrders[]>([]);

  useEffect(() => {
    if (searchVal.length > 2) {
      const filtered = orders.filter(
        (order) =>
          order.name.includes(searchVal) ||
          order.phone.includes(searchVal) ||
          order.products.some((prod) => prod.name.includes(searchVal))
      );
      setFilteredOrders(filtered);
    } else {
      setFilteredOrders(orders);
    }
  }, [searchVal, orders]);

  useEffect(() => {
    const fetchOrders = async () => {
      const querySnapshot = await getDocs(collection(db, 'orders'));
      const ordersArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(ordersArray as IOrders[]);
    };

    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    const orderRef = doc(db, 'orders', orderId);
    await updateDoc(orderRef, { status: newStatus });

    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className={'p-5 flex flex-col gap-4 w-full max-w-screen-lg'}>
      <div
        className={
          'flex justify-between items-center gap-2 w-full max-w-screen-lg'
        }
      >
        <h1 className={'text-black font-semibold text-2xl'}>Замовлення</h1>
        <div className="flex items-center w-full max-w-xs rounded-full px-4 py-2 shadow-md">
          <IoSearch size={20} className="text-gray-500 mr-2" />
          <input
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Пошук товару чи клієнта..."
            className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
          />
        </div>
      </div>
      <div className={'flex flex-col gap-2 w-full'}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">№</th>
                <th className="border border-gray-300 px-4 py-2">Дата</th>
                <th className="border border-gray-300 px-4 py-2">Клієнт</th>
                <th className="border border-gray-300 px-4 py-2">Замовлення</th>
                <th className="border border-gray-300 px-4 py-2">Статус</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(order.createdAt.seconds * 1000).toLocaleString()}
                  </td>

                  <td className="border border-gray-300 px-4 py-2">
                    <p className={'mb-1'}>{order.name}</p>
                    <p>{order.phone}</p>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.products.map((product, index) => (
                      <div key={`${product.id}-${index}`}>
                        {product.name}, {product.weight} г, {product.quantity}{' '}
                        шт.
                      </div>
                    ))}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                      className={`px-2 py-1 rounded text-center font-semibold transition-all duration-200 ${
                        statusColors[order.status] ||
                        'bg-gray-200 text-gray-800'
                      }`}
                    >
                      <option
                        value="Новий"
                        className="bg-gray-300 text-gray-800"
                      >
                        Новий
                      </option>
                      <option
                        value="В обробці"
                        className="bg-yellow-300 text-yellow-800"
                      >
                        В обробці
                      </option>
                      <option
                        value="Виконано"
                        className="bg-green-300 text-green-800"
                      >
                        Виконано
                      </option>
                      <option
                        value="Скасовано"
                        className="bg-red-300 text-red-800"
                      >
                        Скасовано
                      </option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
