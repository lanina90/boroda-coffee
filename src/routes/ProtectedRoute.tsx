'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (
      status !== 'loading' &&
      (status === 'unauthenticated' || !session?.user)
    ) {
      router.push('/login');
    }
  }, [status, session, router]);

  if (status === 'loading') return <p>Loading...</p>;
  if (!session) return null;

  return <>{children}</>;
}
