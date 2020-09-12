import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Pages from './Pages';
import ListingLinkContainer from './Containers/ListingLinkContainer';
import Components from './Components';


const Routes = () => {

  return (
      <Switch>
        <Route exact path= "/" component={Pages.Home} />
        <Route exact path="/signup" component={Pages.Signup} />
        <Route exact path="/login" component={Pages.Login} />
        <Route exact path="/listings/new" component={Components.CreateListing} />
        <Route exact path="/listings" component={Components.ListingsIndex} />
        <Route exact path="/listings/:id" component={ListingLinkContainer} />
        <Route exact path="/users/:id/listings" component={Components.UsersListingsIndex} />
        <Route exact path="/users/:id/listings/:id" component={Components.UsersListingsLink} />
      </Switch>
  )
}

export default withRouter(Routes);