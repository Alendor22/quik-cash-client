import React from 'react';
import { useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';


export const UsersListingsIndex = (routerProps) => {
      const userListings = useSelector(state => state.listings.filter(listings => listings.seller_id === parseInt(routerProps.match.params.id)));
      const renderUsersListingsIndex = () => {
        return userListings.map(listing => {
          return  <div key={listing.id}>
                      <Link key={listing.id} to={`listings/${listing.seller_id}`}>Seller: {listing.seller.username} - Listing: {listing.item_name}</Link>
                      
                  </div>
                    
        })
    }
    
    return (
      <ul>
          {renderUsersListingsIndex()} 
      </ul>
    )

}

export default withRouter((UsersListingsIndex))
