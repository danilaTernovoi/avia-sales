import React, { FC } from 'react';
import { buildTime, formatPrice } from '../../libs';
import { ITicket } from '../../types';
import './Ticket.scss';

interface ITicketProps {
  ticket: ITicket;
}

const Ticket: FC<ITicketProps> = ({ ticket }) => {
  const { price, carrier, segments } = ticket;

  return (
    <div className="ticket">
      <header className="ticket__header">
        {/* Цена */}
        <div className="ticket__price">{formatPrice(price)}</div>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt={carrier} className="ticket__logo" />
      </header>

      {segments.map((segment) => {
        const { duration, fromto } = buildTime(segment);
        const { origin, destination, stops } = segment;
        const hasStops = stops.length;

        return (
          <div className="ticket__infoRow" key={JSON.stringify(segment)}>
            <div className="ticket__infoPair">
              <div className="title">
                {origin} – {destination}
              </div>
              <div className="body">{fromto}</div>
            </div>

            <div className="ticket__infoPair">
              <div className="title">В пути</div>
              <div className="body">{duration}</div>
            </div>

            <div className="ticket__infoPair">
              <div className="title">
                {hasStops ? (
                  <>
                    {stops.length} пересадк{stops.length > 1 ? 'и' : 'а'}
                  </>
                ) : (
                  <>без пересадок</>
                )}
              </div>

              <div className="body">{stops.join(', ')}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Ticket;
