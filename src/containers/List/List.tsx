import { IList } from '@/utils/ts/interface';
import { useRouter } from 'next/navigation';

const List = (props: { data: IList }) => {
  const router = useRouter();
  const { id, title } = props.data;

  return (
    <article
      className="container__list"
      key={id}
      onClick={() => router.push(`/dashboard/${id}`)}
    >
      <h1>{title}</h1>
    </article>
  );
};

export default List;
