const initialState = {
  isLogged: false,
  user: {},
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogged: true,
        user: action.userInfo,
      };
    case 'LOGOUT':
    {
      console.log('logou');
      return {
        ...state,
        isLogged: false,
        user: {},
      };
    }

    default:
      return state;
  }
}

export default loginReducer;
