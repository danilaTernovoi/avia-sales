import { FilterType, Tab } from '../types';
import * as callbacks from './filters';

export const ALL_FILTER_ALIAS = 'all';
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

export const TabCollection: Tab[] = [
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
];
