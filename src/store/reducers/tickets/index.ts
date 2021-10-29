import { SET_HAS_ERROR, SET_LIST, SET_LOADING, SET_SEARCH_ID, TicketsAction, TicketsState } from './types';

const initialState: TicketsState = {
  fullList: [],
  stop: false,
  searchId: '',
  hasError: false,
  loading: true,
};

const ticketsReducer = (state = initialState, { type, payload }: TicketsAction) => {
  switch (type) {
    case SET_LIST:
      return {
        ...state,
        fullList: payload,
      };

    case SET_SEARCH_ID:
      return {
        ...state,
        searchId: payload,
      };

    case SET_HAS_ERROR:
      return {
        ...state,
        hasError: payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };

    default:
      return { ...state };
  }
};

export default ticketsReducer;
