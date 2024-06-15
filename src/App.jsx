// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home.jsx';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import ServiceDetails from './pages/ServiceDetails';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { NavigationProvider } from './NavigationContext.jsx'; // Import NavigationProvider

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <NavigationProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<div><Home /><About /><Contact /></div>} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetails />} />
          </Routes>
        </div>
      </NavigationProvider>
    </Router>
  );
}

export default App;
