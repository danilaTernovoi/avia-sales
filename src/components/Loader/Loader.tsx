import React, { FC } from 'react';
import './Loader.scss';

const Loader: FC = () => (
  <div className="loader-container">
    <div className="lds-ripple">
      <div />
      <div />
    </div>
  </div>
);
export default Loader;
