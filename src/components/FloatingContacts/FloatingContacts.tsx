import React from 'react';
import { FaPhone, FaTelegram, FaInstagram } from 'react-icons/fa';

const FloatingContacts = () => {
  const contacts = [
    {
      icon: <FaPhone className="text-white text-xl" />,
      link: 'tel:+380673860038',
      bg: 'bg-green-500',
    },
    {
      icon: <FaTelegram className="text-white text-xl" />,
      link: 'https://t.me/kavaborodadrink',
      bg: 'bg-blue-500',
    },
    {
      icon: <FaInstagram className="text-white text-xl" />,
      link: '#',
      bg: 'bg-pink-500',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
      {contacts.map((contact, index) => (
        <a
          key={index}
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 flex items-center justify-center rounded-full shadow-lg ${contact.bg} transition transform hover:scale-110`}
        >
          {contact.icon}
        </a>
      ))}
    </div>
  );
};

export default FloatingContacts;
