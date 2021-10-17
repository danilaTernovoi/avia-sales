import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SortGuard, applySort } from '../../store/reducers/sorters';
import './Tabs.scss';

interface Tab {
  alias: SortGuard;
  active: boolean;
  showName: string;
}

const Tabs: FC = () => {
  const dispatch = useDispatch();
  const [tabs, setTabs] = useState<Tab[]>([
    {
      showName: 'Самый дешевый',
      active: true,
      alias: 'priceless',
    },

    {
      showName: 'Самый быстрый',
      active: false,
      alias: 'timeless',
    },
  ]);

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

            dispatch(applySort(alias as SortGuard));
          }}
        >
          {showName}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
