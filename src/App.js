
import { Card } from 'react-bootstrap';
import './App.css';
import Footer from './components/footer/footer';

import Header from './components/header/header.js';
import Cards from './components/cards/cards';
import Movies from './components/movies/movies';
import Backgroundimg from './components/background/bg';
import About from './components/about me/about';
import Skills from './components/skills/skills';
// ay 7aga baktebha hena heya eli btezhar 3al screen
function App() {
  return (
    <div className='App'>
      {/* <h1 style={{backgroundColor:"pink", fontFamily:"fantasy"}}>hello from react</h1>
      <input type='text'></input>
      <img src=''></img>
      <label htmlFor='username'></label> */}
      {/* <Header />
      <Footer />
      <Cards/> */}
      <Header/>
      <Backgroundimg/>
      <About/>
      <Skills/>
      <Cards/>
      <Footer/>
    </div>
     
  );
}

export default App;
