import React, { Component } from "react";
import {Header,Icon,Image } from "semantic-ui-react";


class Profile extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
      return (
        <div>
        <Header as='h2' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>Welcome !!!!</Header.Content>
        </Header>
      </div>

      );
  
  }
}



export default Profile;
  

