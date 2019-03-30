import React, { Component } from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectors } from "../ducks"
import { fetchVendors } from "../thunks";
import features from "features";
import Container from "global/Container";
import { Table } from 'semantic-ui-react'

class VendorsList extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  componentDidMount() {
    console.log("date picker")
    this.props.fetchVendors().then(actions => {
      console.log("----->action", actions)
    })

  }

  render() {
    const { vendors } = this.props;
    return (
      <Container>
        <Table sortable celled fixed color="blue">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                // sorted={column === 'name' ? direction : null}
                // onClick={this.handleSort('name')}
              >
                Name
            </Table.HeaderCell>
              <Table.HeaderCell
                // sorted={column === 'address1' ? direction : null}
                // onClick={this.handleSort('age')}
              >
                Adrress
            </Table.HeaderCell>
              <Table.HeaderCell
                // sorted={column === 'gender' ? direction : null}
                // onClick={this.handleSort('gender')}
              >
                Email
            </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {vendors.map( ({_id, address1, email, name, city,country }) => (
              <Table.Row key={_id}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{address1}{city}{country}</Table.Cell>
                <Table.Cell>{email}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>


    );
  }
}

const mapState = () =>
  createStructuredSelector({
    isPending: selectors.selectIsFetchingVendors(),
    vendors: selectors.selectVendors(),
    logged: features.login.selectors.loginSelector(),
    isloggedinselect: features.login.selectors.isLoggedInSelect()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    { fetchVendors }, dispatch
  )

export default connect(
  mapState,
  mapDispatch
)(VendorsList)