import { Dispatch } from 'redux';
import { FilterGuard, ISetFilterAction, SET_FILTER } from './reducers/filter/types';
import {
  SET_HAS_ERROR,
  SET_LIST,
  SET_LOADING,
  SET_SEARCH_ID,
  TicketsAction,
  TicketsSetHasErrorAction,
  TicketsSetLoadingAction,
  TicketsSetSearchIdAction,
} from './reducers/tickets/types';
import { SET_SORT, SortAction, SortActionPayloadGuard } from './reducers/sort/types';
import { ITicket } from '../types';
import * as api from '../api';

export const setFilter = (payload: FilterGuard[]): ISetFilterAction => ({
  type: SET_FILTER,
  payload,
});

export const setSort = (payload: SortActionPayloadGuard): SortAction => ({
  type: SET_SORT,
  payload,
});

export const setFullList = (payload: ITicket[]): TicketsAction => ({
  type: SET_LIST,
  payload,
});

export const setSearchId = (payload: string): TicketsSetSearchIdAction => ({
  type: SET_SEARCH_ID,
  payload,
});

export const setHasError = (payload: boolean): TicketsSetHasErrorAction => ({
  type: SET_HAS_ERROR,
  payload,
});

export const setLoading = (payload: boolean): TicketsSetLoadingAction => ({
  type: SET_LOADING,
  payload,
});

export const loadTickets =
  (searchIdParam: string = '') =>
  async (dispatch: Dispatch<TicketsAction>) => {
    let searchId: string = searchIdParam;
    let stop: boolean = false;
    const tickets: ITicket[] = [];

    dispatch(setLoading(true));

    if (!searchId) {
      const { searchId: $searchId } = await api.getSearchId();
      searchId = $searchId;
    }

    while (!stop) {
      try {
        const { tickets: $tickets, stop: $stop } = await api.getTickets(searchId);

        stop = $stop;
        tickets.push(...$tickets);
      } catch (error) {
        console.log(error);
      }
    }

    dispatch(setFullList(tickets));
    dispatch(setLoading(false));
  };
