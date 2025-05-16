import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Убедись, что файл существует и путь правильный

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
      </Routes>
    </Router>
  );
}

export default App;