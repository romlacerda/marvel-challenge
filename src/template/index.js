import React from 'react';
import Navigation from './Navigation';

const Template = ({ children }) => {
  const isLogged = Boolean(localStorage.getItem('isLogged'));

  return (
    <>
      { isLogged && (
      <Navigation />
      ) }
      {children}
    </>
  );
};

export default Template;
