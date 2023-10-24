import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import Home from './page/Home';
import About from './page/About';
import Works from './page/Works';
import Illusts from './page/Illusts';
import Sheets from './page/Sheets';
import Contact from './page/Contact';

import './style.css';

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/works" element={<Works />} /> */}
          <Route path="/illusts" element={<Illusts />} />
          <Route path="/sheets" element={<Sheets />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header>
    // </div>

    // <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/works">Work</Link>
    //         </li>
    //         <li>
    //           <Link to="/contact">Contact</Link>
    //         </li>
    //       </ul>
    //     </nav>
  );
}

export default App;
