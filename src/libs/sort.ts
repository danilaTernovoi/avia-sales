import { Ticket } from '../store/types';

export function priceless(prevTicket: Ticket, nextTicket: Ticket): number {
  return prevTicket.price - nextTicket.price;
}

export function timeless(prevTicket: Ticket, nextTicket: Ticket): number {
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
