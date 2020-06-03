import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const AvailableListings = () => {
  const listings = useSelector(state => state.listings);
  const availListings = listings.filter(listing => listing.sold === false);
 
  const renderAvailListings = () => {
    return availListings.map(listing => {
      return  <div key={listing.id}>
              <Container>
                <Row>
                  <Col></Col>
                  <Link key={listing.id} to={`/listings/${listing.id}`}>{listing.item_name}</Link>
                </Row>
              </Container>  
              </div>
      
    })
    
  }

  return (
    <div>
      <h3>Available-Quik-Listings</h3>
        {renderAvailListings()}
    </div>
  )

}

export default AvailableListings
