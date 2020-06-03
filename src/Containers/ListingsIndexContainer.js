import React from 'react';
import { connect } from 'react-redux';
import { loadListingsIndex } from '../redux/actions';
import { Route } from 'react-router-dom';
import ListingsIndex from '../Components';
// import UsersListings from './UsersListings';



export const ListingsIndexContainer = (props) => {
  return (
    <>
        <Route exact path="/listings" render={(routerProps) => <ListingsIndex {...routerProps} listings={props.listings} /> }/>
        {/* <Route exact path={`/listings/${listing.id}`} render={(routerProps) => <AvailableListings {...routerProps} listings={props.listings} /> }/>
        <Route exact path={`/users/${listings.seller_id}/lisitngs`} render={(routerProps) => {isLoggedIn ? <UsersListings /> : "Please login to see your Quik-listings!" } {...routerProps} listings={props.listings} }/> 
        <Route exact path={`users/${listings.buyer_id}/listings`} render={(routerProps) => {isLoggedIn ? <UsersBoughtListings /> : "Please login to see your Quik-buys! "} {...routerProps} listings={props.listings} }/>  */}
             
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    listings: state.listings
  }
}


export default connect(mapStateToProps, {loadListingsIndex})(ListingsIndexContainer);
