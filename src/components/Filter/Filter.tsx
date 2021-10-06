import React from 'react';
import './Filter.scss';

const Filter = () => (
  <div className="filter">
    <h1 className="filter__title">Количество пересадок</h1>

    <ul className="filter__list">
      <li className="filterItem__inner">
        <label className="filterItem">
          <input type="checkbox" />
          <div className="visibleCheckbox" />
          <span className="filterItem__name">Все</span>
        </label>
      </li>

      <li className="filterItem__inner">
        <label className="filterItem">
          <input type="checkbox" />
          <div className="visibleCheckbox" />
          <span className="filterItem__name">Без пересадок</span>
        </label>
      </li>

      <li className="filterItem__inner">
        <label className="filterItem">
          <input type="checkbox" />
          <div className="visibleCheckbox" />
          <span className="filterItem__name">1 пересадка</span>
        </label>
      </li>

      <li className="filterItem__inner">
        <label className="filterItem">
          <input type="checkbox" />
          <div className="visibleCheckbox" />
          <span className="filterItem__name">2 пересадки</span>
        </label>
      </li>

      <li className="filterItem__inner">
        <label className="filterItem">
          <input type="checkbox" />
          <div className="visibleCheckbox" />
          <span className="filterItem__name">3 пересадки</span>
        </label>
      </li>
    </ul>
  </div>
);

export default Filter;
