import Users from '../assets/users.json';

const logUserIn = (payload) => ({ type: 'LOG_IN', payload });

export const logUserOut = () => ({ type: 'LOG_OUT' });

export const fetchUser = (userInfo) => (dispatch) => {
  const data = Users.filter((user) => user.user === userInfo.user && user.password === Number(userInfo.password));

  if (data) {
    localStorage.setItem('loggedUser', data.user);
    dispatch(logUserIn(data.user));
  }
};
