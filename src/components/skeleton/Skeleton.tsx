import React from 'react';
import './Skeleton.scss';

export const Skeleton = () => {
  return (
    <aside className="skeleton">
      <h2 className="skeleton__title">
        Please select a character to see information
      </h2>
      <div className="skeleton__row-first">
        <div className="skeleton__round"></div>
        <div className="skeleton__row-short"></div>
      </div>
      <div className="skeleton__row "></div>
      <div className="skeleton__row "></div>
      <div className="skeleton__row"></div>
    </aside>
  );
};
