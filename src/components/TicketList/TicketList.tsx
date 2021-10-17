import React, { FC, Fragment, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { filterList } from '../Filter/Filter';
import { filterChain, sorters } from '../../libs';
import { FilterCallback } from '../../store/types';
import { initialLoading, loadMore } from '../../store/reducers/tickets';
import useTypedSelector from '../../hooks/useTypedSelector';
import ShowMoreButton from '../ShowMoreButton';
import Ticket from '../Ticket';
import Loader from '../Loader';
import './TicketList.scss';

const Ticketlist: FC = () => {
  const dispatch = useDispatch();
  // Список билетов из store
  const { list: ticketsList, stop, searchId, hasError, loading } = useTypedSelector((state) => state.tickets);
  // Список псевдонимов активных фильтров
  const { activeAliases } = useTypedSelector((state) => state.filter);
  const { activeAlias: activeSortAlias } = useTypedSelector((state) => state.sorters);

  useEffect(() => {
    dispatch(initialLoading());
  }, [dispatch]);

  // Отфильтрованный список билетов
  const filteredList = useMemo(() => {
    const callbacks: FilterCallback[] = filterList
      .filter((filt) => activeAliases.includes(filt.alias))
      .map(({ callback }) => callback);

    const chained = filterChain(ticketsList, callbacks).sort(sorters[activeSortAlias]);

    return chained;
  }, [activeAliases, ticketsList, activeSortAlias]);

  // jsx
  // Список билетов
  const ticketsUI = filteredList.map((ticket) => (
    <Fragment key={JSON.stringify(ticket)}>
      <Ticket ticket={ticket} />
    </Fragment>
  ));

  // Кнопка "Наверх"
  const toTopButton = (
    <ShowMoreButton
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
    >
      Наверх !
    </ShowMoreButton>
  );

  // Кнопка "Загрузить ещё"
  const loadMoreButton = (
    <ShowMoreButton
      onClick={() => {
        dispatch(loadMore(searchId));
      }}
    >
      Загрузить ещё...
    </ShowMoreButton>
  );

  return (
    <div className="tickets">
      {hasError && <div className="error">error</div>}
      {ticketsUI}
      {loading ? <Loader /> : <>{stop ? toTopButton : loadMoreButton}</>}
    </div>
  );
};

export default Ticketlist;
