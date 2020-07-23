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
                    return(<div className="holder">
                    <div className="item place">
                      <div className="imageHolder">
                        <img src={item.image} alt=""/>
                      </div>
                      <div className="details">
                        <div className="type">
                          <img src={item.thumb} alt=""/>
                        </div>
                        <div className="meta">
                          <p className="title">
                            {item.name}
                          </p>
                          <p className="info">
                          {item.missionStatement}<br/><br/>
                          </p>
                          <p className="info">
                            Contact:<a target="blank" href={"mailto:"+ item.contact}>{item.contact}</a><br/><br/>
                          </p>
                          <p className="info">
                            WebSite:<a href={item.website} target="blank">{item.website}</a><br/><br/>
                          </p>
                        </div>
                        <div className="extra">
                          <p className="rating">9.8/10</p>
                          <div className="ratingBar"><div className="green"></div></div>
                          <p className="info">(320 Ratings)</p>
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
