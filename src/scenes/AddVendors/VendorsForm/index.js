// import React, { Component } from 'react';
// import { bindActionCreators } from "redux"
// import { connect } from "react-redux"
// import { addVendors } from "../thunks"
// import { Form, Input, Button } from "semantic-ui-react";
// import { Field } from "base_components";

// class AddVendors extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name:'',
//       email: '',
//       address1 :'',
//       address2:'', 
//       city:'',
//       country:'' 
//     };
//   }

//   // On Form submit, submitting the current state values.
//   onSubmit = () => {
//     this.props.addVendors(this.state).then(action=>{
//       console.log("user", action)

//     })
//   }

//   // On Change of Input fields, getting fields name and value
//   onChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//     console.log("=====>", { [e.target.name]: e.target.value })
//   }

//   render() {
//     return (
//       <Form onSubmit={this.onSubmit}>
//         <Field contrl={Input} name="name" pholder="Name" onChange={this.onChange} />
//         <Field contrl={Input} name="email" pholder="Email" onChange={this.onChange} />
//         <Field contrl={Input} name="address1" pholder="Address" onChange={this.onChange} />
//         <Field contrl={Input} name="address2" pholder="Address (optional)" onChange={this.onChange} />
//         <Field contrl={Input} name="city" pholder="City" onChange={this.onChange} />
//         <Field contrl={Input} name="country" pholder="Country" onChange={this.onChange} />
//         <Field contrl={Button}>Submit</Field>
//       </Form>
//     );
//   }
// }

// const mapDispatch = dispatch =>
//   bindActionCreators(
//     { addVendors }, dispatch
//   )

// export default connect(
//   mapDispatch
// )(AddVendors)


