import { FilterAction, FilterState } from '../types';

export const ALL_FILTER_ALIAS = 'all';
export const APPLY_FILTER = 'APPLY_FILTER';

const initialState: FilterState = {
  activeAliases: [ALL_FILTER_ALIAS],
};

const filterReducer = (state = initialState, { type, payload }: FilterAction): FilterState => {
  switch (type) {
    case APPLY_FILTER:
      return {
        activeAliases: payload,
      };

    default:
      return { ...state };
  }
};

export default filterReducer;
