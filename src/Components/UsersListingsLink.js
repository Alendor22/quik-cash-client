import React from 'react';
import { useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';


export const UsersListingsLink = (props) => {
      const user = useSelector(state => state.user);
      const listings = useSelector(state => state.listings);
      const usersListings = () => {
        if(user.username){
          return listings.filter(listing => listing.seller_id === user.id);
        }
        else {
          return [];
        }
        
      }

      const renderUsersListingsLink = () => {
        return usersListings().map(listing => {
          return (
                  <div key={listing.id}>
                      <Link key={listing.id} to={`/users/${listing.seller_id}/listings/${listing.id}`}> - Listings purchased by {user.username} {listing.item_name}</Link>
                  </div>

          )  
        })
      }
    
    
    
    return (
      <ul>
          {renderUsersListingsLink()} 
      </ul>
    )

}

export default withRouter(UsersListingsLink)