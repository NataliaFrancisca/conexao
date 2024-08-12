import Alert from '@/components/Alert/Alert';
import List from '../List/List';
import { useContainerLogic } from './useContainerLogic';

const Lists = () => {
  const { lists, alertMessage } = useContainerLogic();

  if (alertMessage) {
    return (
      <Alert message={alertMessage.message} status={alertMessage.status} />
    );
  }

  return (
    <section className="container__lists">
      {lists.length > 0 &&
        lists.map((list) => <List data={list} key={list.id} />)}
    </section>
  );
};

export default Lists;
