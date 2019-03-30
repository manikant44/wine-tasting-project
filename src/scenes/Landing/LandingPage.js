import React, { Component } from 'react';
import { SideNav, MenuBar } from "base_components"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import features from "features"
import { Segment, Button, Header, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      menuVisible: false,
    };
  }
  render() {
    const { isloggedinselect } = this.props
    return (

        <Segment placeholder>

      
          <div style={ImageBackground} >
            <Link to="/login"><Button color="instagram">Login</Button></Link>
          </div>
        </Segment>
      

    );
  }
}

const ImageBackground = {
  backgroundImage: "url('./image/showcase.jpg')",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  padding: "250px 0",
  marginTop: "-14px",
  marginBottom: "-14px",

};


const mapState = () =>
  createStructuredSelector({
    isloggedinselect: features.login.selectors.isLoggedInSelect()
  })
export default connect(
  mapState
)(LandingPage)