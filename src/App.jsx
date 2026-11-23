import {Routes, Route} from 'react-router'
import Navbar from './components/Navbar.jsx'
import './App.css';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Gallery from './pages/Gallery.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element ={<Home />}/>
        <Route path="/about" element ={<About />}/>
        <Route path="/gallery" element ={<Gallery />}/>
      </Routes>
    </>
  );
}

export default App;