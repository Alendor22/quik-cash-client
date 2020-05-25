import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBuyListing } from '../redux/actions';
import { withRouter } from 'react-router-dom';


class BuyListing extends Component {

    handleBuyClick = (e) => {
      e.preventDefault()
        this.props.fetchBuyListing(this.props.listing.id, this.props.buyer_id, this.props.listing.seller_id, this.props.history)
    }

      render() {
        return (
              <>
                <input onClick={this.handleBuyClick} type="button" value="Buy-Listing" />
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