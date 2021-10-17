import { ITicket } from '../types';

export interface IAction {
  type: string;
  payload?: any;
}

// FILTERS
// eslint-disable-next-line no-unused-vars
export type FilterCallback = (ticket: ITicket) => boolean;
export interface IFilter {
  // имя, отображаемое в UI
  showName: string;
  // псевдоним фильтра
  alias: string;
  // включён ли фильтр
  active: boolean;
  // callback
  callback: FilterCallback;
}

export type FilterType = IFilter;

export interface IFilterState {
  activeAliases: string[];
}

export type FilterState = IFilterState;

export interface FilterAction extends IAction {
  payload: string[];
}

// TICKETS
interface ITicketsState {
  list: TicketList;
  hasError: boolean;
  loading: boolean;
}

interface ITicketsFetchAction extends IAction {
  payload: {
    searchId: string;
    stop: boolean;
    list: Ticket[];
  };
}

interface ITicketsLoadMoreAction extends IAction {
  payload: {
    stop: boolean;
    list: Ticket[];
  };
}

interface ITicketsToggleLoadingAction extends IAction {
  payload: boolean;
}

export type Ticket = ITicket;
export type TicketList = ITicket[];
export type TicketsAction = IAction | ITicketsFetchAction | ITicketsLoadMoreAction | ITicketsToggleLoadingAction;
export type TicketsState = ITicketsState;
