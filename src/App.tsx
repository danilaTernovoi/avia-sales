import React from 'react';
import Logo from './components/Logo';
import Filter from './components/Filter';
import Tabs from './components/Tabs';
import Ticketlist from './components/TicketList/TicketList';

const sandbox = false;

function App() {
  if (sandbox) {
    return <div className="sandbox">sandbox</div>;
  }

  return (
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
}

export default App;
