import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Clients from './Clients';
import Services from './Services';

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
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
