import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Register from "./components/Register/Register"
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import Login from './components/Login/Login'
import Schools from "./components/Schools/Schools"
import Footer from "./components/Footer/Footer";

export default class MainRouter extends Component {
    render() {
        return (
            <>
                <Nav />

                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path="/register" exact component={Register}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/schools" exact component={Schools}/>
                    {/* <Route path='/register' exact component={Register} />
                    <Route path='/login' exact component={Login} /> */}

                    
                </Switch>

                
            </>
        );
    }
}
