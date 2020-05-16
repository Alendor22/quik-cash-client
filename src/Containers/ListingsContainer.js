import React from 'react';
import { connect } from 'react-redux';
import { loadListingsIndex } from '../redux/actions';
import { Switch, Route } from 'react-router-dom';
import ListingsLinks from '../Components/ListingsLinks';

export const ListingsContainer = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/listings" render={(routerProps) => <ListingsLinks {...routerProps} listings={props.listings} /> }/>
      </Switch>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    listings: state.listings
  }
}


export default connect(mapStateToProps, {loadListingsIndex})(ListingsContainer);
