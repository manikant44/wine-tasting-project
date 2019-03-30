import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectors } from '../ducks'
import { signup } from '../thunks'
import { Form, Input, Button, Segment, Grid } from 'semantic-ui-react'
import { Field } from 'base_components'
import validate from 'validations'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmpassword: ''
    }
  }

  // On Form submit, submitting the current state values.
  onSubmit = () => {
    const userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirmpassword: this.state.confirmpassword
    }
    console.log("====>",userData);
    // if (validate("name", this.state.name)) {
    //   console.log("enter valid username  !!");
    // } else if (validate("email", this.state.email)) {
    //   console.log("enter valid email  !!");
    // } else if (validate("password", this.state.password)) {
    //   console.log("enter secure & strong password  !!");
    // } else {
    this.props.signup(userData).then(action => {
      console.log('user', action)
    })
    //   console.log("user", this.props.user);
    // }

    if (this.state.password !== this.state.confirmpassword) {
      console.log('password mismatch!!')
    }
  }

  // On Change of Input fields, getting fields name and value
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    console.log('=====>', { [e.target.name]: e.target.value })
  }

  render () {
    return (
      <Form onSubmit={this.onSubmit}>
        <div style={Test}>
          <Grid textAlign='center'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Segment raised>
                <Field
                  contrl={Input}
                  name='name'
                  fluid
                  icon='user'
                  iconPosition='left'
                  pholder='name'
                  onChange={this.onChange}
                />
                <Field
                  contrl={Input}
                  name='email'
                  fluid
                  icon='mail'
                  iconPosition='left'
                  pholder='email'
                  onChange={this.onChange}
                />
                <Field
                  contrl={Input}
                  name='password'
                  type='password'
                  icon='lock'
                  iconPosition='left'
                  pholder='password'
                  onChange={this.onChange}
                />
                <Field
                  contrl={Input}
                  name='confirmpassword'
                  type='password'
                  icon='lock'
                  iconPosition='left'
                  pholder='confirm password'
                  onChange={this.onChange}
                />
                <Field contrl={Button} color='instagram' fluid>
                  signup
                </Field>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </Form>
    )
  }
}

const Test = {
  padding: '100px 0px'
}

const mapState = () =>
  createStructuredSelector({
    isPending: selectors.selectIsPendingSignup()
  })
// getting state from redux in props

const mapDispatch = dispatch => bindActionCreators({ signup }, dispatch)

export default connect(
  mapState,
  mapDispatch
)(Login)
