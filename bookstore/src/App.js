import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyJumbotron from "./components/MyJumbotron";
import MyFooter from "./components/MyFooter";
import MyBookList from "./components/MyBookList";
import MySingleBook from "./components/MySingleBook";
import CommentArea from "./components/CommentArea";
import About from "./components/About";
import Register from "./components/Register";

import books from "./data/fantasy.json";
import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  state = {
    selectedAsin: "",
  };

  selectMovie = (Asin) => {
    this.setState({
      selectedAsin: Asin,
    });
  };

  render() {
    return (
      <div style={{ backgroundColor: "lightGrey" }}>
        <Router>
            <MyNav name="myBookStore" />
            <MyJumbotron name="myBookStore" />
          <Rout component={About} path="/about" />
          <Rout component={Register} path="/register" />  
            <Container style={{ width: "300px" }}>
              <MySingleBook book={books[5]} selectMovie={this.selectMovie} />
            </Container>
            <Row className="mx-3 my-2">
              <Col sm={8}>
                <MyBookList books={books} selectMovie={this.selectMovie} />
              </Col>
              <Col sm={4}>
                <CommentArea asin={this.state.selectedAsin} />
              </Col>
            </Row>
            <MyFooter />
        </Router>
      </div>
    );
  }
}
export default App;
