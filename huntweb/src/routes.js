import { BrowserRouter, Route, Switch } from'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';
import React from 'react';

const Routes = () => (
    
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>

);

export default Routes;