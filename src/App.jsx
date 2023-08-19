import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Rent from './pages/Rent';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='bg-purple-400/20 h-screen py-8'>
        <Routes>
          <Route path="/" element={<Navigate to="/rent" replace={true} />} />
          <Route path="rent" element={<Rent />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
