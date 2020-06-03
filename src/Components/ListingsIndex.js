import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AvailableListings from './AvailableListings';
import UsersBoughtListings from './UsersBoughtListings';
import UsersListings from './UsersListings';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const ListingsIndex = () => {
  const listings = useSelector(state => state.listings);
  let token = localStorage.getItem('token');
  const isLoggedIn = !!token;
    const renderListingsIndex = () => {
      
     return listings.map(listing => {
        return  <div key={listing.id}>
                  <Container>
                    <Row lg={3}>
                      <Col s={6}></Col>
                        <Button variant="secondary"><Link key={listing.id} to={`/listings/${listing.id}`}>{listing.item_name}{listing.sold === true ? " - Sold" : ""}</Link></Button>
                    </Row>  
                  </Container>
                  
                </div>
               
      })      
  
    }

    return (
      <div>
      <ul>
        <h3>Quik-Listings</h3>
          {renderListingsIndex()}
      </ul>
      <AvailableListings />
      <br />
      <Container>
        <Row lg={3}>
          <Col s={6}></Col>
            <h3>My-Quik-Listings</h3>
              {isLoggedIn ? <UsersListings /> : "Please login to see your Quik-listings!" }
        </Row>
        <Row lg={1}>
          <Col s={6}></Col>
            <h3>My-Quik-Buys</h3>
            {isLoggedIn ? <UsersBoughtListings /> : "Please login to see your Quik-buys! "}  
        </Row>
      </Container> 
      </div>
    )

}


export default ListingsIndex
