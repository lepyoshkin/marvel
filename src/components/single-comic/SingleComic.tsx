import React from 'react';
import './SingleComic.scss';
import comic from '../../assets/images/x-men.png';
import {Link} from 'react-router-dom';

export const SingleComic = () => {
  return (
    <div className="single-comic">
      <img className="single-comic__img" src={comic} alt="comic" />
      <div className="single-comic__descr-block">
        <h2 className="single-comic__title">X-Men: Days of Future Past</h2>
        <p className="single-comic__descr">
          Re-live the legendary first journey into the dystopian future of 2013
          - where Sentinels stalk the Earth, and the X-Men are humanity's only
          hope...until they die! Also featuring the first appearance of Alpha
          Flight, the return of the Wendigo, the history of the X-Men from
          Cyclops himself...and a demon for Christmas!?
        </p>
        <div className="single-comic__pages">144 pages</div>
        <div className="single-comic__lang">Language: en-us</div>
        <div className="single-comic__price">9.99$</div>
      </div>
      <Link to="/comics" className="single-comic__back">
        Back to all
      </Link>
    </div>
  );
};
