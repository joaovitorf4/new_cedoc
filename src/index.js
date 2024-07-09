import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './pages_imports/Header';
import Footer from './pages_imports/Footer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Clients from './pages/Clients';
import Services from './pages/Services';
import BPO from './sub_pages/BPO';
import RH from './sub_pages/RH';
import Scanning from './sub_pages/Scanning';
import Signature from './sub_pages/Signature';
import Documents from './sub_pages/Documents';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/services" element={<Services />} />
        <Route path="/BPO" element={<BPO />} />
        <Route path="/RH" element={<RH />} />
        <Route path="/scanning" element={<Scanning />} />
        <Route path="/signature" element={<Signature />} />
        <Route path="/documents" element={<Documents />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
