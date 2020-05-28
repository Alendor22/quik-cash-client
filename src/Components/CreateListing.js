import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addListing } from '../redux/actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const initialFormState = {
  item_name: "",
  description: "",
  price: ""
};

class CreateListing extends Component {
  
  state = initialFormState;

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
        let listing = {
          seller_id: this.props.seller_id,
          item_name: this.state.item_name,
          description: this.state.description,
          price: this.state.price
      }
      this.props.addListing(listing)
      this.props.history.push('/listings')
      this.resetForm()
  }

  resetForm = () => {
    this.setState(initialFormState)
  };

  render() {
    return (
      <>
        <h3>Create a new Quik-Listing</h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="item_name">
              <Form.Label>Item Name</Form.Label>
                <Form.Control
                  type="text"
                  name="item_name"
                  value={this.state.item_name}
                  onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows="3" 
                  name="description" 
                  value={this.state.description}
                  onChange={this.handleChange}
                />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>price$</Form.Label>
                <Form.Control
                  type="number" 
                  placeholder="0.00" 
                  name="price" 
                  value={this.state.price}
                  onChange={this.handleChange}
                /> 
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Listing
            </Button>
        </Form>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    listings: state.listings,
    seller_id: state.user.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (listing) => dispatch( addListing(listing) ) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateListing)
