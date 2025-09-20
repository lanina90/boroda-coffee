'use client';

import React from 'react';
import Container from '@components/components/Container/Container';
import TopBar from '@components/components/Hero/TopBar';
import { navMenuLinks } from '@components/constants/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { IAnnouncement } from '@components/types/IAnnouncement';

const heroImgs = [
  { url: '/dobra-kava.png', alt: 'Dobra kava' },
  { url: '/kava-dlia-rankiv.png', alt: 'Kava Dlia Rankiv' },
  { url: "/coffee.png", alt: 'Kava' },
];

const Hero = ({ announcements }: { announcements: IAnnouncement[] }) => {
  const pathname = usePathname();

  return (
    <div className={'bg-black text-white flex-col mt-[74px] md:mt-[85px]'}>
      <TopBar announcements={announcements} />
      <div className={'flex flex-col justify-between h-[85vh] max-h-[600px]'}>
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => `
      <span class="${className}" style="background-color: white; width: 10px; height: 10px;"></span>
    `,
          }}
          scrollbar={{ draggable: true }}
          className={'h-full w-full max-w-[1280px] mx-7'}
        >
          {heroImgs.map(({url, alt}, i) => (
            <SwiperSlide className={'w-full h-full'} key={i}>
              <div className="relative h-full w-full">
                <Image
                  src={url}
                  alt={alt}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'left' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={'hidden md:block w-full bg-black'}>
          <Container>
            <div className={'px-7 py-4 xl:px-0'}>
              <nav className="flex gap-4 items-start uppercase text-l tracking-wider border-b-2 border-b-white pb-2">
                {navMenuLinks.map((link) => (
                  <Link
                    className={`${pathname === link.path ? 'text-yellow-600' : 'text-white'} flex items-center gap-2`}
                    key={link.path}
                    href={link.path}
                  >
                    {link.label}{' '}
                    {pathname === link.path ? <IoMdArrowDropdown /> : '-'}
                  </Link>
                ))}
              </nav>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Hero;
