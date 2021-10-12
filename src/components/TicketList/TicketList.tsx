import React, { FC, Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadTickets } from '../../store/reducers/tickets';
import useTypedSelector from '../../hooks/useTypedSelector';
import Loader from '../Loader';
import Ticket from '../Ticket';
import './TicketList.scss';

type TicketlistComponent = FC;

const Ticketlist: TicketlistComponent = () => {
  const { list, loading, hasError } = useTypedSelector((state) => state.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTickets());
  }, [dispatch]);

  return (
    <div className="tickets">
      {loading && !hasError && <Loader />}
      {(loading && !hasError) ||
        list.map((ticket) => (
          <Fragment key={JSON.stringify(ticket)}>
            <Ticket ticket={ticket} />
          </Fragment>
        ))}
      {hasError && <h1 className="error">Ошибка загрузки 😔</h1>}
    </div>
  );
};

export default Ticketlist;
