import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectors } from "../ducks";
import { login } from "../thunks";
import { Form, Input, Button, Segment, Grid, Message } from "semantic-ui-react";
import { Field } from "base_components";
import { Link } from 'react-router-dom'

// import { format } from 'url';
// import  validate from "validations";
// import  constraints from "validations";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      e_mail: "",
      p_assword: ""
    };
  }

  // On Form submit, submitting the current state values.
  onSubmit = () => {
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    //   if(validate('password',this.state.password)) {
    //       console.log("check password !!")
    //   }else if(validate('email',this.state.email)) {
    //       console.log("check email !!")
    //   }
    //   else {

    // }
    this.props.login(userData).then(action => {});
  };

  // On Change of Input fields, getting fields name and value
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("=====>", { [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
      <div style = {Test}>
        <Grid textAlign="center">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Segment stacked>
              <Field
                contrl={Input}
                name="email"
                fluid
                icon="user"
                iconPosition="left"
                pholder="Email"
                onChange={this.onChange}
              />
              <Field
                contrl={Input}
                name="password"
                fluid
                icon="lock"
                iconPosition="left"
                type="password"
                pholder="password"
                onChange={this.onChange}
              />
              <Field contrl={Button} color="instagram" fluid>
                Login
              </Field>
              
              <a href="">forgot password</a>
            
            </Segment>
            <Message>
              New to us? <Link to="/Signup">Register</Link>
            </Message>
          </Grid.Column>
        </Grid>
        </div>  
      </Form>
    );
  }
}

const Test = {
  padding: "100px 0px"  
}
const mapState = () =>
  createStructuredSelector({
    isPending: selectors.selectIsPendingLogin(),
    user: selectors.selectCurrentUser(),
    token: selectors.selectCurrentUserToken()
  });
// getting state from redux in props

const mapDispatch = dispatch => bindActionCreators({ login }, dispatch);

export default connect(
  mapState,
  mapDispatch
)(Login);
