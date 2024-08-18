import { IAlertMessage } from '@/utils/ts/interface';

const Alert = (props: { props: IAlertMessage }) => {
  const { status, message } = props.props;

  const STATUS_MESSAGE =
    status === undefined ? '__info' : status ? '__success' : '__error';

  return (
    <article className={`component__alert ${STATUS_MESSAGE}`}>
      <p>{message}</p>
    </article>
  );
};

export default Alert;
