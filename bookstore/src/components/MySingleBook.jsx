import React from "react"
import { Container, Card} from "react-bootstrap"

class MySingleBook extends React.Component {

    state = {
          selected: false,
         
    }

  
  render(){
    console.log(this.props.book.asin)
    return (
          <Container>
              <Card 
              onClick={() => { 
                      this.setState({selected: !this.state.selected}); 
                      this.props.selectMovie(this.props.book.asin) 
              }}
              style={{border: this.state.selected ? "3px solid blue" : "none"}}
              >
              <Card.Img variant="top" src={this.props.book.img} />
              <Card.Body className="py-0">
                <Card.Title className="my-0 py-0"><small>{this.props.book.title}</small> </Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
              </Card>
          </Container>
  )
}
}
export default MySingleBook