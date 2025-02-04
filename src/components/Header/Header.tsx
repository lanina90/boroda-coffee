'use client';
import React, { useState } from 'react';
import Container from '@components/components/Container/Container';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsCart2 } from 'react-icons/bs';
import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';
import { usePathname } from 'next/navigation';
import { FaPhoneAlt } from 'react-icons/fa';
import { navMenuLinks } from '@components/constants/constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <header className="fixed top-0 w-full bg-black text-white">
        <Container>
          <div className="flex items-center justify-between px-7 py-4">
            <div className="md:hidden cursor-pointer">
              <GiHamburgerMenu size={28} onClick={() => setIsOpen(!isOpen)} />
            </div>
            <div>Boroda Drink Logo</div>
            <div className={'flex items-center gap-4'}>
              <Link
                href="tel:+380979245565"
                className={
                  'flex items-center gap-3 bg-[#e7a727] px-4 py-3 rounded-xl'
                }
              >
                <FaPhoneAlt size={18} />{' '}
                <span className={'hidden md:flex text-white'}>
                  +380979245565
                </span>
              </Link>
              <div className="relative w-8 h-9 flex items-center justify-between">
                <BsCart2 size={26} />
                <div className="absolute top-0 right-0 w-4 h-4 rounded-full flex justify-center items-center bg-white text-yellow-600 font-bold text-xs leading-none">
                  2
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div
          className={`flex flex-col gap-7 fixed top-0 left-0 h-full w-[300px] bg-black text-white p-7 transform transition-transform duration-300 md:hidden ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className={'flex justify-between items-center'}>
            <div>logo</div>
            <IoMdClose
              size={26}
              className={'cursor-pointer'}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <nav className="flex flex-col gap-4 items-start uppercase text-md tracking-wider">
            {navMenuLinks.map((link) => (
              <Link
                onClick={() => setIsOpen(false)}
                className={`${pathname === link.path ? 'text-yellow-600 underline underline-offset-8' : 'text-white'}`}
                key={link.path}
                href={link.path}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
