import { selectors } from "../ducks"
import { connect } from "react-redux"
import React, { Component } from 'react'
import { fetchProducts,fetchUpdateProducts} from "../thunks"
import { bindActionCreators } from "redux"
import { createStructuredSelector } from "reselect"
import Container from "global/Container";
import Paginate from "base_components/Pagination";
import { Table, Icon, Menu, Button} from 'semantic-ui-react'

class ProductsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        active: 1,
   };  
    }


  componentDidMount() {
    const { fetchProducts } = this.props

   fetchProducts().then(actions => {
      console.log("----->action here!!!!!!!", actions)
    })

  }

  handlePaginationChange = (e,value) => {
    this.setState({ active: value.activePage})
    
    console.log("product list!!!!!!>>>",e.target.value, value.activePage)
  }


//  ItemList = () => {

//   let data = itemData.length;
//   let page_size = 4;
//   let indexdata = (active - 1) * page_size;
//   let total_pages= (data/page_size);

//   paginatedItems = items.slice(indexdata).slice(0, page_size),

// } 
  

  fetchProducts = (event) => {
    console.log('====>event.target id >>>', event.target.value)
    console.log('====>event.target name >>>', event.target.id)

    if(event.target.id==='edit'){
      console.log("in edit");
      this.setState({ [event.target.id]: event.target.value })
      this.props.fetchUpdateProducts(event.target.value)
      console.log("Row id is :-",event.target.value)  
      console.log("Button name is :-",event.target.id)

    }else if(event.target.name==='clone') {
      console.log("in clone");
      this.setState({ [event.target.id]: event.target.value })
      console.log("Row id is :-",event.target.value)  
      console.log("Button name is :-",event.target.id)

      
    }else if (event.target.name==='delete') {
      console.log("in delete");
      this.setState({ [event.target.id]: event.target.value })
      console.log("Row id is :-",event.target.value)  
      console.log("Button name is :-",event.target.id)

    }

    else {
      console.log("all button")
    }
      // this.setState({ [event.target.name]: event.target.id })
      //  console.log("Row id is :-",event.target.id)  
      //  console.log("Button name is :-",event.target.name)
  }

  render() {
    const { active} = this.state
    const { products } = this.props;
    let data = products.length;
    let pages = Math.round(data/4);
    let indexdata = (active - 1) * 4;

console.log("======>products data>>",data,pages,);
console.log("=====indexdTA",indexdata)
    return (
      <Container>
        <Table sortable celled fixed color="blue">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
              // sorted={column === 'name' ? direction : null}
              // onClick={this.handleSort('name')}
              >
                Image
              </Table.HeaderCell>
              <Table.HeaderCell
              // sorted={column === 'address1' ? direction : null}
              // onClick={this.handleSort('age')}
              >
                Name
              </Table.HeaderCell>
              <Table.HeaderCell
              // sorted={column === 'gender' ? direction : null}
              // onClick={this.handleSort('gender')}
              >
                Brand
              </Table.HeaderCell>
              <Table.HeaderCell
              // sorted={column === 'gender' ? direction : null}
              // onClick={this.handleSort('gender')}
              >
                Actions
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {products.slice(indexdata)
				       .slice(0,4).map(({ _id, image, name, brand }) => (
              <Table.Row key={_id}>
                <Table.Cell>
                  {/* <img src={`${apiUrl}/${.image}`} style={{ height: 50, width: 50 }} alt="no image" /> */}
                </Table.Cell>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{brand}</Table.Cell>
                <Table.Cell>
                  <Icon as="button" name="edit"  value={_id} id="edit"  onClick={this.fetchProducts}   />
                  <Icon as="button" name="clone"  value={_id} id="clone"  onClick={this.fetchProducts}   />
                  <Icon as="button" name="delete"  value={_id} id="delete"  onClick={this.fetchProducts}   />

                  {/*<Button icon='clone' color="instagram" id={_id} onClick={this.fetchProducts}/>
            <Button icon='delete' color="instagram" id={_id} onClick={this.fetchProducts}/>*/}

                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Paginate
        onPageChange={this.handlePaginationChange}
        active={active}
        totalPages = {pages}

        />

      </Container>
    );
  }
}

const mapState = () =>
  createStructuredSelector({
    products: selectors.selectProducts(),
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    { fetchProducts, fetchUpdateProducts}, dispatch
  )

export default connect(
  mapState,
  mapDispatch
)(ProductsList)