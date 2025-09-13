'use client'

import React from 'react';
import Link from 'next/link';
import { signOut  } from 'firebase/auth';
import { signOut as nextAuthSignOut } from 'next-auth/react';
import { auth } from '@components/lib/firebase';

const Sidebar = () => {

  async function handleLogout() {
    try {
      await signOut(auth);
    } catch {
    }
    await nextAuthSignOut({ callbackUrl: '/login' });
  }

  return (
    <div
      className={
        'min-w-[150px] max-w-[250px] w-full border border-l-black p-5 flex flex-col gap-3 items-center justify-start'
      }
    >
      <Link
        href="/admin/orders"
        className={
          'border border-black rounded-xl w-full shadow-2xl px-3 py-2 hover:bg-black hover:text-white'
        }
      >
        Замовлення
      </Link>
      <Link
        href="/admin/products"
        className={
          'border border-black rounded-xl w-full shadow-2xl px-3 py-2 hover:bg-black hover:text-white'
        }
      >
        Ассортимент
      </Link>
      <Link
        href="/admin/announcements"
        className={
          'border border-black rounded-xl w-full shadow-2xl px-3 py-2 hover:bg-black hover:text-white'
        }
      >
        Оголошення та акції
      </Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Sidebar;
