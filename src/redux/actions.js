const BASE_URL = 'http://localhost:3001/api/v1';
const USERS_URL = BASE_URL + '/users';
const PERSIST_URL = BASE_URL + '/persist';
const LOGIN_URL = BASE_URL + '/login';
const SPECIFIC_USER_URL = id => USERS_URL + '/' + id;


export const setUserAction = userObj => ({
  type: 'SET_USER',
  payload: userObj
});

export const clearUserAction = () => ({
  type: 'CLEAR_USER'
});

export const setListingAction = (listing) => ({
  type: 'SET_LISTING',
  payload: listing
});

export const getListingsAction = (listingIndex) => ({
  type: 'GET_LISTINGS',
  payload: listingIndex
});

export const buyListingAction = (listing) => ({
  type: 'BUY_LISTING',
  payload: listing
});

// Fetch

export const newUserToDB = userObj => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObj)
  };
  fetch(USERS_URL, config)
    .then(r => r.json())
    .then(data => {
      dispatch(setUserAction(data.user));
      localStorage.setItem('token', data.token);
    });
};

export const deleteUserFromDB = userId => dispatch => {
  const config = {
    method: 'DELETE'
  };
  fetch(SPECIFIC_USER_URL(userId), config).then(r => {
    dispatch(clearUserAction());
    localStorage.clear();
  });
};

export const loginUserToDB = userCredentials => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userCredentials)
  };
  fetch (LOGIN_URL, config)
    .then(r => r.json())
    .then(data => {
      dispatch(setUserAction(data.user));
      localStorage.setItem('token', data.token);
    });
};

export const persistUser = () => dispatch => {
  const config = {
    method: 'GET',
    headers: {
      'Authorization': `bearer ` + localStorage.token
    }
  };
  fetch(PERSIST_URL, config)
    .then(r => r.json())
    .then(userInstance => {
      dispatch(setUserAction(userInstance));
    });
};

export const logoutUser = () => dispatch => {
  dispatch(clearUserAction());
  localStorage.clear();
};

export const addListing = (listing, sellerId) => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `bearer ` + localStorage.token
      },
      body: JSON.stringify({
        listing,
        sellerId
      })
   };
    fetch(USERS_URL + '/' + listing.seller_id + '/listings', config)
    .then(r => r.json())
    .then(data => {
      dispatch(setListingAction(data));
    });
};

export const loadListingsIndex = (listings) => dispatch => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
      body: JSON.stringify(listings)
   };
    fetch(BASE_URL + '/listings', config)
    .then(r => r.json())
    .then(data => {
      dispatch(getListingsAction(data));
    });
};

export const fetchBuyListing = (listing_id, buyer_id, seller_id, history) => dispatch => {
  const config = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `bearer ` + localStorage.token
    },
      body: JSON.stringify({
          buyer_id,
          sold: true
      })
   };
    fetch(USERS_URL + '/' + seller_id + '/listings/' + listing_id, config)
    .then(r => r.json())
    .then(data => {
      dispatch(buyListingAction(data));
      
      history.push('/listings');
    });
};

// export const loadUsersListingsIndex = (listings, sellerId) => dispatch => {
//   const config = {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//     },
//       body: JSON.stringify({
//         listings,
//         sellerId
//       })
//    };
//     fetch(USERS_URL + '/' + listings.seller_id + '/listings', config)
//     .then(r => r.json())
//     .then(data => {
//       dispatch(getUsersListingsIndexAction(data));
//     });
// };

export default {
  newUserToDB,
  deleteUserFromDB,
  loginUserToDB,
  persistUser,
  logoutUser,
  addListing,
  loadListingsIndex,
  fetchBuyListing
};