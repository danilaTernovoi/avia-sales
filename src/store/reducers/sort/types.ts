export const SET_SORT = 'SET_SORT';
export type SortActionPayloadGuard = 'priceless' | 'timeless';

export interface SortAction {
  type: string;
  payload: SortActionPayloadGuard;
}

export interface SortState {
  activeSorter: SortActionPayloadGuard;
}
