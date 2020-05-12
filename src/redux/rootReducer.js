const initialState = {
  user: {
username: ""
},
  providers: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_USER':
      return {...state, user: payload};
    case 'CLEAR_USER':
      return {};  
    default:
      return state;
  }
};