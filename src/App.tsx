import React from 'react';
import Logo from './components/Logo';
import Filter from './components/Filter';
import Ticket from './components/Ticket';
import ShowMoreButton from './components/ShowMoreButton';
import Tabs from './components/Tabs';

function App() {
  return (
    <>
      <Logo />
      <div className="main">
        <Filter />
        <div className="right-side">
          <Tabs />
          <div className="tickets">
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <ShowMoreButton>Показать еще 5 билетов!</ShowMoreButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
