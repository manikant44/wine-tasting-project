import React from "react";
import { Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const MenuBar = ({ isloggedinselect, ...props }) => (
  <div style = {Test}>
  <Menu secondary >
    {isloggedinselect ?
      <Menu.Item {...props} /> : null}
    <Menu.Menu position='right'>
      {isloggedinselect ?
        null :
        <Menu.Item as={Link} to="/login" name="Login" />
      }
      {isloggedinselect ?
        <Menu.Item as={Link} to="/"></Menu.Item> :
        <Menu.Item as={Link} to="/signup" name="Signup" />
      }
    </Menu.Menu>
  </Menu>
</div>  
);

const Test = {
  marginTop: "-54px",
}

export default MenuBar;
