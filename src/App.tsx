import React from 'react';
import './App.css';
import FeedPage from './pages/Feed/Feed';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// COMPONENTS
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  console.log(window.location.pathname)
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
