import Alert from '@/components/Alert/Alert';
import List from '../../components/List/List';
import { useContainerLogic } from './useContainerLogic';

const Lists = () => {
  const { lists, alertMessage } = useContainerLogic();

  if (alertMessage) {
    return <Alert props={alertMessage} />;
  }

  return (
    <section className="component__lists">
      {lists.length > 0 &&
        lists.map((list) => <List data={list} key={list.id} />)}
    </section>
  );
};

export default Lists;
