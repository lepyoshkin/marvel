import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">
        {' '}
        <span className="header__title-active">Marvel</span> information portal
      </h1>

      <nav className="header__nav">
        <Link to="/" className="header__link header__link-active">
          Characters
        </Link>{' '}
        /{' '}
        <Link to="/comics" className="header__link">
          Comics
        </Link>{' '}
      </nav>
    </div>
  );
};
