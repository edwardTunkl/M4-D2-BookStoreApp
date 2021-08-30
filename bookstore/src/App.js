import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyJumbotron from "./components/MyJumbotron";
import MyFooter from "./components/MyFooter";
import MyBookList from "./components/MyBookList";
import MySingleBook from "./components/MySingleBook";
import CommentArea from "./components/CommentArea";
import books from "./data/fantasy.json";
import {Row, Col} from 'react-bootstrap'


function App() {
  return (
    <div>
      <MyNav name="myBookStore" />
      <MyJumbotron name="myBookStore" />
      <MySingleBook book={books[0]} />
      <Row>
        <Col sm={8}>
          <MyBookList books={books} />
        </Col>
        <Col sm={4}>
          <CommentArea asin={books.asin} />
        </Col>
      </Row>
      <MyFooter />
    </div>
  );
}

export default App;
