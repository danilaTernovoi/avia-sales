import React, { FC } from 'react';

// COMPONENTS
import Filter from './components/Filter';
import Logo from './components/Logo';
import Tabs from './components/Tabs';
import Ticketlist from './components/TicketList';

const App: FC = () => (
  <>
    <Logo />
    <main className="main">
      <Filter />
      <div className="right-side">
        <Tabs />
        <Ticketlist />
      </div>
    </main>
  </>
);

export default App;
