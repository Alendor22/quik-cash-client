import React from 'react';
import { useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';


export const UsersListingsIndex = (routerProps) => {
      const usersListings = useSelector(state => state.listings.filter(listings => listings.seller_id === parseInt(routerProps.match.params.id)));
      const renderUsersListingsIndex = () => {
        return usersListings.map(listing => {
          return  <div key={listing.id}>
                      <Link key={listing.id} to={`users/${listing.seller_id}/listings`}>{listing.item_name}</Link>
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
