'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { IAnnouncement } from '@components/types/IAnnouncement';

const TopBar = ({ announcements }: { announcements: IAnnouncement[] }) => {
  if (!announcements || announcements.length === 0) return null;

  return (
    <div className="w-full bg-[#e7a727]  text-black text-xs flex items-center">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        speed={900}
        className="text-center"
      >
        {announcements.map((announcement) => (
          <SwiperSlide key={announcement.id}>
            <p className="uppercase leading-5">{announcement.announcement}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopBar;
