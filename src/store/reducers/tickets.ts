import { Dispatch } from 'react';
import { ITicket } from '../../types';
import { TicketsAction } from '../types';

// TICKETS STATE TYPE
type TicketsState = {
  list: ITicket[];
  searchId: string;
  hasError: boolean;
  stop: boolean;
  loading: boolean;
};

const initialState: TicketsState = {
  list: [],
  searchId: '',
  hasError: false,
  stop: false,
  loading: true,
};

// ТИПЫ ДЛЯ DISPATCH
const INITIAL_LOADING = 'INITIAL_LOADING';
const LOAD_MORE = 'LOAD_MORE';
const REGISTER_FETCH_ERROR = 'REGISTER_FETCH_ERROR';
const TOGGLE_LOADING = 'TOGGLE_LOADING';

// URLS
const fetchIdURL = 'https://front-test.beta.aviasales.ru/search';
const fetchTicketsURL = (searchId: string): string =>
  `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`;

// CREATORS
export const initialLoading = () => async (dispatch: Dispatch<TicketsAction>) => {
  const searchIdResponse = await fetch(fetchIdURL);

  if (!searchIdResponse.ok) {
    return dispatch({ type: REGISTER_FETCH_ERROR });
  }

  const { searchId } = await searchIdResponse.json();
  const ticketsResponse = await fetch(fetchTicketsURL(searchId));

  if (!ticketsResponse.ok) {
    return dispatch({ type: REGISTER_FETCH_ERROR });
  }

  const { tickets: list, stop } = await ticketsResponse.json();

  return dispatch({
    type: INITIAL_LOADING,
    payload: {
      list,
      stop,
      searchId,
    },
  });
};

// ЗАГРУЗИТЬ БОЛЬШЕ БИЛЕТОВ
export const loadMore = (searchId: string) => async (dispatch: Dispatch<TicketsAction>) => {
  dispatch({ type: TOGGLE_LOADING, payload: true });
  const ticketsResponse = await fetch(fetchTicketsURL(searchId));

  if (!ticketsResponse.ok) return dispatch({ type: REGISTER_FETCH_ERROR });

  const { tickets: list, stop } = await ticketsResponse.json();

  dispatch({ type: TOGGLE_LOADING, payload: false });
  return dispatch({
    type: LOAD_MORE,
    payload: {
      list,
      stop,
    },
  });
};

// РЕДЬЮСЕР
const ticketsReducer = (state = initialState, { type, payload }: TicketsAction): TicketsState => {
  switch (type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: payload,
      };

    case INITIAL_LOADING:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case LOAD_MORE:
      return {
        ...state,
        list: [...state.list, ...payload.list],
        stop: payload.stop,
      };

    case REGISTER_FETCH_ERROR:
      return {
        ...state,
        hasError: true,
        loading: false,
      };

    default:
      return state;
  }
};

export default ticketsReducer;
