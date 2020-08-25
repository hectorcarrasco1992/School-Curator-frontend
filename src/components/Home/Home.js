import React, { Component } from 'react'
import PropTypes from 'prop-types'

import "./Home.css"

export default class Home extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <div id="parallax-world-of-ugg">
                    <section>
                        <div className="title">
                            <h3>Find Your</h3>
                            <h1>Coding Dojo</h1>
                        </div>
                    </section>
                    
                    <section>
                        <div className="parallax-one">
                            <h2>'Believe you can and you're halfway there.' <br/>-Theodore Roosevelt</h2>
                        </div>
                    </section>

                    <section>
                        <div className="block">
                            <p><span className="first-character sc">I</span>can do this! This mentality is the first step into learning a new skill and starting a new career.</p>
                            <p className="line-break margin-top-10"></p>
                            <p className="margin-top-10">Self belief is the vehicle that will carry you throughout your life and having it is an essential tool. Only thing that can stop you is you! Find your Dojo here!!</p>
                        </div>
                    </section>
                    
                    <section>
                        <div className="parallax-two">
                            <h2>'Any fool can know. The point is to understand.' –Albert Einstein</h2>
                        </div>
                    </section>
                    
                    <section>
                        <div className="block">
                            <p><span className="first-character ny">B</span>ecome a better you and find a school that will help you understand code, not just learn it. Anyone can be taught what to write but a good school can help you learn to think like a coder. With this new mindset, you can become the next Marc Zuckleburg without the drama.</p>
                            <p className="line-break margin-top-10"></p>
                            <p className="margin-top-10"> ‘Tell me and I forget. Teach me and I remember. Involve me and I learn.’ –Benjamin Franklin</p>
                        </div>
                    </section>
                    
                    <section>
                        <div className="parallax-three">
                            <h2>TeamWork</h2>
                        </div>
                    </section>
                    
                    <section>
                        <div className="block">
                            <p><span className="first-character atw">F</span>ind your team in the classroom. Get surrounded by amazing teachers and classmates who will further propel your journey in coding.</p>
                            <p className="line-break margin-top-10"></p>
                            <p className="margin-top-10">'Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.' -Andrew Carnegie</p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
