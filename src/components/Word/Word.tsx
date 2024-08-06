import React from 'react';
import { handleDragStart, handleDragEnd } from '@/handler/drag-and-drop';
import { IWord } from '@/utils/ts/interface';

const Word = (props: { data: IWord }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { id, original, meaning, examples, translated } = props.data;

  return (
    <article
      className="component__word"
      draggable={true}
      onDragStart={(e) => handleDragStart(e, id, ref)}
      onDragEnd={() => handleDragEnd(ref)}
      ref={ref}
    >
      <h1>
        {original} - {translated}
      </h1>

      <label>
        Explicação:
        <q>{meaning}</q>
      </label>

      <ul>
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

export default Word;
