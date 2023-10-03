import React from 'react';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import Rockets from './components/Rocket';

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Rockets />} />
        </Routes>
      </div>
    </>
  );
}

export default App;