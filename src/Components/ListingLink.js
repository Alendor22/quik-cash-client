import React from 'react';
import { useSelector } from 'react-redux';
import BuyListing from './BuyListing'
import { Link } from 'react-router-dom';

export const ListingLink = (props) => {
  const { key } = props;
  const listings = useSelector(state => state.listings);
  const listing = listings.find(listing => listing.id === parseInt(props.location.pathname.split('/listings/')[1]));
      const renderListingLink = () => {
      
        return <div>
                  <span key={key} to={`/listings/${key}`}>
                    <p>Item Name - {listing.item_name}</p>
                    <p>Description - {listing.description}</p>
                    <p>Price - ${listing.price}</p>
                    <p>Seller - <Link to={`/users/${listing.seller_id}/listings`}>{listing.seller.username}</Link></p>
                    <p>Buyer - <Link to={`/users/${listing.buyer_id}/listings`}>{listing.sold === false ? <>This listing is available for purchase!</> : listing.buyer.username}</Link></p>
                  </span>
                  <>{listing.sold === false ? <BuyListing /> : <>This listing in no longer available!</>}</>
               </div>
    }
    

    return (
      <ul>
         {listing ? renderListingLink() : <p>loading...</p>}
      </ul>
    )

}


export default ListingLink