// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Header from './layouts/Header.jsx'
import Home from './pages/Home';
import CreatePostPage from './pages/CreatePostPage.jsx';
import Footer from './layouts/Footer.jsx';
function App() {


  return (
    <Router>
      <Header /> 
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<CreatePostPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
  
}

export default App
