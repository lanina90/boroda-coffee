import React from 'react';
import { FaPhone, FaTelegram, FaInstagram } from 'react-icons/fa';

const FloatingContacts = () => {
  const contacts = [
    {
      icon: <FaPhone className="text-white text-xl" />,
      link: 'tel:+380673860038',
      bg: '#e7a727',
    },
    {
      icon: <FaTelegram className="text-white text-xl" />,
      link: 'https://t.me/kavaborodadrink',
      bg: '#e7a727',
    },
    {
      icon: <FaInstagram className="text-white text-xl" />,
      link: 'https://www.instagram.com/boroda.drink/profilecard/?igsh=aXdxcGoxdDNzdGNl',
      bg: '#e7a727',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-40">
      {contacts.map((contact, index) => (
        <a
          key={index}
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 flex items-center justify-center rounded-full shadow-lg bg-[#e7a727] transition transform hover:scale-110`}
        >
          {contact.icon}
        </a>
      ))}
    </div>
  );
};

export default FloatingContacts;
