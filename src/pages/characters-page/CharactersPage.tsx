import React from 'react';
import {RandomChar} from '../../components/random-char/RandomChar';
import {CharList} from '../../components/char-list/CharList';
import './CharactersPage.scss';
import {CharInfoPanel} from '../../components/char-info-panel/CharInfoPanel';
import {Skeleton} from '../../components/skeleton/Skeleton';
import vision from '../../assets/images/vision.png';
export const CharactersPage = () => {
  return (
    <div className="characters-page">
      <RandomChar />
      <CharList />
      {/* <CharInfoPanel /> */}
      <Skeleton />
      <img src={vision} alt="vision" className="characters-page__vision" />
    </div>
  );
};
