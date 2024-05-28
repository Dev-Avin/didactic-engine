import React from 'react';
import Home from './pages/Home.jsx';
import { Route, Routes } from 'react-router';
import Leaderboard from './pages/Leaderboard.jsx';
import Dud from './pages/Dud.jsx';
import Navbar from './pages/Navbar.jsx';

function App() {
  return (
      <>
        <Navbar/>
        <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/leaderboard"  element={<Leaderboard />} />
             <Route path='*' element={<Dud/>}/>// Default path for any non visitable link
        </Routes>
      </>
  );
}

export default App;
