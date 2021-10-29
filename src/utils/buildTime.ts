import { addMinutes } from 'date-fns';
import { IBuildTime, ITicketSegment } from '../types';
import collectTime from './collectTime';

const buildTime = (segment: ITicketSegment): IBuildTime => {
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

export default buildTime;
