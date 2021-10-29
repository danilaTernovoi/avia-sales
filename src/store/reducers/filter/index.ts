import { FilterAction, FilterState, SET_FILTER } from './types';

const initialState: FilterState = {
  activeFilters: ['all'],
};

const filterReducer = (state = initialState, { type, payload }: FilterAction): FilterState => {
  switch (type) {
    case SET_FILTER:
      return { ...state, activeFilters: payload };

    default:
      return state;
  }
};

export default filterReducer;
