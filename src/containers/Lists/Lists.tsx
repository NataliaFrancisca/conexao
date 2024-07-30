import List from '../List/List';
import { useListsLogic } from './useListsLogic';

const Lists = () => {
  const { lists } = useListsLogic();

  return (
    <section className="container__lists">
      {lists.length > 0 &&
        lists.map((list) => <List data={list} key={list.id} />)}
    </section>
  );
};

export default Lists;
