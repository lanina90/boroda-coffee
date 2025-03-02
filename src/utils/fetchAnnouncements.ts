import { firestore } from '@components/lib/firebaseAdmin';
import { IAnnouncement } from '@components/types/IAnnouncement';

export const fetchAnnouncements = async () => {
  try {
    const announcementsCollection = firestore.collection('announcements');
    const snapshot = await announcementsCollection.get();

    if (snapshot.empty) {
      return [];
    }

    const announcements: IAnnouncement[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      announcement: doc.data().announcement || '',
      isActive: doc.data().isActive || false,
      dueDate: doc.data().dueDate || '',
    }));

    return announcements;
  } catch {
    return [];
  }
};
