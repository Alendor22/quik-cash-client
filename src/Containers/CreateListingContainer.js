import React from 'react';
import { CreateListing } from '../Components';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


export const CreateListingContainer = (props) => {

  return (
    <>
      <Switch>
        <Route exact path="/listings" render={(routerProps) => <CreateListing {...routerProps} listings={props.listings} /> }/>
      </Switch>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    listings: state.listings
  }
}

export default connect(mapStateToProps)(CreateListingContainer)
