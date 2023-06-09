import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Contact from "./components/Contact/Contact";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import Features from "./components/Features/Features";
import Services from "./components/Services/Services";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <Features />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
