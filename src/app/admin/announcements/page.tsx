import React from 'react';
import AnnouncementsList from '@components/components/admin/Announcements/AnnouncementsList';
import { fetchAnnouncements } from '@components/utils/fetchAnnouncements';

const Page = async () => {
  const announcements = await fetchAnnouncements();
  return (
    <AnnouncementsList announcements={announcements ? announcements : []} />
  );
};

export default Page;
