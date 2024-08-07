import { IWord } from '@/utils/ts/interface';

const WordFlip = (props: { data: IWord }) => {
  const { original, translated } = props.data;

  return (
    <article className="component__word-flip">
      <section className="flip-inner">
        <div className="flip-front">
          <h1>{original}</h1>
        </div>

        <div className="flip-back ">
          <h1>{translated}</h1>
        </div>
      </section>
    </article>
  );
};

export default WordFlip;
