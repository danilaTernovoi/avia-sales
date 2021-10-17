import { FilterCallback } from '../store/types';
import { ITicket } from '../types';

const filterChain = (array: ITicket[], filterCallbacks: FilterCallback[]): ITicket[] => {
  const res: ITicket[][] = [];
  filterCallbacks.map((cb) => res.push(array.filter(cb)));
  return res.flat();
};

export default filterChain;
