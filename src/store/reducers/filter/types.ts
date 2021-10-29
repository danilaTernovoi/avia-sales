import IAction from '../../types';

export const SET_FILTER = 'SET_FILTER';

export type FilterGuard = 'all' | 'withoutTransfer' | 'oneTransfer' | 'twoTransfer' | 'threeTransfer';

export interface FilterState {
  activeFilters: FilterGuard[];
}

export interface ISetFilterAction extends IAction {
  payload: FilterGuard[];
}

export type FilterAction = ISetFilterAction;
