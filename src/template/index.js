import React from 'react';
import Navigation from './Navigation';
import PropTypes from 'prop-types';

const Template = ({ children }) => {
  const isLogged = localStorage.getItem('isLogged');
  return (
    <>
      { isLogged == "true" && (
      <>
      <Navigation />
      {children}
      </>
      ) }
    </>
  );
};

Template.propTypes = {
  children: PropTypes.node.isRequired
}


export default Template;
