import addMinutes from 'date-fns/addMinutes';
import { IBuildTime, ITicketSegment } from '../types';

export const formatPrice = (price: number): string => `${price.toLocaleString()} Р`;

export const collectTime = (date: Date, separator: string = ':'): string => {
  const hours = date.getHours();
  let minutes: string | number = date.getMinutes();

  if (minutes < 10) minutes = `0${minutes}`;

  return `${hours}${separator}${minutes}`;
};

export const buildTime = (segment: ITicketSegment): IBuildTime => {
  const { date, duration } = segment;

  const fromPoint = new Date(date);
  const from = collectTime(fromPoint);
  const to = collectTime(addMinutes(fromPoint, duration));
  const hour = (duration / 60).toFixed();
  const restMinutes = duration % 60;

  return {
    duration: `${hour}ч ${restMinutes}м`,
    fromto: `${from} - ${to}`,
  };
};
