import React, { FC } from 'react';
import Logo from './components/Logo';
import Filter from './components/Filter';
import Tabs from './components/Tabs';
import Ticketlist from './components/TicketList/TicketList';

const App: FC = () => (
  <>
    <Logo />
    <div className="main">
      <Filter />
      <div className="right-side">
        <Tabs />
        <Ticketlist />
      </div>
    </div>
  </>
);

export default App;
