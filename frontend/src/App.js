import './App.css';
import Login from './pages/Login';
import Register from './pages/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Upload from './pages/Upload';
import ForgotPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';

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
      </Routes>
      <Footer />
    </Router>


  );
}

export default App;
