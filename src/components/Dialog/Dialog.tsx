import { IDialogProps } from '@/utils/ts/interface';
import { useDialogHandler } from '../../hooks/useDialogHandler';

const Dialog = (props: { data: IDialogProps }) => {
  const { message, title, onConfirm } = props.data;
  const { dialogRef, closeDialog } = useDialogHandler();

  const handleConfirm = () => {
    onConfirm();
    closeDialog();
  };

  return (
    <dialog className="component__dialog" ref={dialogRef}>
      <h1>{title}</h1>
      <p>{message}</p>

      <section className="section__buttons_row">
        <button onClick={() => closeDialog()}>CANCELAR</button>
        <button className="__bg-red" onClick={() => handleConfirm()}>
          SIM
        </button>
      </section>
    </dialog>
  );
};

export default Dialog;
