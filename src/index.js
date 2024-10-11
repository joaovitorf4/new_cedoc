import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './imports/Header';
import Footer from './imports/Footer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Clients from './pages/Clients';
import Services from './pages/Services';
import Auth from './pages/Auth';
import Form from './pages/Form';
import BPO from './sub_pages/BPO';
import RH from './sub_pages/RH';
import Scanning from './sub_pages/Scanning';
import Signature from './sub_pages/Signature';
import Documents from './sub_pages/Documents';
import ProtectedRoute from './pages/ProtectedRoute';
import { UserProvider } from './pages/UserContext';
import FormDemo from './pages/FormDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UserProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact bgColor='#CACACA'/>} />
        <Route path="/about" element={<About bgColor='#CACACA'/>} />
        <Route path="/clients" element={<Clients bgColor='#CACACA'/>} />
        <Route path="/services" element={<Services bgColor='#CACACA'/>} />
        <Route path="/BPO" element={<BPO bgColor='#CACACA'/>} />
        <Route path="/RH" element={<RH bgColor='#CACACA'/>} />
        <Route path="/scanning" element={<Scanning bgColor='#CACACA'/>} />
        <Route path="/signature" element={<Signature bgColor='#CACACA'/>} />
        <Route path="/documents" element={<Documents bgColor='#CACACA'/>} />
        <Route path="/formdemo" element={<FormDemo bgColor='#CACACA'/>} />
        <Route path="/auth" element={<Auth />} />
        <Route element={<ProtectedRoute/>}>
          <Route path="/form" element={<Form />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
