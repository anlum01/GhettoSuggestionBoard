import React, { Component, PropTypes } from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ( {component: Component, loggedIn, ...rest} ) => {

  return(<Route {...rest}
    render={(props) => loggedIn === true ?
      (<Component {...props} />) : (<Redirect to={{path: "about"}} />)
    } />);
};


export default PrivateRoute;
