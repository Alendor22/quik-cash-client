const initialState = {
  user: {
  username: ""
},
  listings: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_USER':
      return {...state, user: payload};
    case 'CLEAR_USER':
      return {...state, user: {}}; 
    case 'SET_LISTING':
      return {...state, listings: [...state.listings, payload]};
    case "GET_LISTINGS":
      return {...state, listings: payload}; 
    case 'BUY_LISTING':
      // let boughtListing = initialState.listings;
      // let listingsIBought = () => boughtListing.slice();
      return {...state, listings: [...state.listings.concat(payload)]};
    default:
      return state;
  }
};