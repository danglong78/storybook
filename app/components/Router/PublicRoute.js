import React from "react"
import PropTypes from "prop-types"
import {Route, Redirect} from 'react-router-dom';

function PublicRoute({ children, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={
        ({ location }) => (
          !isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location }
              }}
            />
          ))
      }
    />
  );
}

PublicRoute.propTypes = {
  children: PropTypes.any.isRequired,
}

export default PublicRoute;