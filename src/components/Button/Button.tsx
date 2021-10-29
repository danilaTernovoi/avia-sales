import React, { FC } from 'react';
import './Button.scss';

interface Props {
  onClick: () => void;
}

const Button: FC<Props> = ({ children, onClick }) => (
  <button className="button" type="button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
