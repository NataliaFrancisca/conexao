import List from '../List/List';
import { useContainerLogic } from './useContainerLogic';

const Lists = () => {
  const { lists } = useContainerLogic();

  return (
    <section className="container__lists">
      {lists.length > 0 &&
        lists.map((list) => <List data={list} key={list.id} />)}
    </section>
  );
};

export default Lists;
