const initialState = {
  isLogged: false,
  user: {},
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
    {
      console.log(action);
      return { ...state, isLogged: true, user: action.userInfo };
    }

    default:
      return state;
  }
}

export default loginReducer;
