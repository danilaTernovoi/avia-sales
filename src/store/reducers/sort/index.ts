import { SET_SORT, SortAction, SortState } from './types';

const initialState: SortState = {
  activeSorter: 'timeless',
};

const sortReducer = (state = initialState, { type, payload }: SortAction) => {
  switch (type) {
    case SET_SORT:
      return {
        ...state,
        activeSorter: payload,
      };

    default:
      return { ...state };
  }
};

export default sortReducer;
