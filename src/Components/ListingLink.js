import React from 'react';
import { Link } from 'react-router-dom';

export const ListingLink = (props) => {
    const renderListingLink = () => {
        return <div key={listing.id}>
                  <Link key={listing.id} to={`/listings/${listing.id}`}>
                    {listing.item_name}
                    {listing.description}
                    {listing.price}
                    </Link>
               </div>
    }
    

    return (
      <ul>
        {renderListingLink()}
      </ul>
    )

}


export default ListingLink