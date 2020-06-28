const initialState = {
  isLogged: localStorage.getItem('isLogged'),
  user: {},
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('isLogged', true);
      localStorage.setItem('loggedUser', JSON.stringify(action.userInfo));
      return {
        ...state,
        isLogged: true,
        user: action.userInfo,
      };
    case 'LOGOUT':
      localStorage.setItem('isLogged', false);
      localStorage.removeItem('loggedUser');
      return {
        ...state,
        isLogged: false,
        user: {},
      };
    default:
      return state;
  }
}

export default loginReducer;
