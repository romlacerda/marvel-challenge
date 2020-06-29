import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';

const Template = ({ children }) => {
  const isLogged = localStorage.getItem('isLogged');
  return (
    <>
      { isLogged == 'true' && (
      <>
        <Navigation />
        {children}
      </>
      ) }
    </>
  );
};

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
