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
import { useProductsCart } from '@components/store/useProductsCart';
import Cart from '@components/components/Cart/Cart';
import OrderModal from '@components/components/OrderModal';
import Logo from '@components/components/Logo/Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const pathname = usePathname();
  const productCart = useProductsCart((state) => state.productsCart);
  const [isOrderModal, setIsOrderModal] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full bg-black text-white z-50">
        <Container>
          <div className="flex items-center justify-between px-7 py-4">
            <div className="md:hidden cursor-pointer">
              <GiHamburgerMenu size={28} onClick={() => setIsOpen(!isOpen)} />
            </div>
            <div className={'w-28 md:w-36 h-auto'}>
              <Logo />
            </div>
            <div className={'flex items-center gap-4'}>
              <Link
                href="tel:+380673860038"
                className={
                  'hidden md:flex items-center gap-3 bg-[#e7a727] px-4 py-3 rounded-xl '
                }
              >
                <FaPhoneAlt size={18} />
                <span className={' text-white'}>+380673860038</span>
              </Link>
              <div
                className="relative w-8 h-9 flex items-center justify-between cursor-pointer"
                onClick={() => setCartOpen(!cartOpen)}
              >
                <BsCart2 size={26} />
                <div className="absolute top-0 right-0 w-4 h-4 rounded-full flex justify-center items-center bg-white text-yellow-600 font-bold text-xs leading-none">
                  {productCart.length ?? 0}
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
        {cartOpen && (
          <Cart
            onCartClose={() => setCartOpen(!cartOpen)}
            onSubmit={() => setIsOrderModal(true)}
          />
        )}
      </header>
      {isOrderModal && <OrderModal onClose={() => setIsOrderModal(false)} />}
    </>
  );
};

export default Header;
