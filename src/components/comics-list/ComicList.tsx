import React from 'react';
import {ComicListItem} from '../comic-list-item/ComicListItem';
import './ComicList.scss';

export const ComicList = () => {
  return (
    <ul className="comic-list">
      <ComicListItem />
      <ComicListItem />
      <ComicListItem />
      <ComicListItem />
      <ComicListItem />
      <ComicListItem />
    </ul>
  );
};
