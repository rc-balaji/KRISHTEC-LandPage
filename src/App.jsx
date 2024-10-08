import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Products from './pages/Products';
import Services from './pages/Services/Services.jsx';
import Contact from './pages/Contacts/Contact.jsx';
import ProductDetails from './pages/ProductDetails';
import ServiceDetails from './pages/InternShips/ServiceDetails';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { NavigationProvider } from './NavigationContext.jsx'; // Import NavigationProvider
import Footer from './components/Footer/Footer.jsx';
import MOU from './pages/MOU/MOU.jsx';
import ChatBot from './components/ChatBot.jsx'; // Import the ChatBot component


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
            <Route path="/mou" element={<MOU />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetails />} />
          </Routes>
          <Footer />
          <ChatBot /> 
        </div>
      </NavigationProvider>
    </Router>
  );
}

export default App;
