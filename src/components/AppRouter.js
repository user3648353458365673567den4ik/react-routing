import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={Home} />
                <Route path={'/about'} exact component={About} />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;