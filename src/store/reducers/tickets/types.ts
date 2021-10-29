import { ITicket } from '../../../types';

export const SET_LIST = 'SET_LIST';
export const SET_SEARCH_ID = 'SET_SEARCH_ID';
export const SET_HAS_ERROR = 'SET_HAS_ERROR';
export const SET_LOADING = 'SET_LOADING';

export interface TicketsState {
  fullList: ITicket[];
  stop: boolean;
  searchId: string;
  hasError: boolean;
  loading: boolean;
}

export interface ITicketsAction {
  type: string;
  payload: any;
}

export interface TicketsSetFullListAction {
  type: string;
  payload: ITicket[];
}

export interface TicketsSetHasErrorAction {
  type: string;
  payload: boolean;
}

export interface TicketsSetSearchIdAction {
  type: string;
  payload: string;
}

export interface TicketsSetLoadingAction {
  type: string;
  payload: boolean;
}

export type TicketsAction =
  | ITicketsAction
  | TicketsSetFullListAction
  | TicketsSetHasErrorAction
  | TicketsSetSearchIdAction
  | TicketsSetLoadingAction;
