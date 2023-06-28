import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {WOW} from 'wowjs';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import Download from './pages/Download'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  useEffect(() => {
    const wow = new WOW({
      offset: 100,
      mobile: false,
      live: true,
    });

    wow.init();
  }, []);

  return (
    <>
      <div className="
        max-w-[2500px] 
        mx-auto ">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route  path='/' element={<Homepage />} />
            <Route  path='/download' element={<Download />} />
            <Route  path='/login' element={<Login />} />
            <Route  path='/sign-up' element={<Register />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
