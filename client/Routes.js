import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProfileView, AllContacts, Home } from './components';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/contacts" component={AllContacts} />
        <Route path="/contacts/:id" component={ProfileView} />
      </Switch>
    );
  }
}

export default Routes;
