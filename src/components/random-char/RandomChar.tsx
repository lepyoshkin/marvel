import React from 'react';
import hero from '../../assets/images/thor.jpeg';
import mjolnir from '../../assets/images/mjolnir.png';
import './RandomChar.scss';

export const RandomChar = () => {
  return (
    <div className="random-char">
      <div className="random-char__block random-char__hero">
        <img src={hero} alt="hero" className="random-char__photo" />
        <div className="random-char__info">
          <h2>thor</h2>
          <p>
            As the Norse God of thunder and lightning, Thor wields one of the
            greatest weapons ever made, the enchanted hammer Mjolnir. While
            others have described Thor as an over-muscled, oafish imbecile, he's
            quite smart and compassionate...
          </p>
          <div>
            <a href="#1" className="button">
              homepage
            </a>
            <a href="#1" className="button button-wiki">
              wiki
            </a>
          </div>
        </div>
      </div>
      <div className="random-char__block random-char__try">
        <p>Random character for today!</p>
        <p>Do you want to get to know him better?</p>
        <p>Or choose another one</p>
        <a href="#tryit" className="button">
          try it
        </a>
        <img src={mjolnir} alt="mjolnir" className="random-char__bg" />
      </div>
    </div>
  );
};
