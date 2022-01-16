/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Others
import { isLoggedIn } from "utils/auth"
import * as Paths from "constants/routes"

// Pages
import HomePage from 'containers/HomePage/Loadable';
import AccountPage from 'containers/AccountPage/Loadable';
import ChangePasswordPage from 'containers/ChangePasswordPage/Loadable';
import ContactPage from 'containers/ContactPage/Loadable';
import ProductsPage from 'containers/ProductsPage/Loadable';
import NewsPage from 'containers/NewsPage/Loadable';
import SkygateMetaversePage from 'containers/SkygateMetaversePage/Loadable';
import LoginPage from 'containers/LogInPage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import ForgotPasswordPage from 'containers/ForgotPasswordPage/Loadable';
import VerifyCodePage from 'containers/VerifyCodePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
// Components
import GlobalFonts from 'components/GlobalFonts';
import Header from 'components/Header';
import Logo from 'components/Logo';
import Footer from 'components/Footer';
import ErrorBoundary from 'components/Error';
// Routes
import PublicRoute from 'components/Router/PublicRoute'; 
import PrivateRoute from 'components/Router/PrivateRoute'; 
// Styles
import GlobalStyle from 'global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  max-width: calc(1380px + 16px * 2);
  background-color:#E5E5E5;
`;

const PageWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
`;

export default function App() {
  const isAuthenticated = isLoggedIn();
  const mHeader = isAuthenticated ? <Header /> : <Logo />;
  const mFooter = isAuthenticated ? <Footer /> : '';
  
  return (
    <AppWrapper>
      <GlobalFonts/>
      <ErrorBoundary>
      <Helmet
        titleTemplate="%s - congtroi.org"
        defaultTitle="congtroi.org"
      >
        <meta name="description" content="Cổng trời" />
      </Helmet>
      <PageWrapper className={'wrapper ' + (isAuthenticated ? 'header-column' : 'header-row')}>
        {mHeader}
        <Switch>
          <PublicRoute path={Paths.ROUTE_LOGIN} isAuthenticated={isAuthenticated}><LoginPage /></PublicRoute>
          <PublicRoute path={Paths.ROUTE_REGISTER} isAuthenticated={isAuthenticated}><RegisterPage /></PublicRoute>
          <PublicRoute path={Paths.ROUTE_FORGOTPASSWORD} isAuthenticated={isAuthenticated}><ForgotPasswordPage /></PublicRoute>         
          <PublicRoute path={Paths.ROUTE_VERIFYCODE} isAuthenticated={isAuthenticated}><VerifyCodePage /></PublicRoute> 
          <PublicRoute path={Paths.ROUTE_CHANGEPASSWORD} isAuthenticated={isAuthenticated}><ChangePasswordPage /></PublicRoute>

          <PrivateRoute path={Paths.ROUTE_ACCOUNT} isAuthenticated={isAuthenticated}><AccountPage /></PrivateRoute>

          <PrivateRoute path={Paths.ROUTE_SKYGATEMETAVERSE} isAuthenticated={isAuthenticated}><SkygateMetaversePage /></PrivateRoute>
          <PrivateRoute path={Paths.ROUTE_PRODUCTS} isAuthenticated={isAuthenticated}><ProductsPage /></PrivateRoute>
          <PrivateRoute path={Paths.ROUTE_NEWS} isAuthenticated={isAuthenticated}><NewsPage /></PrivateRoute>
          <PrivateRoute path={Paths.ROUTE_CONTACT} isAuthenticated={isAuthenticated}><ContactPage /></PrivateRoute>
          
          <PrivateRoute path={Paths.ROUTE_HOME} isAuthenticated={isAuthenticated}><HomePage /></PrivateRoute>
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </PageWrapper>
      {mFooter}
      <GlobalStyle />
      <ToastContainer limit={5} autoClose={1500} />
      </ErrorBoundary>
    </AppWrapper>
  );
}
