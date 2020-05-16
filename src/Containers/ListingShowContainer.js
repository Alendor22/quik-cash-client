import React from 'react';
import { connect } from 'react-redux';
import { loadListingsIndex } from '../redux/actions';
import { Switch, Route } from 'react-router-dom';

export const ListingShowContainer = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/listings/:id" render={(routerProps) => {
          const listing = props.listings.find(listing => listing.id === parseInt(routerProps.match.params.id))
          return <listing {...routerProps} listing={listing} />
        }}/>
      </Switch>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    listings: state.listings
  }
}


export default connect(mapStateToProps, {loadListingsIndex})(ListingShowContainer);