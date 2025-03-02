import React from 'react';
import { FaCoffee, FaMugHot, FaFilter, FaClock } from 'react-icons/fa';
import Image from 'next/image';

const methods = [
  {
    icon: <FaCoffee className="text-brown-600 text-2xl" />,
    title: 'Еспресо',
    description:
      'Тонкий помел, 7-9 г кави на порцію. Протокує 20-30 секунд, створюючи насичений смак та кремову пінку.',
  },
  {
    icon: <FaMugHot className="text-brown-600 text-2xl" />,
    title: 'Турка',
    description:
      'Надтонкий помел, 18 г кави на 180 мл води. Перемішати, нагрівати до підйому шапки, відразу розлити.',
  },
  {
    icon: <FaFilter className="text-brown-600 text-2xl" />,
    title: 'Фільтр-кава',
    description:
      'Середній помел, 12 г кави на 200 мл води. Заварюється 3-4 хвилини, розкриваючи м’які фруктові нотки.',
  },
  {
    icon: <FaClock className="text-brown-600 text-2xl" />,
    title: 'Френч-прес',
    description:
      'Середній помел, 12 г кави на 200 мл. Настоюється 4 хвилини, після чого відділяється плунжером.',
  },
  {
    icon: <FaMugHot className="text-brown-600 text-2xl" />,
    title: 'Чашка',
    description:
      'Середній помел, 12 г кави на 200 мл. Заварюється 4 хвилини, після чого слід перемішати перед подачею.',
  },
];

const CoffeeBrewing = () => {
  return (
    <div className="container p-6 bg-white rounded-2xl shadow-lg mx-auto mb-10 flex gap-7 flex-wrap min-w-0 leading-5">
      <div className="w-full h-auto min-h-6 aspect-[2/1] relative max-w-[500px] flex-shrink-0 rounded-2xl overflow-hidden">
        <Image
          src="/coffee-making.jpg"
          alt="cofee making"
          fill
          className="object-cover"
        />
      </div>
      <div className="text-left flex flex-col gap-2 leading-5 flex-1 min-w-[500px]">
        <h2 className="font-franklinGothicHeavy text-2xl font-semibold mb-4 text-center">
          Як приготувати каву?
        </h2>
        <div className="flex flex-col gap-4">
          {methods.map((method, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl"
            >
              <div>{method.icon}</div>
              <div>
                <h3 className="text-lg font-medium">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeBrewing;
