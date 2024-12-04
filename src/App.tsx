import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// PÁGINAS

import FeedPage from './pages/Feed/Feed';
import MensagensPage from './pages/Mensagens/Mensagens';
import PerfilPage from './pages/Perfil/Perfil';
import SobrePage from './pages/Sobre/Sobre';

// COMPONENTS
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

export default function App() {

  return (
      <Router>
        <div className="App">
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/feed" element={<FeedPage />}/>
              <Route path="/mensagens" element={<MensagensPage />} />
              <Route path="/perfil" element={<PerfilPage />} />
              <Route path="/sobre" element={<SobrePage />} />
            </Routes>
          <Footer />
        </div>
      </Router>
  );
}