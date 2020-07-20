import React, { Component } from 'react'
import{connect} from 'react-redux'
import{schoolAPI} from "../redux/actions/schoolActions"

import "./Schools.css"

//import PropTypes from 'prop-types'

export  class Schools extends Component {
    state={
        mySchools:[]
    }
    async componentDidMount (){
        try {
             await this.props.schoolAPI()
            //console.log(list);
            this.setState({
                mySchools:[...this.props.schoolLists.schools]
            })
            console.log("new state",this.state.mySchools);
            
            console.log("school props",this.props.schoolLists.schools);
            
        } catch (error) {
            
        };
        
    }

    render() {
        return (
            <>
                {this.state.mySchools.map((item)=>{
                    return(<div class="holder">
                    <div class="item place">
                      <div class="imageHolder"></div>
                      <div class="details">
                        <div class="type"></div>
                        <div class="meta">
                          <p class="title">
                            {item.name}
                          </p>
                          <p class="info">
                          {item.missionStatement}<br/><br/>
                          </p>
                          <p class="info">
                            Contact:<a target="blank" href={"mailto:"+ item.contact}>{item.contact}</a><br/><br/>
                          </p>
                          <p class="info">
                            WebSite:<a href={item.website} target="blank">{item.website}</a><br/><br/>
                          </p>
                        </div>
                        <div class="extra">
                          <p class="rating">9.8/10</p>
                          <div class="ratingBar"><div class="green"></div></div>
                          <p class="info">(320 Ratings)</p>
                        </div>
                      </div>
                    </div>
                  </div>)
                })}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    schoolLists: state.schools,
    authUser: state.authUser,
});

export default connect(mapStateToProps, {
    schoolAPI
})(Schools);
