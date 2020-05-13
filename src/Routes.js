import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Pages from './Pages'
import CreateListing from './Components/CreateListing'

const Routes = () => {
  return (
      <Switch>
        <Route exact path="/" component={Pages.Home} />
        <Route exact path="/signup" component={Pages.Signup} />
        <Route exact path="/login" component={Pages.Login} />
        <Route exact path="/listings/new" component={CreateListing} />
      </Switch>
  )
}

export default Routes;