import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BuyListing from './BuyListing'
import { Link } from 'react-router-dom';


export const ListingLink = (props) => {
  const { key } = props;
  const listings = useSelector(state => state.listings);
  let token = localStorage.getItem('token');
  const isLoggedIn = !!token;
  const listing = listings.find(listing => listing.id === parseInt(props.location.pathname.split('/listings/')[1]));
  const buyerOfListing = listing && listing.buyer && listing.buyer.username;
  const listingAvail = listing && !listing.sold;

  let [upVote, setUpVote] = useState(0)
  let [downVote, setDownVote] = useState(0)

  const handleUpVoteClick = (e) => {
    e.preventDefault()
    setUpVote(upVote + 1)
  };

  const handleDownVoteClick = (e) => {
    e.preventDefault()
    setDownVote(downVote - 1)
  };

      const renderListingLink = () => {

      
        return <>
                  <h3>Quik-Listing</h3>
                  <span key={key} to={`/listings/${key}`}>
                  <p>Item Name - {listing.item_name}</p>
                  <p>Description - {listing.description}</p>
                  <p>Price - ${listing.price}</p>
                  <p>Seller - <Link to={`/users/${listing.seller_id}/listings`}>{listing.seller.username}</Link></p>
                  <p>Seller Bio - {listing.seller.bio}</p>
                  <p>Buyer - <Link to={`/users/${listing.buyer_id}/listings`}>{listingAvail && isLoggedIn ? <BuyListing listing = {listing}/> : buyerOfListing}</Link></p>
                  </span>
                  <button type="submit" onClick={(e) => {handleUpVoteClick(e)}}>Up-Vote-Listing: {upVote}</button>
                  <button type="submit" onClick={(e) => {handleDownVoteClick(e)}}>Down-Vote-Listing: {downVote}</button>
               </>
    }


    return (
      <ul>
         {listing ? renderListingLink() : <p>loading...</p>}
      </ul>
    )

}


export default ListingLink