import { useDialogHandler } from '@/hooks/useDialogHandler';
import { useListLogic } from '@/hooks/useListLogic';
import { useRouter } from 'next/navigation';

export const usePageLogic = (id: string) => {
  const router = useRouter();
  const { dialogState, openDialog } = useDialogHandler();
  const { listData, alertMessage, deleteList, sendListUpdated } =
    useListLogic(id);

  const navigateDashboardSubPages = (path: string) =>
    router.push(`/dashboard/${id}/${path}`);

  return {
    dialogState,
    listData,
    alertMessage,
    deleteList,
    sendListUpdated,
    openDialog,
    navigateDashboardSubPages,
  };
};
