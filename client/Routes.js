import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  ProfileView,
  AllContacts,
  Home,
  SearchResults,
  PetView,
} from './components';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contacts/:id" component={ProfileView} />
        <Route path="/contacts" component={AllContacts} />
        <Route path="/pets/:id" component={PetView} />
        <Route path="/results" component={SearchResults} />
      </Switch>
    );
  }
}

export default Routes;
