import React, { FC, Fragment, useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { ALL_FILTER_ALIAS, APPLY_FILTER } from '../../store/reducers/filter';
import { FilterType } from '../../store/types';
import { filters as callbacks } from '../../libs';
import FilterCheck from './FilterCheck';
import './Filter.scss';

export const filterList: FilterType[] = [
  {
    showName: 'Все',
    alias: ALL_FILTER_ALIAS,
    active: true,
    callback: callbacks.allCallback,
  },

  {
    showName: 'Без пересадок',
    alias: 'withoutTransfer',
    active: true,
    callback: callbacks.withoutTransferCallback,
  },

  {
    showName: '1 пересадка',
    alias: 'oneTransfer',
    active: true,
    callback: callbacks.oneTransferCallback,
  },

  {
    showName: '2 пересадки',
    alias: 'twoTransfer',
    active: true,
    callback: callbacks.twoTransferCallback,
  },

  {
    showName: '3 пересадки',
    alias: 'threeTransfer',
    active: true,
    callback: callbacks.threeTransferCallback,
  },
];

const Filter: FC = () => {
  const dispatch = useDispatch();
  // Фильтр "Все"
  const [allFilter, setAllFilter] = useState<FilterType>(filterList[0]);
  // Остальные фильтры
  const [filters, setFilters] = useState<FilterType[]>(filterList.slice(1));
  // Включены ли остальные фильтры
  const allActive = useMemo(() => filters.filter((filt) => filt.active).length === filters.length, [filters]);
  // Нужно ли включить фильтр "Все"
  const oneToTrigger = useMemo(() => filters.filter((filt) => filt.active).length === filters.length - 1, [filters]);

  // Если остальные фильтры включены, включаем "Все"
  useEffect(() => {
    if (allActive) setAllFilter((prev) => ({ ...prev, active: true }));
  }, [allActive]);

  // Если включается последний фильтр из остальных, включем "Все"
  useEffect(() => {
    if (oneToTrigger) setAllFilter((prev) => ({ ...prev, active: false }));
  }, [oneToTrigger]);

  // При изменении состояния остальных фильтров, обновляем список активных фильтров в сторе
  useEffect(() => {
    dispatch({
      type: APPLY_FILTER,
      payload: filters.filter((filt) => filt.active).map(({ alias }) => alias),
    });
  }, [filters, dispatch]);

  // Переключение фильтра "Все"
  const changeAllFilter = (activeStatus: boolean) => {
    setAllFilter((prev) => ({ ...prev, active: !prev.active }));

    const futureStatus = !activeStatus;
    setFilters((prev) => prev.map((filt) => ({ ...filt, active: futureStatus })));
  };

  // Переключение остальных фильтров
  const changeFilter = (alias: string) => {
    setFilters((prev) =>
      prev.map(
        (filter): FilterType => ({
          ...filter,
          active: filter.alias === alias ? !filter.active : filter.active,
        }),
      ),
    );
  };

  return (
    <div className="filter">
      <h1 className="filter__title">Количество пересадок</h1>
      <ul className="filter__list">
        {/* фильтр "все" */}
        <FilterCheck {...allFilter} onChange={() => changeAllFilter(allFilter.active)} />
        {/* остальные фильтры */}
        {filters.map((filter) => (
          <Fragment key={filter.showName}>
            <FilterCheck {...filter} onChange={() => changeFilter(filter.alias)} />
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
