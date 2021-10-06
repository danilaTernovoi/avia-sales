import React from 'react';
import s7Logo from '../../assets/img/S7_Logo.png';
import './Ticket.scss';

const Ticket = () => (
  <div className="ticket">
    <header className="ticket__header">
      <div className="ticket__price">13 400 Р</div>
      <img src={s7Logo} alt="s7 logo" className="ticket__logo" />
    </header>

    <div className="ticket__infoRow">
      <div className="ticket__infoPair">
        <div className="title">MOW – HKT</div>
        <div className="body">10:45 – 08:00</div>
      </div>

      <div className="ticket__infoPair">
        <div className="title">В пути</div>
        <div className="body">21ч 15м</div>
      </div>

      <div className="ticket__infoPair">
        <div className="title">2 пересадки</div>
        <div className="body">HKG, JNB</div>
      </div>
    </div>

    <div className="ticket__infoRow">
      <div className="ticket__infoPair">
        <div className="title">MOW – HKT</div>
        <div className="body">10:45 – 08:00</div>
      </div>

      <div className="ticket__infoPair">
        <div className="title">В пути</div>
        <div className="body">21ч 15м</div>
      </div>

      <div className="ticket__infoPair">
        <div className="title">2 пересадки</div>
        <div className="body">HKG, JNB</div>
      </div>
    </div>
  </div>
);

export default Ticket;
