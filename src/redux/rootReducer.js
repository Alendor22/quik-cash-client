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
      const newListingArr = state.listings.map(listing => listing.id === payload.id ? payload : listing )
      return {...state, listings: newListingArr};
    case 'USERS_LISTINGS':
      return {...state, users: [...state.user.listings, payload]};
    default:
      return state;
  }
};