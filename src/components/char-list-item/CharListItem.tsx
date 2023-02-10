import React from 'react';
import './CharListItem.scss';
import avatar from '../../assets/images/abyss.jpg';

export const CharListItem = () => {
  return (
    <li className="char-list-item">
      <img className="char-list-item___avatar" src={avatar} alt="avatar" />
      <div className="char-list-item__descr">
        <h3 className="char-list-item__name">abyss</h3>
      </div>
    </li>
  );
};
