import { Container, Row, Col, Card, Button } from "react-bootstrap"

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
                <Card style={{ width: '250px' }} >
                  <Card.Img variant="top" src={book.img} style={{ height: '330px' }}/>
                  <Card.Body style={{ height: '120px' }}>
                    <Card.Title>{book.title}</Card.Title>
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


