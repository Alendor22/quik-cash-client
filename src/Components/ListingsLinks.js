import React from 'react';
import { Link } from 'react-router-dom';

export const ListingsLinks = (props) => {
    const renderListingLink = () => {
      return props.listings.map(listing => {
        return <div key={listing.id}>
                  <Link key={listing.id} to={`/listings/${listing.id}`}>{listing.item_name}</Link>
               </div>
      })
    }

    return (
      <ul>
        {renderListingLink()}
      </ul>
    )

}


export default ListingsLinks
