import React from 'react'
import { Switch, Route } from ‘react-router-dom’
import Pages from './Pages'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Pages.Home} />
      <Route path="/signup" component={Pages.Signup} />
      <Route path="/login" component={Pages.Login} />
    </Switch>
  )
}
