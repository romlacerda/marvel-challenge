import UsersList from '../../assets/users.json';

function getUser(userInfo) {
  const hasUser = UsersList.filter((user) => user.user === userInfo.userLogin && user.password === Number(userInfo.userPassword));
  return hasUser;
}

export { getUser };
