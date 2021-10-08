import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import useTypedSelector from '../../hooks/useTypedSelector';
import {
  ALL_FILTER_ALIAS,
  applyAllCreator,
  disableAllCreator,
  toggleFilterCreator,
  disableAllOnlyCreator,
} from '../../store/reducers/filter';
import { IFilter } from '../../store/types';
import './Filter.scss';

const Filter = () => {
  const { list } = useTypedSelector((state) => state.filter);
  const dispatch = useDispatch();

  const { toggleFilterDispatch, applyAllDispatch, disableAllDispatch, disableAllOnlyDispatch } = useMemo(
    () =>
      bindActionCreators(
        {
          toggleFilterDispatch: toggleFilterCreator,
          applyAllDispatch: applyAllCreator,
          disableAllDispatch: disableAllCreator,
          disableAllOnlyDispatch: disableAllOnlyCreator,
        },
        dispatch
      ),
    [dispatch]
  );

  const toggleFilter = (alias: string) => {
    const isall: boolean = alias === ALL_FILTER_ALIAS;

    if (isall) {
      const allFilter: IFilter | undefined = list.find((filt) => filt.alias === ALL_FILTER_ALIAS);
      return allFilter?.active ? disableAllDispatch() : applyAllDispatch();
    }

    const currentWillApply = !list.find((filt) => filt.alias === alias)?.active;
    const otherEnabled: boolean = list.length - list.filter((filt) => filt.alias !== alias && filt.active).length === 2;

    if (otherEnabled && currentWillApply) return applyAllDispatch();
    if (!isall && list.every((filt) => filt.active)) return disableAllOnlyDispatch(alias);
    return toggleFilterDispatch(alias);
  };

  return (
    <div className="filter">
      <h1 className="filter__title">Количество пересадок</h1>
      <ul className="filter__list">
        {list.map(({ showName, alias, active }) => (
          <li className="filterItem__inner" key={alias}>
            <label className="filterItem">
              <input type="checkbox" checked={active} onChange={() => toggleFilter(alias)} />
              <div className="visibleCheckbox" />
              <span className="filterItem__name">{showName}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
