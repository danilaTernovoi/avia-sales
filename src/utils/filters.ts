/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import { ITicket } from '../types';

type FilterCallbackSignature = (ticket: ITicket) => boolean;

const stopsEqual = (ticket: ITicket, equalTo: number): boolean => {
  const [from, to] = ticket.segments;
  return from.stops.length === equalTo;
};

export const allCallback: FilterCallbackSignature = (ticket: ITicket) => !!ticket;
export const withoutTransferCallback: FilterCallbackSignature = (ticket: ITicket) => stopsEqual(ticket, 0);
export const oneTransferCallback: FilterCallbackSignature = (ticket: ITicket) => stopsEqual(ticket, 1);
export const twoTransferCallback: FilterCallbackSignature = (ticket: ITicket) => stopsEqual(ticket, 2);
export const threeTransferCallback: FilterCallbackSignature = (ticket: ITicket) => stopsEqual(ticket, 3);
