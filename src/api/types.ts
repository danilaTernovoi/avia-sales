import { ITicket } from '../types';

export interface IGetSearchIdResponse {
  searchId: string;
}

export interface IGetTicketsResponse {
  tickets: ITicket[];
  stop: boolean;
}
