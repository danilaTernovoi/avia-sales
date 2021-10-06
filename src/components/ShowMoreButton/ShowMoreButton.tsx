import React, { FC } from 'react';
import './ShowMoreButton.scss';

const ShowMoreButton: FC = ({ children }) => (
  <button className="showMoreButton" type="button">
    {children}
  </button>
);

export default ShowMoreButton;
