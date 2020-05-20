import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBuyListing } from '../redux/actions';


const initialBuyState = {
  buyer_id: "",
};

class BuyListing extends Component {

    state = initialBuyState;
    
    handleBuyClick = (e) => {
      
      
        e.preventDefault();
        const buyer = this.props.buyer_id;
        let listing = {
          seller_id: this.state.seller_id,
          buyer_id: this.props.buyer_id,
          item_name: this.state.itemName,
          description: this.state.description,
          price: this.state.price,
          sold: this.state.sold === true
        }
        this.setState(
          fetchBuyListing({listing, buyer})
      );
      console.log(listing)
    };

      render() {
        return (
              <div>
                <input onClick={this.handleBuyClick} type="button" value="Buy-Listing" />
              </div>
          )
      }

}

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    buyer_id: state.user.id
  };
};

export default connect(mapStateToProps, { fetchBuyListing })(BuyListing)