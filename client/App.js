import React from 'react';

import {
  Navbar,
  ContactForm,
  ProfileView,
  AddContact,
  AllContacts,
} from './components';
import Routes from './Routes';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <AllContacts />
      {/* <ContactForm /> */}
    </div>
  );
};

export default App;
