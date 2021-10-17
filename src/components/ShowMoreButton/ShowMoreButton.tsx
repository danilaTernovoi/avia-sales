import React, { FC } from 'react';
import './ShowMoreButton.scss';

interface Props {
  onClick: () => void;
}

const ShowMoreButton: FC<Props> = ({ children, onClick }) => (
  <button className="showMoreButton" type="button" onClick={() => onClick()}>
    {children}
  </button>
);

export default ShowMoreButton;
