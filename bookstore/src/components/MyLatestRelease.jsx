import { Container, Row, Col, Card, Button } from "react-bootstrap"

import books from '../data/fantasy.json'

import { Component } from "react"


class MyLatestRelease extends Component {

render() {
    return(
      <>
        <Container>
        <Row>
          <Col>
          {
            books.map(book => (

              <Card key={book.asin} >
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Button variant="primary">Buy</Button>
              </Card.Body>
              </Card>
            )
          )
          }
          </Col>
        </Row>
        </Container>
      </>
    )
  }
}
export default MyLatestRelease


