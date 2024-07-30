import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { toggleDialog } from '@/lib/redux/reducers/dialog';
import { useEffect, useRef } from 'react';

export const useDialogHandler = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dispatch = useAppDispatch();
  const dialogState = useAppSelector((state) => state.toggleDialog);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  const closeDialog = () => dispatch(toggleDialog(false));
  const openDialog = () => dispatch(toggleDialog(true));

  return { dialogRef, dialogState, closeDialog, openDialog };
};
