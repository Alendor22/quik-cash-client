import React from 'react';
import { connect } from 'react-redux';
import { loadListingsIndex } from '../redux/actions';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListingLink  from '../Components/ListingLink';

export const ListingLinkContainer = (props) => {
  const listings = useSelector(state => state.listings);

  const loadListing = (routerProps) => {
    let aListing = listings.find(listing => listing.id === parseInt(props.location.pathname.split('/listings/')[1]))
    const isListingSold = !!aListing && aListing.sold;
    
      return isListingSold ? 'Sorry, this listing has been purchased!' : <ListingLink {...routerProps} listing={aListing}/>;
  };
  
  return (
    <>
      <Switch>
        <Route exact path="/listings/:id" render={loadListing}/>
      </Switch>
    </>
  )
}



export default connect(null, {loadListingsIndex})(ListingLinkContainer);