import React, { Component } from 'react'
import { connect } from 'react-redux'
import addListing from '../redux/actions'

const intitialFormState = {
  itemName: "",
  description: "",
  price: ""
}

class CreateListing extends Component {
  
  state = intitialFormState

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
        let listing = {
          item_name: this.state.itemName,
          description: this.state.description,
          price: this.state.price
      }
      this.props.addListing()
  }

  resetForm = () => {
    this.setState(intitialFormState)
  }

  render() {
    return (
      <>
        <h3>Create Listing</h3>
          <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="itemName">Item Name</label>
            <input type="text" name="itemName" id="itemName" value={this.state.itemName} onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="description">Description</label>
              <textarea type="text" name="description" id="description" value={this.state.description} onChange={this.handleChange}></textarea>
            </div>
            <div className="input-field">
              <label htmlFor="price">price$</label>
              <input type="number" placeholder="0.00" name="price" id="price" value={this.state.price} onChange={this.handleChange}></input>
            </div>
            <input type="submit" value="Add Listing" className="btn blue" />
        </form>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  return { listings: state.listings }
})

const mapDispatchToProps = dispatch => {
  return {
    addListing: () => {
      dispatch(addListing())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateListing)