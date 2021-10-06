import React from 'react';

import logo from '../../assets/img/Logo.svg';
import './Logo.scss';

const Logo = () => (
  <div className="logo">
    <img src={logo} alt="Logo" aria-label="logo" />
  </div>
);

export default Logo;
