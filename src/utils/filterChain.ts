import { FilterCallback, ITicket } from '../types';

const filterChain = (array: ITicket[], filterCallbacks: FilterCallback[]): ITicket[] => {
  const res: ITicket[][] = [];
  filterCallbacks.forEach((cb) => res.push(array.filter(cb)));
  return res.flat();
};

export default filterChain;
