const initialState = {
  isLogged: false,
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
    {
      console.log(state);
      return { ...state, isLogged: true };
    }

    default:
      return state;
  }
}

export default loginReducer;
