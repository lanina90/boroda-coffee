import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert('src/lib/serviceAccountKey.json'),
  });
}

export const adminAuth = admin.auth();
