import React from 'react';
import { connect } from 'react-redux';
import { loadListingsIndex } from '../redux/actions';
import { Switch, Route } from 'react-router-dom';
import { ListingsIndex } from '../Components/ListingsIndex';

export const ListingsIndexContainer = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/listings" render={(routerProps) => <ListingsIndex {...routerProps} listings={props.listings} /> }/>
      </Switch>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    listings: state.listings
  }
}


export default connect(mapStateToProps, {loadListingsIndex})(ListingsIndexContainer);
