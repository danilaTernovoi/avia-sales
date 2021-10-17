import React, { FC } from 'react';
import { IFilter } from '../../store/types';

interface FilterCheckProps extends IFilter {
  // eslint-disable-next-line no-unused-vars
  onChange: any;
}

const FilterCheck: FC<FilterCheckProps> = ({ alias, active, showName, onChange }) => (
  <li className="filterItem__inner" key={alias}>
    <label className="filterItem">
      <input type="checkbox" checked={ active } onChange={ onChange } />
      <div className="visibleCheckbox" />
      <span className="filterItem__name">{ showName }</span>
    </label>
  </li>
);

export default FilterCheck;
