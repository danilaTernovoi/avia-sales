import React, { FC, Fragment, useEffect, useMemo } from 'react';
import Ticket from '../Ticket';
import Loader from '../Loader';
import { FilterGuard } from '../../store/reducers/filter/types';
import { filterList } from '../../utils/constants';
import { useActions, useTypedSelector } from '../../hooks';
import { filterChain, sorters } from '../../utils';

// Style
import './TicketList.scss';

const Ticketlist: FC = () => {
  const { loadTickets } = useActions();
  const { loading } = useTypedSelector((state) => state.tickets);

  useEffect(() => {
    loadTickets();
  }, [loadTickets]);

  const {
    tickets: { fullList, hasError },
    sort: { activeSorter },
    filter: { activeFilters },
  } = useTypedSelector((state) => state);

  const list = useMemo(() => {
    const callbacks = filterList
      .filter(({ alias }) => activeFilters.includes(alias as FilterGuard))
      .map(({ callback }) => callback);

    const res = filterChain(fullList, callbacks).sort(sorters[activeSorter]);
    return res.slice(0, 5);
  }, [fullList, activeSorter, activeFilters]);
  if (hasError) return <div className="error">error</div>;

  if (loading) {
    return (
      <div className="center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="tickets">
      {list.length ? (
        list.map((ticket) => (
          <Fragment key={JSON.stringify(ticket)}>
            <Ticket ticket={ticket} />
          </Fragment>
        ))
      ) : (
        <h1 className="no-satisfied">Рейсов, подходящих под заданные фильтры, не найдено</h1>
      )}
    </div>
  );
};

export default Ticketlist;
