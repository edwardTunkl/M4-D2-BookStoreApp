import {ListGroupItem, ListGroup, Container, Row, Col, Card, Button } from "react-bootstrap"

import books from '../data/fantasy.json'

import { Component } from "react"


class MyLatestRelease extends Component {

render() {
    return(
      <>
        <Container>
        <Row>
          {
            books.map(book => (
              <Col key={book.asin}>
                <Card style={{ width: '250px' }} className="bg-light">
                  <Card.Img variant="top" src={book.img} style={{ height: '330px' }}/>
                  <Card.Body style={{ height: '210px' }}>
                    <Card.Title style={{height: '70px'}} ><small>{book.title}</small></Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem className="p-1"><strong>ASIN: </strong>{book.asin} </ListGroupItem>
                        <ListGroupItem className="p-1"><strong>PRICE: </strong>{book.price} €</ListGroupItem>
                        <ListGroupItem className="p-1"><strong>CATEGORY: </strong>{book.category} </ListGroupItem>
                        </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            )
          )
          }
        </Row>
        </Container>
      </>
    )
  }
}
export default MyLatestRelease


