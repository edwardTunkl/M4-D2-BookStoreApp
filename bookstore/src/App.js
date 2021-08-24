import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyJumbotron from './components/MyJumbotron';
import MyFooter from './components/MyFooter';
import MyLatestRelease from './components/MyLatestRelease';

function App() {
  return (
    <div>
      <MyNav name="myBookStore" />
      <MyJumbotron name = "myBookStore" />
      <MyLatestRelease />
      <MyFooter />
    </div>
  );
}

export default App;
