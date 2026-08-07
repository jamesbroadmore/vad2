import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IntroSplash from "./components/IntroSplash";
import ChatWidget from "./components/ChatWidget";
import Home from "./pages/Home";
import Wheels from "./pages/Wheels";
import Aero from "./pages/Aero";
import Programmes from "./pages/Programmes";
import About from "./pages/About";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <IntroSplash />
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wheels" element={<Wheels />} />
            <Route path="/aero" element={<Aero />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </BrowserRouter>
    </div>
  );
}

export default App;
