import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProfileView, AllContacts } from './components';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/contacts" component={AllContacts} />
        <Route path="/contacts/:id" component={ProfileView} />
      </Switch>
    );
  }
}

export default Routes;
