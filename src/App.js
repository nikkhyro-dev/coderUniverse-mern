import React from 'react'
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Navigation from './compontents/shared/Navigation';
import Register from './pages/register/Register';
import Login from "./pages/login/Login"

function App() {
  return (
    <BrowserRouter>
<Navigation/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />

    </Routes>
  </BrowserRouter>
  );
}

export default App