import React from 'react'
import { useSelector } from 'react-redux'

export const UsersBoughtListings = () => {
  const listings = useSelector(state => state.listings);
  const user = useSelector(state => state.user);
  const userBoughtListings = () => {
    if(user.username){
      return listings.filter(listing => listing.buyer_id === user.id);
    }
    else {
      return [];
    }
  };

  
  const renderUserBoughtStuff = () => {
    return userBoughtListings().map((listing, index) => {
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
          {renderUserBoughtStuff()} 
        </div>
  )
}

export default UsersBoughtListings