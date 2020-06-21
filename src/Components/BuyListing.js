import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBuyListing } from '../redux/actions';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


class BuyListing extends Component {

  
    handleBuyClick = (e) => {
      e.preventDefault()
        this.props.fetchBuyListing(this.props.listing.id, this.props.buyer_id, this.props.listing.seller_id, this.props.history)
    }

      render() {
        return (
              <>
                <Button variant="primary" type="submit" onClick={this.handleBuyClick}>Buy-Listing</Button>
              </>
        )
      }

}

const mapStateToProps = (state) => {
  return {
    buyer_id: state.user.id,
    listings: state.listings 
  };
};

export default withRouter(connect(mapStateToProps, { fetchBuyListing })(BuyListing))