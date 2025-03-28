import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { adminAuth } from '@components/lib/firebaseAdmin';
import { auth } from '@components/lib/firebase';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Firebase',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password
          );
          const idToken = await userCredential.user.getIdToken();
          const decodedToken = await adminAuth.verifyIdToken(idToken);

          return {
            id: decodedToken.uid,
            email: decodedToken.email,
            name: decodedToken.name ?? '',
          };
        } catch (error) {
          console.error('Login error:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token.sub) {
        session.user = {
          ...session.user,
          email: token.email ?? '',
          name: token.name ?? '',
        };
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
