// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Header from './layouts/Header.jsx'
import Home from './pages/Home';
import CreatePostPage from './pages/CreatePostPage.jsx';
import Footer from './layouts/Footer.jsx';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Router>
        <Header /> 
        <main style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '200px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<CreatePostPage />} /> */}
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App
