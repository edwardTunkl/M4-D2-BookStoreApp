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
      <Row>
        <Row className="ml-4">
          <Form.Group className="mb-3">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search here"
              value={this.state.searchQuery}
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
            />
          </Form.Group>
        </Row>
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
                >
                  <Card.Img variant="top" src={b.img} />
                  <Card.Body className="py-0">
                    <Card.Title className="my-0 py-0">
                      <small>{b.title}</small>
                    </Card.Title>
                    <Card.Text></Card.Text>
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
