import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
import {
  Segment,
  Menu,
  Icon,
  Sidebar,
  Dropdown,
  Header,
  Button
} from 'semantic-ui-react'

// const SideNav = ({ children, ...props }) => (

class SideNav extends Component {
  constructor () {
    super()
    this.state = {
      activeItem: 'vendors',
    //   activeItem:'products'
    }
  }

  // export default class SideNav extends Component {

  //  state = { activeItem: 'vendors' }

  //  const { children, ...props } = this.props

  // setRedirect = () => {
  //     this.setState({
  //       redirect: true
  //     })
  //   }
  //   renderRedirect = () => {
  //     if (this.state.redirect) {
  //       return <Redirect to="/secure/vendors" />
  //     }
  //   }

  handleItemClick = (e, { name }) => {
      
    console.log('=======>', e.target)
    this.setState({ activeItem: name ,
        backgroundColor: 'transparent',
        boxShadow: 'none',
        borderColor: '#1b1c1d',
        fontWeight: 700,
        color: 'rgba(0,0,0,.95)'
    })
  }

 

  render () {
    const { activeItem } = this.state

    return (
      <Sidebar.Pushable as={Segment} style={TestCol}>
        <Menu size='huge' inverted style={Test1}>
          <Menu.Item color='blue'>
            <img src='../image/personal_wine.png' size='large' />
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item color='blue'>
              <div>
                <Icon link name='mail' />
                test@test.com
                <Icon link name='user circle' />
              </div>
            </Menu.Item>
            <Dropdown item icon='user'>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Icon name='user' />
                  my profile
                </Dropdown.Item>
                <Dropdown.Item>
                  {' '}
                  <Icon name='sign-out' />
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>

        <Menu icon stackable pointing secondary style={Test4}>
          {/* <Menu.Item as={Link} name = 'vendors' to="/secure/vendors" active={activeItem === 'vendors'}
             onClick={this.handleItemClick}>
                <Icon name="home" color="blue" /> <div>
                    <Header sub>vendors</Header>
                </div></Menu.Item>
            <Menu.Item as={Link} name = 'products' to="/secure/products"  active={activeItem === 'products'}
            onClick={this.handleItemClick}>
                <Icon name="glass martini" color="blue" />
                <div><Header sub>products</Header></div></Menu.Item> */}
          <Menu.Item 
            name='home'
            as={Link}
            to='/secure/vendors'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <Icon name='home' />
            Vendors
          </Menu.Item>

          <Menu.Item 
            name='glass martini'
            as={Link}
            to='/secure/products'
            active={activeItem === 'glass martini'}
            onClick={this.handleItemClick}
          >
            <Icon name='glass martini' />
            Products
          </Menu.Item>
          <Button icon>
    <Icon name='add' />
  </Button>      

          </Menu>

        <Sidebar.Pusher>
          <Segment basic>{this.props.children}</Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

const Test1 = {
  height: '87px',
  backgroundColor: '#49769c'
}

const TestCol = {
  backgroundColor: '#F1F1F1'
}

// const BorderTest = {
//     backgroundColor: "transparent",
//     // -webkit-box-shadow: none;
//     boxShadow: "none",
//     borderColor: "#1b1c1d",
//     fontWeight: 700,
//     color: "rgba(0,0,0,.95)"
//   }

const Test4 = {
  backgroundColor: 'white',
  marginTop: '-29px',
  marginLeft: '82px',
  marginRight: '65px',
  height: '50px'
}

SideNav.propTypes = {
  children: PropTypes.any.isRequired
}
export default SideNav
