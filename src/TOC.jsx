import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import { RemountingRoute } from './components/RemountingRoute';
import ScrollToTop from './components/ScrollToTop';

import Home from './components/pages/Home';
import Campaigns from './components/pages/Campaigns';

class TOC extends Component {
    render() { 
        return (
            <ScrollToTop>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/campaigns" exact component={Campaigns} />
                </Switch>
            </ScrollToTop>
        );
    }
}
 
export default TOC;