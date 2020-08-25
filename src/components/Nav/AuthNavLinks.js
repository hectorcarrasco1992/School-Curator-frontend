import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';
export default class AuthLinks extends Component {
    componentDidMount(){
        console.log(this.props);
        
    }
    render() {
        return (
            <>
                <div className='header'>
                    <div className='navbar' id='nav'>
                        <ul>
                            <NavLink to='/' id='nav-links'>
                                <img
                                    src='images/logo.png'
                                    alt='logo'
                                    id='nav-logo'
                                />
                            </NavLink>
                            
                            {/* <li id='nav-links'>You</li> */}

                            <li>
                                <NavLink
                                    to='/schools'
                                    id='nav-links'
                                    
                                >
                                    Dojos
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/login'
                                    id='nav-links'
                                    onClick={() => {
                                        this.props.logout();
                                    }}
                                >
                                    Logout
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}
