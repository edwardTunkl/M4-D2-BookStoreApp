import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyJumbotron from "./components/MyJumbotron";
import MyFooter from "./components/MyFooter";
import MyBookList from "./components/MyBookList";
import MySingleBook from "./components/MySingleBook";
import CommentArea from "./components/CommentArea";
import About from "./components/About";
import Registration from "./components/Registration";

import books from "./data/fantasy.json";
import { Row, Col } from "react-bootstrap";
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
          <Route path="/" exact render={(routerProps) => <MyJumbotron {...routerProps} name="myBookStore" /> }/>
          <Route component={About} path="/about" />
          <Route component={Registration} path="/register" />  
          <Route path="/" exact render={(routerProps) => <MySingleBook {...routerProps} book={books[5]} selectMovie={this.selectMovie} />} />
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
