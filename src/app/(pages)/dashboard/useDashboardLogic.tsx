import { useSession } from '@/hooks/useSession';
import { authService } from '@/service/auth/authService';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useDashboardLogic = () => {
  const router = useRouter();
  const { user } = useSession();

  const [loading, setLoading] = useState(false);

  const logOut = async () => {
    setLoading(true);
    const authServices = new authService();

    setTimeout(async () => {
      await authServices.logout();
      setLoading(false);
    }, 2300);
  };

  return { loading, user, router, logOut };
};
