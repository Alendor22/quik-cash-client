import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from './Pages';
import Components from './Components/';


const Routes = () => {
  return (
      <Switch>
        <Route exact path="/signup" component={Pages.Signup} />
        <Route exact path="/login" component={Pages.Login} />
        <Route exact path="/listings/new" component={Components.CreateListing} />
        <Route exact path="/listings" component={Components.ListingsContainer} />
        <Route exact path="/listings/listings.id" component={Components.ListingShowContainer} />
      </Switch>
  )
}

export default Routes;