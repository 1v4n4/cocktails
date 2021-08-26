import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import App from './components/App';
import Cocktail from './components/Cocktail';

const Routes = () => (

  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/cocktail/:cocktail" component={Cocktail} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
