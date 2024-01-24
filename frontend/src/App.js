import './App.css';
import Login from './pages/Login';
import Register from './pages/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
      <Footer />
    </Router>


  );
}

export default App;
