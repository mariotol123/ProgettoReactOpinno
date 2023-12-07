
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contatti from './pages/Contatti';
import About from './pages/About';
import Error from './pages/Error';

function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/about" element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
