import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import UsersListings from './UsersListings';
import UsersListings  from './UsersListings';

export const ListingsIndex = () => {
  const listings = useSelector(state => state.listings);
  const token = localStorage.getItem('token');
  const isLoggedIn = !!token;
    const renderListingsIndex = () => {
  
     return listings.map(listing => {
        return  <div key={listing.id}>
                  <Link key={listing.id} to={`/listings/${listing.id}`}>{listing.item_name}</Link>
                </div>
               
      })
    }

    return (
      <div>
      <ul>
        <h3>Quik-Listings</h3>
          {renderListingsIndex()}
      </ul>
        <h3>My-Quik-Listings</h3>
        {isLoggedIn ? <UsersListings /> : "Please login to see your listings!" }
      </div>
    )

}


export default ListingsIndex
