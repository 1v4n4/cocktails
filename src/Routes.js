import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import App from './components/App';
import Cocktail from './components/Cocktail';
import SelectIngredients from './containers/SelectIngredients';
import Alcoholic from './containers/Alcoholic';
import NonAlcoholic from './containers/NonAlcoholic';

const Routes = () => (

  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/cocktail/:cocktail" component={Cocktail} />
      <Route path="/ingredients" component={SelectIngredients} />
      <Route path="/alcoholic" component={Alcoholic} />
      <Route path="/non-alcoholic" component={NonAlcoholic} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
