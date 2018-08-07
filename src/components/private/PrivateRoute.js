import React, { Component, PropTypes } from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ( {Component, ...rest} ) => {

  const loggedIn = false;

  return(<Route
    {...rest}
    render={props => loggedIn ?
      (<Component {...props}/>) : (<Redirect to={{ pathname: "home"}}/>)
    }
    />);
};

PrivateRoute.propTypes = {
  Component: PropTypes.isRequired
};

export default PrivateRoute;
