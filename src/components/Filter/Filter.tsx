import React, { FC, Fragment, useEffect, useState, useMemo } from 'react';
import { FilterType } from '../../types';
import { filterList } from '../../utils/constants';
import { useActions } from '../../hooks';
import { FilterGuard } from '../../store/reducers/filter/types';
import FilterCheck from './FilterCheck';
import './Filter.scss';

const Filter: FC = () => {
  const { setFilter: setFilterStore } = useActions();

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

  const activeAliases = useMemo(() => filters.filter((filter) => filter.active), [filters]);

  useEffect(() => {
    setFilterStore(activeAliases.map(({ alias }) => alias) as FilterGuard[]);
  }, [activeAliases, setFilterStore]);

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
