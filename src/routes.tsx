import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import CreatePoint from './pages/CreatePoint/CreatePoint';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={CreatePoint} path="/create-point" />
            <Route component={Home} path="/" exact={true} />
        </BrowserRouter>
    );
}

export default Routes;