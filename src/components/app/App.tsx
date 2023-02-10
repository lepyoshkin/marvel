import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {CharactersPage} from '../../pages/characters-page/CharactersPage';
import {ComicsPage} from '../../pages/comics-page/ComicsPage';
import {Header} from '../header/Header';
import {SingleComic} from '../single-comic/SingleComic';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/comics" element={<ComicsPage />} />
        <Route path="/comics/current" element={<SingleComic />} />
      </Routes>
    </div>
  );
}

export default App;
