import { useSession } from '@/hooks/useSession';
import { authService } from '@/service/auth/authService';
import { useRouter } from 'next/navigation';

export const useDashboardLogic = () => {
  const router = useRouter();
  const { user } = useSession();

  const logOut = async () => {
    const authServices = new authService();
    await authServices.logout();
  };

  return { user, router, logOut };
};
