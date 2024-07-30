import { auth } from '@/lib/firebase/config';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useSession = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const onsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
        } else {
          router.push('/login');
        }
      },
      (error) => {
        console.error('Failed to check auth state:', error);
      },
    );

    setLoading(false);
    return () => onsubscribe();
  }, []);

  return { user, loading };
};
