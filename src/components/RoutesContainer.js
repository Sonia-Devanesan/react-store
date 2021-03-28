import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import ProductListingPage from '../pages/ProductListingPage';
import CartPage from '../pages/CartPage';
import LoginPage from '../components/Login.js';
import Footer from './Footer';
import HomePage from '../pages/HomePage';

const RoutesContainer = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" render={() => <h1>About</h1>} />
      <Route exact path="/faq" render={() => <h1>Faq</h1>} />
      <Route exact path="/listing" component={ProductListingPage} />
      <Route exact path="/listing/mobile" render={() => <h1>Mobile Listing</h1>} />
      <Route exact path="/cart" component={CartPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/footer" component={Footer} />

      <Route path="*" render={() => <h1>404 - Not Found</h1>} />
    </Switch>
  )
}

export default RoutesContainer