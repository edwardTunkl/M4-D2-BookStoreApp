import {ListGroupItem, ListGroup, Container, Row, Col, Card, Button } from "react-bootstrap"

import books from '../data/fantasy.json'

import { Component } from "react"


class MyLatestRelease extends Component {
  
    state = {
          selected: false,
          bookID: ""
    }



    commentFunction = async (e, ASIN) => {
      
    this.setState({selected: !this.state.selected})
    this.setState({bookID: ASIN})
    console.log(e, "This is ASIN", ASIN)
    

    try {
          let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/0765327740", {
            method: 'GET',
            headers:  {
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjViYjJkNTI2MjAwMTViNmRjOTMiLCJpYXQiOjE2MjkyODc4NjcsImV4cCI6MTYzMDQ5NzQ2N30.HkhDkrIcH7q04AsuHParGAbLEKxc3bvsAnjh3DGfZIE"
            }
          })
          let comments = await response.json()

          console.log(comments)

    }catch (err) {
      console.log(err)
    }





    }


render() {
    return(
      <>
        <Container>
        <Row>
          {
            books.map(book => (
              <Col key={book.asin}>
                <Card className="bg-light mb-3"
                onClick={(e) => this.commentFunction(e, book.asin)}
                style={{border: this.state.selected ? "1px solid grey" : "none"}}                              
                >
                  <Card.Img variant="top" src={book.img} style={{ height: '230px' }}/>
                  <Card.Body style={{ height: '270px' }}>
                    <Card.Title style={{height: '90px'}} ><small>{book.title}</small></Card.Title>
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


