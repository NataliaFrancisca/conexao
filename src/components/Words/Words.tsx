import { IWord } from '@/utils/ts/interface';
import Word from '@/components/Word/Word';
import { preventDropInsideGroup } from '@/handler/drag-and-drop';

const Words = (props: { data: IWord[] }) => {
  return (
    <section
      className="container__words"
      onDrop={preventDropInsideGroup}
      onDragOver={preventDropInsideGroup}
    >
      {props.data.map((word) => (
        <Word data={word} key={word.id} />
      ))}
    </section>
  );
};

export default Words;
