import React from 'react';
import { FaBoxOpen, FaSun, FaClock, FaThermometerHalf } from 'react-icons/fa';
import Image from 'next/image';

const storageTips = [
  {
    icon: <FaBoxOpen className="text-brown-600 text-2xl" />,
    title: 'Герметична упаковка',
    description:
      'Зберігайте каву у щільно закритому пакеті або банці, щоб уникнути контакту з повітрям.',
  },
  {
    icon: <FaThermometerHalf className="text-brown-600 text-2xl" />,
    title: 'Температура та вологість',
    description:
      'Оптимальна температура – до 20°C, відносна вологість – не більше 75%.',
  },
  {
    icon: <FaSun className="text-brown-600 text-2xl" />,
    title: 'Захист від світла',
    description:
      'Тримайте каву в темному місці, подалі від прямих сонячних променів та сторонніх запахів.',
  },
  {
    icon: <FaClock className="text-brown-600 text-2xl" />,
    title: 'Термін придатності',
    description:
      'Свіжообсмажена кава зберігає найкращий смак протягом 12 місяців.',
  },
];

const CoffeeStorage = () => {
  return (
    <div className="container p-6 bg-white rounded-2xl shadow-lg mx-auto mb-10 flex gap-7 flex-wrap min-w-0 leading-5">
      <div className="text-left flex flex-col gap-2 leading-5 flex-1 min-w-[500px]">
        <h2 className="font-franklinGothicHeavy text-2xl font-semibold mb-4 text-center">
          Як зберігати каву?
        </h2>
        <div className="flex flex-col gap-4">
          {storageTips.map((tip, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl"
            >
              <div>{tip.icon}</div>
              <div>
                <h3 className="text-lg font-medium">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-auto min-h-6 aspect-[2/1] relative max-w-[500px] flex-shrink-0 rounded-2xl overflow-hidden">
        <Image
          src="/coffee-storage.jpg"
          alt="coffee storage"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default CoffeeStorage;
