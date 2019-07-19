import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProfileView, AllContacts, Home, SearchResults } from './components';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/contacts" component={AllContacts} />
        <Route path="/contacts/:id" component={ProfileView} />
        <Route path="/results" component={SearchResults} />
      </Switch>
    );
  }
}

export default Routes;
