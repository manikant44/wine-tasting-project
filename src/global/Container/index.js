import React, { Component } from 'react';
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import features from "features";
import { SideNav, MenuBar } from "base_components"
class Container extends Component {
  constructor() {
    super();
    this.state = {
      menuVisible: true,
    };
}

  render() {
    const { isloggedinselect, children} = this.props;
    return (
      <div>
        <MenuBar isloggedinselect={isloggedinselect} 
        onClick={() => this.setState({ menuVisible: !this.state.menuVisible })} />
        <SideNav visible={this.state.menuVisible} >
        {children}
        </SideNav>
       
        </div>
    );
  }
}

const mapState = () =>
  createStructuredSelector({
    isloggedinselect: features.login.selectors.isLoggedInSelect()
  })



export default connect(
  mapState,
)(Container)