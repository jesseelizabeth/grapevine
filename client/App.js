import React from 'react';
import Routes from './Routes';
import { Navbar, ContactForm } from './components';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <ContactForm />
    </div>
  );
};

export default App;
