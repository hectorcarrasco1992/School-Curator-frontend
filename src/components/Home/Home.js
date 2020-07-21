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
                            <h2>Believe you can and you're halfway there. <br/>-Theodore Roosevelt</h2>
                        </div>
                    </section>

                    <section>
                        <div className="block">
                            <p><span className="first-character sc">I</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae aspernatur non minus, error nisi laudantium cumque blanditiis similique sapiente. Doloribus enim quae dicta aliquam libero et consectetur placeat omnis blanditiis!</p>
                            <p className="line-break margin-top-10"></p>
                            <p className="margin-top-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam in nobis fugit voluptatibus at, alias vero libero esse inventore numquam eligendi perferendis asperiores tenetur debitis. Labore voluptate iure doloribus? Labore.</p>
                        </div>
                    </section>
                    
                    <section>
                        <div className="parallax-two">
                            <h2>Learn the Skills</h2>
                        </div>
                    </section>
                    
                    <section>
                        <div className="block">
                            <p><span className="first-character ny">B</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, saepe. Odit maiores animi impedit reiciendis libero qui exercitationem illum nulla magnam, praesentium modi perferendis deserunt voluptas vitae veniam, pariatur perspiciatis.</p>
                            <p className="line-break margin-top-10"></p>
                            <p className="margin-top-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ab recusandae commodi ut minima excepturi quaerat debitis delectus eos praesentium alias animi, deserunt sequi quo! Incidunt aliquid molestiae corrupti unde.</p>
                        </div>
                    </section>
                    
                    <section>
                        <div className="parallax-three">
                            <h2>TeamWork</h2>
                        </div>
                    </section>
                    
                    <section>
                        <div className="block">
                            <p><span className="first-character atw">W</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque necessitatibus ea similique laboriosam enim? Similique ipsa iusto, aliquid soluta expedita facere ab assumenda dicta est dolores libero consequatur adipisci nostrum!</p>
                            <p className="line-break margin-top-10"></p>
                            <p className="margin-top-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quis quas optio, maiores atque aliquam. Quos numquam necessitatibus, dicta similique inventore esse explicabo doloribus nam. Omnis architecto earum dolorum repellendus.</p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
