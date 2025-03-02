'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { FaCoffee, FaShippingFast, FaMoneyBillWave } from 'react-icons/fa';
import Support from '@components/components/Support/Support';

const steps = [
  {
    icon: <FaCoffee className="text-4xl" />,
    title: 'Тільки якісна кава',
    description:
      'Ступінь обсмаження – середній. Обсмажуємо зерна щотижня за новітніми технологіями.',
  },
  {
    icon: <FaShippingFast className="text-4xl" />,
    title: 'Своєчасна доставка',
    description:
      'Отримуйте замовлення на відділенні чи кур’єром за вашою адресою.',
  },
  {
    icon: <FaMoneyBillWave className="text-4xl" />,
    title: 'Оплата',
    description:
      'Обирайте зручний спосіб оплати: при отриманні або банківським переказом.',
  },
];

const CustomerInfo = () => {
  return (
    <div
      className="py-12 bg-gray-50 text-black mb-10 leading-5 font-franklinGothicBook"
      id={'delivery'}
    >
      <h2 className="text-3xl font-bold text-center mb-10 font-franklinGothicHeavy">
        Що ми пропонуємо?
      </h2>
      <div className="flex justify-center gap-12 items-start flex-wrap mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-xs"
          >
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {step.icon}
            </motion.div>

            <h3 className="text-lg font-semibold mt-4">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
      <Support />
    </div>
  );
};

export default CustomerInfo;
