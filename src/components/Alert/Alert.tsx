import { IAlertMessage } from '@/utils/ts/interface';

const Alert = (props: IAlertMessage) => {
  const STATUS_MESSAGE =
    props.status === undefined
      ? '__info'
      : props.status
        ? '__success'
        : '__error';

  return (
    <article className={`component__alert ${STATUS_MESSAGE}`}>
      <p>{props.message}</p>
    </article>
  );
};

export default Alert;
