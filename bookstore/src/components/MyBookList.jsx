import React from "react"
import { Container, Row, Col, Form } from "react-bootstrap"

import MySingleBook from "./MySingleBook"


class MyBookList extends React.Component {

  state = { 
            searchQuery:""
          }

  render(){
      return(  
          <Container>
            <Row>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Search</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Search here" 
                value={this.state.searchQuery}
                onChange={e => this.setState({searchQuery: e.target.value})}
                />
              </Form.Group>
            </Row>
            <Row>
              {
                this.props.books.filter(b => b.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())).map(b => ( 
                      <Col xs={3}>
                      <MySingleBook book={b} />
                      </Col>
                ))
              }           
           </Row>
           </Container>
)
}
}
export default MyBookList