import './App.css';
import './style.css';
import Login from './pages/Login';
import Register from './pages/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Upload from './pages/Upload';
import ForgotPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Error from './pages/Error';
import Faqs from './pages/Faqs';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="upload" element={<Upload />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path='*' element={<Error />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/cart' element={<Cart />} />


      </Routes>
      <Footer />
    </Router>


  );
}

export default App;
