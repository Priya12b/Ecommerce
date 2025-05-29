//client/src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ProductGrid from './components/ProductGrid';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Recommendations from './components/Recommendations';
import Favorites from './pages/Favorites';
import { Toaster } from 'react-hot-toast';


const Home = () => (
  <>
    <HeroBanner />
    <ProductGrid />
    <Recommendations />
  </>
);

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Toaster position="top-center" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ProductGrid />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
