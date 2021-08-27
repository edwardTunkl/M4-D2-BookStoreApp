import React from "react"
import { Container, Card, Button } from "react-bootstrap"
import CommentArea from "./CommentArea"

class MySingleBook extends React.Component {

    state = {
          selected: false
    }

  render(){
    return (
          <Container>
              <Card style={{ width: '10rem' }} 
              onClick={() => this.setState({selected: !this.state.selected})}
              style={{border: this.state.selected ? "3px solid blue" : "none"}}
              >
              <Card.Img variant="top" src={this.props.book.img} />
              <Card.Body className="py-0">
                <Card.Title className="my-0 py-0"><small>{this.props.book.title}</small> </Card.Title>
                <Card.Text>
                </Card.Text>
                <Button className="mb-2"variant="dark"><small>Go somewhere</small></Button>
              </Card.Body>
              </Card>
              {
                this.state.selected && <CommentArea asin={this.props.book.asin} />
              }
          </Container>
  )
}
}

export default MySingleBook