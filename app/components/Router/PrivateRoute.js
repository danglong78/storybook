import React from "react"
import PropTypes from "prop-types"
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute({ children, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={
        ({ location }) => (
          isAuthenticated
            ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: location }
                }}
              />
            ))
      }
    />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.any.isRequired,
}

export default PrivateRoute;