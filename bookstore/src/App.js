import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyJumbotron from './components/MyJumbotron';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div>
      <MyNav name="myBookStore" />
      <MyJumbotron name = "myBookStore" />
      <MyFooter />
    </div>
  );
}

export default App;
