import React from 'react';
import Routes from './Routes';
import { Navbar, ContactForm, SearchBar } from './components';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <SearchBar />
      <ContactForm />
    </div>
  );
};

export default App;
