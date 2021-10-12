import { ITicket } from '../types';

export interface IAction {
  type: string;
  payload?: any;
}

// FILTERS
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

// TICKETS

interface ITicketsState {
  list: TicketList;
  hasError: boolean;
  loading: boolean;
}

interface ITicketsFetchAction extends IAction {
  payload: TicketList;
}

export type Ticket = ITicket;
export type TicketList = ITicket[];
export type TicketsAction = IAction | ITicketsFetchAction;
export type TicketsState = ITicketsState;
