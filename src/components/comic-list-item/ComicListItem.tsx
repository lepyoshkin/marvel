import React from 'react';
import './ComicListItem.scss';
import comic from '../../assets/images/x-men.png';
import {Link} from 'react-router-dom';

export const ComicListItem = () => {
  return (
    <li className="comic-list-item">
      <Link to="/comics/current">
        <img src={comic} alt="comic" className="comic-list-item__img" />
        <div className="comic-list-item__descr">
          <h3 className="comic-list-item__title">
            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
          </h3>
          <div className="comic-list-item__price">9.99$</div>
        </div>
      </Link>
    </li>
  );
};
