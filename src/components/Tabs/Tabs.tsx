import React, { FC, useEffect, useState } from 'react';
import { useActions } from '../../hooks';
import { SortActionPayloadGuard } from '../../store/reducers/sort/types';
import { Tab } from '../../types';
import { TabCollection } from '../../utils/constants';
import './Tabs.scss';

const Tabs: FC = () => {
  const [tabs, setTabs] = useState<Tab[]>(TabCollection);
  const { setSort } = useActions();

  useEffect(() => {
    const activeSort = tabs.find((sort) => sort.active);
    setSort(activeSort?.alias as SortActionPayloadGuard);
  }, [tabs, setSort]);

  return (
    <div className="tabs">
      {tabs.map(({ alias, showName, active }) => (
        <button
          className={`tab ${active ? 'tab--active' : ''}`}
          key={alias}
          type="button"
          onClick={() => {
            setTabs((prev) =>
              prev.map(
                (tab): Tab =>
                  tab.alias === alias ? { ...tab, active: tab.active ? true : !tab.active } : { ...tab, active: false },
              ),
            );
          }}
        >
          {showName}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
