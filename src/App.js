import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar';

// function Header() {
//   return <h1>Hello world</h1>;

// }


// function App() {
//   return <Header />
// }


function App() {
  return (
    <div>
      <Header name="Anna" color="purple" />
      <Main greeting="Howdy" />
      <Sidebar greeting="Howdy" />
    </div>
  )
}

export default App;
