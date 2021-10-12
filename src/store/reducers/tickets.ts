import { Dispatch } from 'react';
import { TicketsAction, TicketsState } from '../types';

const initialState: TicketsState = {
  list: [],
  hasError: false,
  loading: true,
};

export const loadTickets = () => async (dispatch: Dispatch<TicketsAction>) => {
  const { searchId } = await fetch(`https://front-test.beta.aviasales.ru/search`).then((data) => data.json());
  const ticketsResponse = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);

  if (ticketsResponse.status === 200) {
    const { tickets } = await ticketsResponse.json();

    dispatch({ type: 'tickets/fetch', payload: tickets });
  } else dispatch({ type: 'tickets/registerError' });
};

const ticketsReducer = (state = initialState, action: TicketsAction): TicketsState => {
  switch (action.type) {
    case 'tickets/fetch':
      return {
        ...state,
        list: action.payload,
        loading: false,
      };

    case 'tickets/registerError':
      return {
        ...state,
        loading: false,
        hasError: true,
      };
    default:
      return state;
  }
};

export default ticketsReducer;
