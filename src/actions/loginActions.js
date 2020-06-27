export const login = (user) => {
  console.log('tamo aqui');
  return {
    type: 'LOGIN',
    user,
  };
};

export default login;
