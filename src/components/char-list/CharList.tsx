import React from 'react';
import {CharListItem} from '../char-list-item/CharListItem';
import './CharList.scss';

export const CharList = () => {
  return (
    <section>
      <ul className="char-list">
        <CharListItem />
        <CharListItem />
        <CharListItem />
        <CharListItem />
        <CharListItem />
        <CharListItem />
        <CharListItem />
        <CharListItem />
        <CharListItem />
      </ul>
      <button className="button char-list__button">load more</button>
    </section>
  );
};
