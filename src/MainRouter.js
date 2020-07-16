import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home/Home'

export default class MainRouter extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Switch>
                    <Route path='/' exact component={Home} />
                    {/* <Route path='/register' exact component={Register} />
                    <Route path='/login' exact component={Login} /> */}

                    
                </Switch>
            </>
        );
    }
}
