import React from 'react';
import './ComicsPage.scss';
import avengers from '../../assets/images/Avengers.png';
import logo from '../../assets/images/Avengers_logo.png';
import {ComicList} from '../../components/comics-list/ComicList';

export const ComicsPage = () => {
  return (
    <div className="comics-page">
      <div className="comics-page__banner">
        <img src={avengers} alt="avengers" />
        <h3 className="comics-page__title">
          New comics every week!
          <br /> Stay tuned!
        </h3>
        <img src={logo} alt="logo" />
      </div>
      <ComicList />
    </div>
  );
};
