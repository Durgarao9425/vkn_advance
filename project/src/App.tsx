import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Partners from './components/Partners';
import Services from './components/Services';
import Booking from './components/Booking';
import Dashboard from './components/Dashboard';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Partners />
      <Services />
      <Booking />
      <Dashboard />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;