import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import Home from './routes/Home.jsx';
import LogIn from './routes/LogIn.jsx';
import SignUp from './routes/SignUp.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Log-In" element={<LogIn />} />
      <Route path="/Sign-Up" element={<SignUp />} />
    </Routes>
  </BrowserRouter>

)
