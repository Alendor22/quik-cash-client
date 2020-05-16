import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBuyListing } from '../redux/actions';


const initialBuyState = {
  sold: false
};

class BuyListing extends Component {

    state = initialBuyState;
    
    handleBuyClick = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    render(){
      return (
        this.props.listings
        <div>
        <h3>Listing</h3>
          <p><span>Item-Name: </span>{this.props.listings.item_name}</p>
          <p><span>Description: </span>{this.props.listings.description}</p>
          <p><span>Price: $</span>{this.props.listings.price}</p>
          <input onClick={this.handleBuyClick} type="button" value="Buy-Listing" />
        </div>
    )
  }
}


export default connect(null, { fetchBuyListing })(BuyListing)