import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Pages from './Pages'

const Routes = () => {
  return (
      <Switch>
        <Route exact path="/" component={Pages.Home} />
        <Route exact path="/signup" component={Pages.Signup} />
        <Route exact path="/login" component={Pages.Login} />
      </Switch>
  )
}

export default Routes;