import React from 'react';
import './CharInfoPanel.scss';
import loki from '../../assets/images/loki.jpg';

export const CharInfoPanel = () => {
  return (
    <aside className="char-info-panel">
      <div className="char-info-panel__block">
        <img src={loki} alt="char-ava" />
        <div className="char-info-panel__side-block">
          <h2 className="char-info-panel__title">Loki</h2>
          <div className="char-info-panel__btns-block">
            <a href="#d" className="button">
              homepage
            </a>
            <a href="#d" className="button button-wiki">
              wiki
            </a>
          </div>
        </div>

        <p className="char-info-panel__descr">
          In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
          of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
          the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and
          the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari
          and/or Narfi and with the stallion Svaðilfari as the father, Loki gave
          birth—in the form of a mare—to the eight-legged horse Sleipnir. In
          addition, Loki is referred to as the father of Váli in the Prose Edda.
        </p>
      </div>
      <div>
        <p className="char-info-panel__list-title"> Comics:</p>
        <ul className="char-info-panel__list">
          <li className="char-info-panel__list-item">
            All-Winners Squad: Band of Heroes (2011) #3
          </li>
          <li className="char-info-panel__list-item">
            All-Winners Squad: Band of Heroes (2011) #3
          </li>{' '}
          <li className="char-info-panel__list-item">
            All-Winners Squad: Band of Heroes (2011) #3
          </li>{' '}
          <li className="char-info-panel__list-item">
            All-Winners Squad: Band of Heroes (2011) #3
          </li>{' '}
          <li className="char-info-panel__list-item">
            All-Winners Squad: Band of Heroes (2011) #3
          </li>{' '}
          <li className="char-info-panel__list-item">
            All-Winners Squad: Band of Heroes (2011) #3
          </li>
        </ul>
      </div>
    </aside>
  );
};
