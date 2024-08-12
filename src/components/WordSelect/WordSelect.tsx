import { ICardWordSelectProps } from '@/utils/ts/interface';

const WordSelect = (props: ICardWordSelectProps) => {
  const { original, meaning, examples, translated } = props.wordData;

  return (
    <article className="component__word component__word-select">
      <header>
        <h1 className="component__word_title">
          {original} - {translated}
        </h1>
        <input
          type="checkbox"
          name="input-word-selected"
          className="input__word-select"
          onChange={() => props.toggleWordSelect(props.wordData)}
        />
      </header>

      <label className="component__word_label-meaning">
        Explicação:
        <q>{meaning}</q>
      </label>

      <ul className="component__word_examples">
        <li>
          <b>Original:</b>
          {examples.phraseInput}
        </li>
        <li>
          <b>Tradução:</b>
          {examples.phraseOutput}
        </li>
      </ul>
    </article>
  );
};

export default WordSelect;
