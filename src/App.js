import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MyProfile from './components/myProfile';
import Missions from './components/missions';
import Rockets from './components/Rockets';
import './styles/App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route className="Missions" path="/react-capstone/missions" element={<Missions />} />
        <Route path="/react-capstone/myProfile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
