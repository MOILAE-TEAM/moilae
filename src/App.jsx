// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Header from './layouts/Header.jsx'
import CategoryNav from './layouts/CategoryNav.jsx'
import Home from './pages/Home';
import CreatePostPage from './pages/CreatePostPage.jsx';
import PostDetailPage from './pages/PostDetailPage';
import Footer from './layouts/Footer.jsx';
import { CategoryProvider } from './context/CategoryContext';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Router>
        <CategoryProvider>
          <Header /> 
          <CategoryNav />
          <main style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '200px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/post/:id" element={<PostDetailPage />} />
              {/* <Route path="/" element={<CreatePostPage />} /> */}
            </Routes>
          </main>
          <Footer/>
        </CategoryProvider>
      </Router>
    </div>
  );
}

export default App;
