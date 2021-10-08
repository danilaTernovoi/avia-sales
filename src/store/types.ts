export interface IAction {
  type: string;
}

// FILTER
export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const APPLY_ALL_FILTER = 'APPLY_ALL_FILTER';
export const DISABLE_ALL_FILTER = 'DISABLE_ALL_FILTER';
export const DISABLE_ALL_ONLY = 'DISABLE_ALL_ONLY';

export interface IToggleFilterAction extends IAction {
  payload: string;
}

export interface IFilter {
  showName: string;
  alias: string;
  active: boolean;
  allStatus?: boolean;
}

export interface IFilterState {
  list: IFilter[];
}
