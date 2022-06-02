import React , {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FAQ from "./components/FAQ";
import About from "./components/About";
import Contact from "./components/Contact";
import Preapply from "./components/Preapply";
import Headergato from './components/Headergato';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='index'>
          <Headergato></Headergato>
          <ul>
            <li>
              <Link to="/Preapply">Preapply</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/FAQ">FAQ</Link>
            </li>
          </ul>
          <Routes>
              <Route exact path='/Preapply' element={<Preapply/>}></Route>
              <Route exact path='/About' element={<About/>}></Route>
              <Route exact path='/Contact' element={<Contact/>}></Route>
              <Route exact path='/FAQ' element={<FAQ/>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </Router>
      
    )
  }
}


export default App;