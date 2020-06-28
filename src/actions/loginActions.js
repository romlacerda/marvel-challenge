export const login = (userInfo) => ({
  type: 'LOGIN',
  userInfo,
});

export const logout = () => ({
  type: 'LOGOUT',
});
