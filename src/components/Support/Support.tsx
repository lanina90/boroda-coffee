'use client';

import React from 'react';
import { FaPhone, FaTelegram, FaInstagram } from 'react-icons/fa';

const contacts = [
  {
    icon: <FaPhone className="text-black text-3xl" />,
    title: 'Телефон',
    link: 'tel:+380673860038',
    text: '+380673860038',
  },
  {
    icon: <FaTelegram className="text-blue-500 text-4xl" />,
    title: 'Telegram',
    link: 'https://t.me/kavaborodadrink',
    text: 'Telegram',
  },
  {
    icon: <FaInstagram className="text-pink-500 text-4xl" />,
    title: 'Instagram',
    link: '#',
    text: 'Instagram',
  },
];

const Support = () => {
  return (
    <div className="py-12 bg-gray-50 text-black leading-5 mt-10">
      <div className="mx-auto p-8 flex gap-4 justify-between items-center flex-wrap">
        <div className={'max-w-xl'}>
          <p className="text-gray-600 mb-6 text-center">
            Напишіть нам у зручний месенджер або зателефонуйте, і ми допоможемо
            з вибором кави!
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between items-center bg-gray-100 p-4 rounded-xl w-36 shadow-md transition hover:scale-105"
            >
              {contact.icon}
              <span className="text-gray-800 text-sm font-medium">
                {contact.text}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
