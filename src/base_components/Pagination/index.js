import React, { Component } from "react"; 
import { Table,Menu,Icon,Pagination } from 'semantic-ui-react';


class Paginate extends Component {  

    constructor(props) {
     super(props);
     this.state = {
         
    };  
     }

     

     render() {
            return (
                <Pagination
                boundaryRange={0}
                defaultActivePage={1}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                totalPages={10}
                
              />
            )}
    }



    export default  Paginate;