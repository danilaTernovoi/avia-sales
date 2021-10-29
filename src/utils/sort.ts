import { ITicket } from '../types';

export function priceless(prevTicket: ITicket, nextTicket: ITicket): number {
  return prevTicket.price - nextTicket.price;
}

export function timeless(prevTicket: ITicket, nextTicket: ITicket): number {
  const nextTotalDuration = nextTicket.segments.reduce((total, segment) => {
    let $total = total;
    $total += segment.duration;
    return $total;
  }, 0);

  const prevTotalDuration = prevTicket.segments.reduce((total, segment) => {
    let $total = total;
    $total += segment.duration;
    return $total;
  }, 0);

  return prevTotalDuration - nextTotalDuration;
}
