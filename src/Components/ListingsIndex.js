import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ListingsIndex = () => {
  const listings = useSelector(state => state.listings);
    const renderListingsIndex = () => {
  
     return listings.map(listing => {
        return <div key={listing.id}>
                  <Link key={listing.id} to={`/listings/${listing.id}`}>{listing.item_name}</Link>
               </div>
      })
    }

    return (
      <ul>
        {renderListingsIndex()}
      </ul>
    )

}


export default ListingsIndex
