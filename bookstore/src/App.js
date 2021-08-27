import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyJumbotron from './components/MyJumbotron';
import MyFooter from './components/MyFooter';
import MyBookList from './components/MyBookList';
import MySingleBook from './components/MySingleBook';
import books from './data/fantasy.json'


function App() {
  return (
    <div>
      <MyNav name="myBookStore" />
      <MyJumbotron name = "myBookStore" />
      <MySingleBook book={books[0]} />
      <MyBookList books={books} />
      <MyFooter />
    </div>
  );
}

export default App;
