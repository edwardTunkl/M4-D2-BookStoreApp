import React from "react";
import { Card, Row, Col, Form } from "react-bootstrap";

import MySingleBook from "./MySingleBook";
import CommentArea from "./CommentArea";

class MyBookList extends React.Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <Row className="mt-5">
        <Col className="justify-content-center">
          <Form.Group className="mb-3 justify-content-center">            
            <Form.Control
              type="text"
              placeholder="Search here"
              value={this.state.searchQuery}
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
            />
          </Form.Group>
        </Col>
        <Row>
          {this.props.books
            .filter((b) =>
              b.title
                .toLowerCase()
                .includes(this.state.searchQuery.toLowerCase())
            )
            .map((b) => (
              <Col xs={3} key={b.asin}>
                <Card
                  onClick={() => {this.props.selectMovie(b.asin);
                  }}
                  className="shadow mt-2"
                >
                  <Card.Img variant="top" src={b.img} style={{height:"290px"}}/>
                  <Card.Body className="py-0" style={{height:"100px"}}>
                    <Card.Title className="my-0 py-0">
                      <small>{b.title}</small>
                    </Card.Title>                  
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Row>
    );
  }
}
export default MyBookList;
