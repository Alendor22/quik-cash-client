import React from 'react'
import { useSelector } from 'react-redux'

export const UsersListings = () => {
  const listings = useSelector(state => state.listings);
  const user = useSelector(state => state.user);
  const userListings = () => {
    if(user.username){
      return listings.filter(listing => listing.seller_id === user.id);
    }
    else {
      return [];
    }
  };

  
  const renderUserStuff = () => {
    return userListings().map((listing, index) => {
      return (
        <div key={index}>
          <p><span>Seller: </span>{listing.seller.username}</p>
          <p><span>Item: </span>{listing.item_name}</p>
          <p><span>Price: $</span>{listing.price}</p>
        </div>
      )
    })
  }

  return (
        <div>
          {renderUserStuff()} 
        </div>
  )
}

export default UsersListings
