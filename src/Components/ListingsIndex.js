import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UsersBoughtListings from './UsersBoughtListings';
import UsersListings from './UsersListings';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const ListingsIndex = () => {
  const listings = useSelector(state => state.listings);
  let token = localStorage.getItem('token');
  const isLoggedIn = !!token;
      
    const [select, setSelect] = useState("")
    const [sort, setSort] = useState(false)

    const handleSortToggle = (listings) => {
      let sortListings = [...listings]
      //console.log("sortListings", sortListings )
        if (sort === true) {
         return sortListings.sort((a,b) => {
          let la = a["item_name"],
          lb = b["item_name"]
          //console.log("I'm la", la)
          // console.log("I'm lb", lb)
          if (la < lb) {
            return -1;
          }
          if (la > lb) {
            return 1;
          }
          return 0;
        });
      } else {
        return listings
      }
  
    }

    const handleChange = (e) => {
      setSelect(e.target.value)
      //console.log(e.target.value)
    };

    const currentListings = () => {
      if (select === "available") {
        //console.log("buy me")
        return listings.filter(listing => listing.sold === false)
      }
      else if (select === "sold") {
        //console.log("I'm sold")
        return listings.filter(listing => listing.sold === true)
      }
      else {
        return listings
      }
    } 



    const renderListingsIndex = () => {
      //console.log("test")
      return handleSortToggle(currentListings()).map(listing => {
        return  <div key={listing.id}>
                  <Container>
                    <Row lg={3}>
                      <Col s={6}></Col>
                        <Link key={listing.id} to={`/listings/${listing.id}`}><p>  </p>{listing.item_name}{listing.sold === true ? " - Sold" : ""}<p>  </p></Link>
                    </Row>
                  </Container>
                </div>
      })      
    }

    return (
      <div>
      <ul>
        <h3>Quik-Listings</h3>
                  <form>
                    <label>
                      Choose the listings you'd like to see.
                        <select value={select} onChange={handleChange}>
                          <option value="available">Available-Listings</option>
                          <option value="sold">Sold-Listings</option>
                          <option value="all listings">All-Listings</option>
                        </select>
                      </label>
                  </form>
          {renderListingsIndex()}
      </ul>
      <button onClick={() => setSort(!sort)}>Sort-Toggle</button>
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
